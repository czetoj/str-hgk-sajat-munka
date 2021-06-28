const yargs = require('yargs')
const { count } = require('./option')
const ProductsApi = require('./products.api')
const ProductsService = require('./products.service')
const { dbFilePath, propName } = require('./config')

const productsApi = ProductsApi(dbFilePath, propName);
(async () => {
  const {
    sum,
    avg,
    lessthan
  } = await ProductsService(productsApi)

  yargs
    .version('1.0.0')
    .usage('Usage: <command> [options]')
    .command({
      command: 'sum',
      describe: 'Az összes termék ára',
      handler: () => console.log(sum())
    })
    .command({
      command: 'avg',
      describe: 'Az összes termék árának átlaga',
      handler: () => console.log(avg())
    })
    .command({
      command: 'lessthan',
      describe: 'a paraméternél kevesebb',
      builder: { count },
      handler: (args) => lessthan(args.count)
    })
    .locale('en')
    .strict()
    .help()
    .parse() // process.argv
})()
