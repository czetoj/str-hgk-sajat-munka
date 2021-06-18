const { readFile } = require('fs').promises
const { writeFile } = require('fs')
const Logger = require('./Logger')
const logger = new Logger()

const readFileWrapper = async (file, options) => {
    try {
        const result = await readFile(file, options);
        const resultArray = result.split(' ')

        for (let index = 0; index < resultArray.length; index++) {
            resultArray[index] = resultArray[index].charAt(0).toUpperCase() + resultArray[index].slice(1)
        }
        const sentence = resultArray.join(' ')
        return sentence
    }
    catch (err) {
        logger.error(err.message);
    }
}

const writeFileWrapper = (path, data) => {
    writeFile(path, data, (err) => {
        if (err) logger.error(err.message);
        logger.success('File transform successful.')
    })
}

readFileWrapper('./duma.txt', { encoding: 'utf-8' })
    .then((sentence) => writeFileWrapper('./dumaCopy.txt', sentence))
