const { createReadStream, createWriteStream, unlink } = require('fs');
const path = require('path');
const { createGzip } = require('zlib')

const src = './duma.txt';
const srcName = path.basename(src, path.extname(src));

const fileHandlerCallback = (err) => {
    if (err) throw err
    console.log('file process succesfull');
}

const readableStream = createReadStream(src, {
    encoding: 'utf-8',
    highWaterMark: 11
})

const writeableStream = createWriteStream(srcName + '.bak');
const createCompressedFile = createWriteStream(srcName + '.gzip');

readableStream.pipe(writeableStream);

readableStream
    .pipe(createGzip())
    .pipe(createCompressedFile)

if (writeableStream) {
    unlink(src, fileHandlerCallback);
    unlink(srcName + '.bak', fileHandlerCallback);
}