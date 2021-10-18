const express = require('express');
const cors = require('cors');
const app = express();
const morgan = require('morgan');

app.use(morgan('dev'))
app.use(cors());
app.use(express.json())

const mongoose = require('./database/connection')
const usersModel = require('./database/users');
const productsModel = require('./database/products');
const usersRoute = require('./routes/usersRoute')
const authRoute = require('./routes/authRoute')

/////////// Routes ///////////
app.use('/users',require('./routes/usersRoute'))
app.use('/auth',require('./routes/authRoute'))

///////////////////////////////////////////////////////

app.get('/products', (req, res) => {
  console.log(req.params);
  productsModel.find().then((data) => {
    res.json(data);
  }).catch(err => {
    res.send(err);
  });
  /* Conectarse a mongo, consultar los datos y retornarlos */
});

app.get('/products/:user', (req, res) => {
  console.log(req.params);
  res.json({ message: 'Hola, vas a listar!!' });
  /* Conectarse a mongo, consultar los datos y retornarlos */
});

app.post('/products', (req, res) => {
  console.log(req.params, req.body, req.headers);
  productsModel.create(
    {
      product: 'Patineta',
      price: 100000
    }
  ).then((data) => {
    res.json(data);
  }).catch(err => {
    res.send(err);
  });
});

app.put('/products/:user', (req, res) => {
  const { id } = req.params;
  console.log(req.params, req.body, req.headers);
  productsModel.findByIdAndUpdate(id, req.body).then((data) => {
    res.json(data);
  }).catch(err => {
    res.send(err);
  });
  // res.json({ message: 'Hola, vas a modificar algo' });
});

app.delete('/products/:user', (req, res) => {
  console.log(req.params);
  productsModel.findByIdAndDelete(req.params.id).then(data => {
    res.json(data);
  }).catch(err => {
    res.send(err);
  });
  //res.json({ message: 'Hola, vas a borrar algo' });
});

app.get('/products', (req, res) => {
  res.json({ message: 'Hola, vas a listar' });
  /* Conectarse a mongo, consultar los datos y retornarlos */
});


/////////// Start server ///////////
app.set('port',5000)
app.listen(app.get('port'),()=>{
  console.log('Escuchando por el puerto', app.get('port'))
})