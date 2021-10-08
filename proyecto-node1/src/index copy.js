const express = require('express');
const mongoose = require('./database/connection');
const users = require('./database/users');
/*import express from 'express';
import { mongoose } from './database/conection';
import students from './database/student';
*/
const app = express();
//app.use(express.json())

app.get('/users', (req, res) => {
  res.json({ message: 'Hola, vas a listar' });
  /* Conectarse a mongo, consultar los datos y retornarlos */
});

app.get('/users', (req, res) => {
  console.log(req.params);
  /*students.find().then(data => {
    console.log(data);
    res.json(data);
  }).catch(err => res.send(err));*/
  res.json({ message: 'Hola, vas a listar!!' });
  /* Conectarse a mongo, consultar los datos y retornarlos */
});

app.get('/users/:user', (req, res) => {
  console.log(req.params);
  /*students.find({ _id: req.params.id }).then(data => {
    console.log(data);
    res.json(data);
  }).catch(err => res.send(err));*/
  res.json({ message: 'Hola, vas a listar!!' });
  /* Conectarse a mongo, consultar los datos y retornarlos */
});

app.post('/users', (req, res) => {
  console.log(req.params, req.body, req.headers);
  //students.create({ name: 'asdf asd f', age: 87, semester: 98 }).then(data => req.json(data)).catch(err => res.send(err));
  res.json({ message: 'Hola, vas a crear algo nuevo' });
});

app.put('/users/:user', (req, res) => {
  console.log(req.params, req.body);
  /*students.findByIdAndUpdate(req.params.id, req.body).then((data) => {
    res.json(data);
  }).catch(err => res.send(err));*/
  res.json({ message: 'Hola, vas a modificar algo' });
});

app.delete('/users/:user', (req, res) => {
  console.log(req.params);
  // students.findByIdAndDelete(req.params.id).then(() => res.json('successfully deleted')).catch(err => res.send(err));
  res.json({ message: 'Hola, vas a borrar algo' });
});

//app.use(express.json())

app.get('/users', (req, res) => {
  res.json({ message: 'Hola, vas a listar' });
  /* Conectarse a mongo, consultar los datos y retornarlos */
});

app.get('/users', (req, res) => {
  console.log(req.params);
  /*students.find().then(data => {
    console.log(data);
    res.json(data);
  }).catch(err => res.send(err));*/
  res.json({ message: 'Hola, vas a listar!!' });
  /* Conectarse a mongo, consultar los datos y retornarlos */
});

app.get('/users/:id', (req, res) => {
  console.log(req.params);
  /*students.find({ _id: req.params.id }).then(data => {
    console.log(data);
    res.json(data);
  }).catch(err => res.send(err));*/
  res.json({ message: 'Hola, vas a listar!!' });
  /* Conectarse a mongo, consultar los datos y retornarlos */
});

app.post('/users', (req, res) => {
  console.log(req.params, req.body, req.headers);
  //students.create({ name: 'asdf asd f', age: 87, semester: 98 }).then(data => req.json(data)).catch(err => res.send(err));
  res.json({ message: 'Hola, vas a crear algo nuevo' });
});

app.put('/users/:id', (req, res) => {
  console.log(req.params, req.body);
  /*students.findByIdAndUpdate(req.params.id, req.body).then((data) => {
    res.json(data);
  }).catch(err => res.send(err));*/
  res.json({ message: 'Hola, vas a modificar algo' });
});

app.delete('/users/:id', (req, res) => {
  console.log(req.params);
  // students.findByIdAndDelete(req.params.id).then(() => res.json('successfully deleted')).catch(err => res.send(err));
  res.json({ message: 'Hola, vas a borrar algo' });
});

app.listen(5000, () => {
  console.log('Ya el servidor está corriendo!');
});