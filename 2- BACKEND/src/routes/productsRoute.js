const express = require('express')
const productsRoute = express.Router()
const productsModel = require('../controllers/productsControllers')
const tokenMiddleware = require('../middlewares/tokenMiddelware')

// productsRoute.use(tokenMiddleware.verifyToken);

productsRoute.route('/')
.get(productsModel.listProducts)
.post(productsModel.createProducts);


productsRoute.route('/:id')
.get(productsModel.listProducts)
.put(productsModel.modifyProducts)
.delete(productsModel.deleteProducts);


module.exports = productsRoute
module.exports = productsRoute