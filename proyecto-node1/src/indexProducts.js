const express = require('express');
const app = express();
app.use(express.json());

const mongoose = require('./database/connection');
//const { listStudents, createStudent, getStudent, modifyStudent, deleteStudent } = require('./controllers/studentsController');
const productsModel = require('./database/products');

// app.route('/students').get(listStudents).post(createStudent);
// app.route('/students/:id').get(getStudent).put(modifyStudent).delete(deleteStudent);

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
    //   product: 'Patineta',
    //   price: 100000
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

app.listen(5000, () => {
  console.log('Ya el servidor está corriendo!');
});