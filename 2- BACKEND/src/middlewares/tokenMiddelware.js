const jwt = require('jsonwebtoken');
const JWT_KEY = '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'

verifyToken = (req, res, next) =>{
    const {token} = req.headers;
    console.log('Este es mi middleware', req.headers);
    jwt.verify(token, JWT_KEY , function(err, decoded){
        if (err){
            console.log('Hubo error al verificar el token');
            res.status(401).send('No autorizado');
            return;
        }
    console.log(decoded)
    });
    next();
}

module.exports = {
    verifyToken
}