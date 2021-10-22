const salesModel = require('../database/sales');

listSales = (req, res) => {
    console.log(req.params);
    salesModel.find().then((data) => {
      res.json(data);
    }).catch(err => {
      res.send(err);
    });
    /* Conectarse a mongo, consultar los datos y retornarlos */
};

createSales = (req, res) => {
    console.log(req.params, req.body, req.headers);
    salesModel.create(req.body).then((data)=>{
      res.json(data);
    }).catch(err=>{
      res.send(err);
    });
  }


module.exports = {
  listSales,
  createSales
}
