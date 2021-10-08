const usersModel = require('../database/users');

listStudents = (req, res) => {
  console.log(req.params);
  usersModel.find().then((data) => {
    res.json(data);
  }).catch(err => {
    res.send(err);
  });
  /* Conectarse a mongo, consultar los datos y retornarlos */
};

getStudent = (req, res) => {
  console.log(req.params);
  usersModel.find({ _id: req.params.id }).then((data) => {
    res.json(data);
  }).catch(err => {
    res.send(err);
  });
  // res.json({ message: 'Hola, vas a listar uno específico!!' });
  /* Conectarse a mongo, consultar los datos y retornarlos */
};

createStudent = (req, res) => {
  console.log(req.params, req.body, req.headers);
  usersModel.create(
    {
      dni: 2323452354345
    }
  ).then((data) => {
    res.json(data);
  }).catch(err => {
    res.send(err);
  });
};

modifyStudent = (req, res) => {
  console.log(req.params, req.body, req.headers);
  usersModel.findByIdAndUpdate(req.params.id, req.body).then((data) => {
    res.json(data);
  }).catch(err => {
    res.send(err);
  });
  // res.json({ message: 'Hola, vas a modificar algo' });
};

deleteStudent = (req, res) => {
  console.log(req.params);
  usersModel.findByIdAndDelete(req.params.id).then(data => {
    res.json(data);
  }).catch(err => {
    res.send(err);
  });
  //res.json({ message: 'Hola, vas a borrar algo' });
};

module.exports = {
  listStudents,
  getStudent,
  createStudent,
  modifyStudent,
  deleteStudent
}
