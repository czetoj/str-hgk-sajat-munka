const ProductsService = async (productsApi) => {
  const products = await productsApi.get()

  const sum = (sumPrice = 0) => {
    products.forEach(item => { sumPrice += item.price * item.count })
    return sumPrice
  }

  const avg = (sumCount = 0) => {
    products.forEach(item => { sumCount += item.count })
    return sum() / sumCount
  }

  const lessthan = (count) => {
    console.log(products.filter(item => item.count < count))
  }

  return {
    sum,
    avg,
    lessthan
  }
}

module.exports = ProductsService
