/*const jwt = require('jsonwebtoken')
const authConfig = require('../config/auth.json');

module.exports = (req, res, next) => {
    const authHeader = req.headers.authorization || req.query.token;

    if(!authHeader)
    return res.status(401).send({ error: 'Não tem token'})

    const parts = authHeader.split(' ');

    if (!parts.length === 2)
    return res.status(401).send({ error: 'Token não tem as 2 partes'})

    const [scheme, token] = parts;

    if(!/^Bearer$/i.test(scheme)) {
        return res.status(401).send({error: 'Token mal formatado'});
    }

    //const token = authHeader;

    jwt.verify(token, authConfig.secret, (err, decoded) => {
        if (err) return res.status(401).send({error: 'Token Invalido'})
    

    req.userId = decoded.id;
    return next();
})
};*/