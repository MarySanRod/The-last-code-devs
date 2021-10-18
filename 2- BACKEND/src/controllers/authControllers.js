// const {GoogleAuth} = require('google-auth-library');
const {OAuth2Client} = require('google-auth-library');
const jwt = require('jsonwebtoken');
const { findOneAndUpdate } = require('../database/users');
const CLIENT_ID = '430836011138-lt77ca65jq3jvt7im3jq0d9jl1o960oh.apps.googleusercontent.com'
const JWT_KEY = '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'
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