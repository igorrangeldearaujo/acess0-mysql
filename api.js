const db = require('./db')
const categories = require('./categories')(db)
const products = require('./products')(db)


const test = async() => {
    // await categories.create(['New Category from api'])
    // await categories.remove(4)
    // await categories.update(3,'update from API')
    // const cats = await categories.findAll()
    // console.log(cats)
    // await products.addImage(3, ['img test','url'])
    // const prods = await products.findAllByCategory(3)
    await products.updateCategories(3,[3])
    const prods = await products.findAllPaginated()
    console.log(prods)
}
test()
