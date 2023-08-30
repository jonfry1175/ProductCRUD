const productRoute = require('express').Router()
const ProductController = require('../controllers/ProductController')
const productController = require('../controllers/ProductController')

productRoute.get('/', productController.getProducts)
productRoute.post('/create', ProductController.create)
productRoute.delete('/delete/:id', productController.delete)
productRoute.put('/update/:id', productController.update)  

module.exports = productRoute