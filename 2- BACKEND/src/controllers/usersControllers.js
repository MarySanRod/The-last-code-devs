const usersModel = require('../database/users');

listUsers = (req, res) => {
  console.log(req.params);
  usersModel.find().then((data) => {
    res.json(data);
  }).catch(err => {
    res.send(err);
  });
  /* Conectarse a mongo, consultar los datos y retornarlos */
};

getUsers = (req, res) => {
  console.log(req.params);
  usersModel.find({ _id: req.params.id }).then((data) => {
    res.json(data);
  }).catch(err => {
    res.send(err);
  });
  // res.json({ message: 'Hola, vas a listar uno específico!!' });
  /* Conectarse a mongo, consultar los datos y retornarlos */
};

createUsers = (req, res) => {
  console.log(req.params, req.body, req.headers);
  usersModel.create().then((data) => {
    res.json(data);
  }).catch(err => {
    res.send(err);
  });
};

modifyUsers = (req, res) => {
  console.log(req.params, req.body, req.headers);
  usersModel.findByIdAndUpdate(req.params.id, req.body).then((data) => {
    res.json(data);
  }).catch(err => {
    res.send(err);
  });
  // res.json({ message: 'Hola, vas a modificar algo' });
};

deleteUsers = (req, res) => {
  console.log(req.params);
  usersModel.findByIdAndDelete(req.params.id).then(data => {
    res.json(data);
  }).catch(err => {
    res.send(err);
  });
  //res.json({ message: 'Hola, vas a borrar algo' });
};

module.exports = {
  listUsers,
  getUsers,
  createUsers,
  modifyUsers,
  deleteUsers
}
