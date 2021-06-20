const { readFile, writeFile } = require('fs').promises

const MoviesApi = (path, prop) => ({
  async get() {
    const data = await readFile(path)
    return JSON.parse(data)[prop]
  },
  save(data) {
    writeFile(path, JSON.stringify({ [prop]: data }))
  }
})

module.exports = MoviesApi
