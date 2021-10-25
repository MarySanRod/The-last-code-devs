const express = require('express')
const salesRoute = express.Router()
const salesModel = require('../controllers/salesControllers')
const tokenMiddleware = require('../middlewares/tokenMiddelware')

// salesRoute.use(tokenMiddleware.verifyToken);
salesRoute.route('/')
.get(salesModel.listSales)
.post(salesModel.createSales);


module.exports = salesRoute;