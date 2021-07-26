const express = require("express");
const routes = require('./routes/route');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const createError = require('http-errors');

const app = express();
const port = process.env.PORT || 3000;
const swaggerDocument = YAML.load('./docs/swagger.yaml');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(routes);

app.use((req, res, next) => {
    next(createError(404));
});

app.use((err, req, res, next) => {
    res.status(err.statusCode || 500);
    res.json({
        hasError: true,
        message: err.message
    });
})


app.listen(port, () => {
    console.log(`The server is running at ${port}...`);
});