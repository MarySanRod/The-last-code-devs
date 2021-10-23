const productsModel = require('../database/products');

listProducts = (req, res) => {
    console.log(req.params);
    productsModel.find().then((data) => {
      res.json(data);
    }).catch(err => {
      res.send(err);
    });
    /* Conectarse a mongo, consultar los datos y retornarlos */
  };
  
  getProducts = (req, res) => {
    console.log(req.params);
    productsModel.find({ _id: req.params.id }).then((data) => {
      res.json(data);
    }).catch(err => {
      res.send(err);
    });
    // res.json({ message: 'Hola, vas a listar uno específico!!' });
    /* Conectarse a mongo, consultar los datos y retornarlos */
  };
  
  createProducts = (req, res) => {
    console.log(req.params, req.body, req.headers);
    productsModel.create(req.body)
    .then((data) => {
      res.json(data);
    }).catch(err => {
      res.send(err);
    });
  };
  
  modifyProducts = (req, res) => {
    console.log(req.params, req.body, req.headers);
    productsModel.findByIdAndUpdate(req.params.id, req.body).then((data) => {
      res.json(data);
    }).catch(err => {
      res.send(err);
    });
    // res.json({ message: 'Hola, vas a modificar algo' });
  };
  
  deleteProducts = (req, res) => {
    console.log(req.params);
    productsModel.findByIdAndDelete(req.params.id).then(data => {
      res.json(data);
    }).catch(err => {
      res.send(err);
    });
    //res.json({ message: 'Hola, vas a borrar algo' });
  };
  
  module.exports = {
    listProducts,
    getProducts,
    createProducts,
    modifyProducts,
    deleteProducts
  }
  