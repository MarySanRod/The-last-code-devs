const express = require('express')
const salesRoute = express.Router()
const salesModel = require('../controllers/salesControllers')

salesRoute.route('/')
.get(salesModel.listSales)
.post(salesModel.createSales);


module.exports = salesRoute;