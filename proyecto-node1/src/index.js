const express = require('express');
const app = express();
app.use(express.json());

const mongoose = require('./database/connection');
//const { listStudents, createStudent, getStudent, modifyStudent, deleteStudent } = require('./controllers/studentsController');
const usersModel = require('./database/users');

// app.route('/students').get(listStudents).post(createStudent);
// app.route('/students/:id').get(getStudent).put(modifyStudent).delete(deleteStudent);

app.get('/users', (req, res) => {
  console.log(req.params);
  usersModel.find().then((data) => {
    res.json(data);
  }).catch(err => {
    res.send(err);
  });
  /* Conectarse a mongo, consultar los datos y retornarlos */
});

app.get('/users/:user', (req, res) => {
  console.log(req.params);
  res.json({ message: 'Hola, vas a listar!!' });
  /* Conectarse a mongo, consultar los datos y retornarlos */
});

app.post('/users', (req, res) => {
  console.log(req.params, req.body, req.headers);
  usersModel.create(
    {
      user: 'Mary',
      password: 123456
    }
  ).then((data) => {
    res.json(data);
  }).catch(err => {
    res.send(err);
  });
});

app.put('/users/:user', (req, res) => {
  const { id } = req.params;
  console.log(req.params, req.body, req.headers);
  usersModel.findByIdAndUpdate(id, req.body).then((data) => {
    res.json(data);
  }).catch(err => {
    res.send(err);
  });
  // res.json({ message: 'Hola, vas a modificar algo' });
});

app.delete('/users/:user', (req, res) => {
  console.log(req.params);
  usersModel.findByIdAndDelete(req.params.id).then(data => {
    res.json(data);
  }).catch(err => {
    res.send(err);
  });
  //res.json({ message: 'Hola, vas a borrar algo' });
});

app.get('/users', (req, res) => {
  res.json({ message: 'Hola, vas a listar' });
  /* Conectarse a mongo, consultar los datos y retornarlos */
});

app.listen(5000, () => {
  console.log('Ya el servidor está corriendo!');
});