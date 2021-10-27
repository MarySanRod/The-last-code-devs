// const {GoogleAuth} = require('google-auth-library');
const {OAuth2Client} = require('google-auth-library');
const jwt = require('jsonwebtoken');
const { findOneAndUpdate } = require('../database/users');
const CLIENT_ID = process.env.CLIENT_ID;
const JWT_KEY = process.env.JWT_KEY;
const usersModel = require('../database/users')

googleAuth = (req, res) => {
    console.log(req.headers, req.body, req.params);
    const {token} = req.body;

    const client = new OAuth2Client(CLIENT_ID);
    client.verifyIdToken({
        idToken: token,
        audience: CLIENT_ID
    }).then(resp => {
       console.log(resp);
       const {name, email} = resp.payload;
       console.log(name, email);
       ////////// Actualizar base de datos //////////
       return usersModel.findOneAndUpdate({email: email}, {name: name}, {new: true, upsert: true});
    }).then(user=>{
        console.log(user);
        ////////// Crear token de la aplicación y retornar //////////
        var appToken = jwt.sign({user: user}, JWT_KEY);
        res.json(appToken);
    })
    .catch(err => {
    console.log(err);
    res.status(500).send(err);
    });
}

module.exports = { googleAuth };