const express = require('express');
const authController = require('../controllers/authControllers')
const authRoute = express.Router();


authRoute.post('/google',authController.googleAuth)

module.exports = authRoute;