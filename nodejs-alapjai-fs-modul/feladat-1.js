const { mkdir, writeFile } = require('fs').promises;

const webProjekt = 'webProjekt';

const createFolder = (folderName, fileName) => {
    mkdir(`./${webProjekt}/${folderName}`)
        .then(() => writeFile(`./${webProjekt}/${folderName}/${fileName}`))
        .catch((err) => console.log('\x1b[31m]', err.message))
}

const createStarterTemplate = () => {
    mkdir(webProjekt)
        .then(() => {
            createFolder('controllers', 'site.controller.js');
            createFolder('routers', 'site.router.js');
            createFolder('views', 'index.html');
            writeFile(`./${webProjekt}/app.js`);
        })
        .catch((err) => console.log('\x1b[31m]', err.message))
}

createStarterTemplate();