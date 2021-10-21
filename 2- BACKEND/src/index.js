const express = require('express');
const cors = require('cors');
const app = express();
const morgan = require('morgan');

app.use(morgan('dev'))
app.use(cors());
app.use(express.json())

const mongoose = require('./database/connection');
const usersModel = require('./database/users');
const productsModel = require('./database/products');
const authRoute = require('./routes/authRoute');
const usersRoute = require('./routes/usersRoute');
const productsRoute = require('./routes/productsRoute');

/////////// Routes ///////////
app.use('/auth',require('./routes/authRoute'));
app.use('/users',require('./routes/usersRoute'));
app.use('/products',require('./routes/productsRoute'));




/////////// Start server ///////////
app.set('port',5000)
app.listen(app.get('port'),()=>{
  console.log('Escuchando por el puerto', app.get('port'))
})