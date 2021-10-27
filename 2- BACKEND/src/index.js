const express = require('express');
const cors = require('cors');
const app = express();
const morgan = require('morgan');

if (process.env.NODE_ENV !== 'production') {
  console.log('No estamos para producción');
  require('dotenv').config();
  console.log('process.env', process.env.PORT);
}

app.use(morgan('dev'))
app.use(cors());
app.use(express.json())

const mongoose = require('./database/connection');

const authRoute = require('./routes/authRoute');
const usersRoute = require('./routes/usersRoute');
const productsRoute = require('./routes/productsRoute');
const salesRoute = require('./routes/salesRoute')

/////////// Routes ///////////
app.use('/auth',require('./routes/authRoute'));
app.use('/users',require('./routes/usersRoute'));
app.use('/products',require('./routes/productsRoute'));
app.use('/sales', require('./routes/salesRoute'))


/////////// Start server ///////////
app.set('port',process.env.PORT)
app.listen(app.get('port'),()=>{
  console.log('Escuchando por el puerto', app.get('port'))
})