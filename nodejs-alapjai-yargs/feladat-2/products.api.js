const { readFile } = require('fs').promises

const ProductsApi = (path, prop) => ({
  async get () {
    const data = await readFile(path)
    return JSON.parse(data)[prop]
  }
})

module.exports = ProductsApi
