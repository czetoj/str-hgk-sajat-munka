const http = require('http')
const SiteRouter = require('./router/site.router')
const port = process.env.PORT || 8080

const urlLog = req => {
  const date = new Date().toLocaleDateString('hu-HU', { year: 'numeric', month: '2-digit', day: '2-digit' }).replace('-', '.').replace('-', '.')
  console.log(`Date: ${date} Url: ${req.url} Method: ${req.method}`)
}

http.createServer((req, res) => {
  SiteRouter[req.url]
    ? SiteRouter[req.url](res)
    : SiteRouter['/404'](res)
  urlLog(req)
})
  .on('error', err => `server error: ${err.message}`)
  .on('listening', () => console.log(`server is running at ${port}`))
  .listen(port)
