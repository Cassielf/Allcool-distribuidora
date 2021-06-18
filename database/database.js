const mongoose = require('mongoose'); //Chamando o mongoose

//Efetuando a conexão com o banco de dados
mongoose.Promise = global.Promise;
var mongoDB = 'mongodb://localhost/noderest';
mongoose.connect(mongoDB,{useNewUrlParser: true}).then( () => {
    console.log('Conexão com o banco de dados realizada com sucesso :D')
}).catch( (err) => {
    console.log('Não foi possivel estabelecer coenxão com o banco de dados devido a: '+err)
});

var db = mongoose.connection;

//exportando o modulo do banco de dados

module.exports = mongoose