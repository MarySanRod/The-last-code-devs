const express = require('express')
const usersRoute = express.Router()
const usersModel = require('../controllers/usersControllers')
const tokenMiddleware = require('../middlewares/tokenMiddelware')

usersRoute.use(tokenMiddleware.verifyToken);

usersRoute.route('/')
.get(usersModel.listUsers)
.post(usersModel.createUsers);


usersRoute.route('/:id')
.get(usersModel.listUsers)
.put(usersModel.modifyUsers)
.delete(usersModel.deleteUsers);


module.exports = usersRoute
module.exports = usersRoute