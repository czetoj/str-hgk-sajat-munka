const option = ({ alias, describe, type = 'string', demandOption = true } = {}) => ({ alias, describe, type, demandOption })

const count = option({
  alias: 'c',
  describe: 'product\'s number',
  type: 'number'
})

module.exports = Object.freeze({
  count
})
