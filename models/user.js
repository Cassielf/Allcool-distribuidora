const mongoose = require('../database/database') // Chamando o banco de dados através do arquivo de conexão
const bcrypt = require('bcryptjs') //Chamando o bcrypt pra fazer a criptografia da senha não hora da criação

//Criando um schema no mongodb (collection)

const UserSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
    },

    date: {
        type: Date,
        required: true,
    },
    
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
    },

    cpf: {
        type: Number,
        required: true
    },

    endereco: {
        type: String,
        required: true
    },

    cidade: {
        type: String,
        required: true
    },

    estado: {
        type: String,
        required: true
    },

    senha: {
        type: String,
        required: true,
        select: false,
    },

    numcartao: {
        type: Number,
        required: true
    },

    nomecartao: {
        type: String,
        required: true
    },

    cvv: {
        type: Number,
        required: true
    },

    vencicartao: {
        type: String,
        required: true
    },

    cep: {
        type: Number,
        required: true
    },

    createdAt: {
        type: Date,
        default: Date.now,
    },
});

UserSchema.pre('save', async function(next) {
    const hash = await bcrypt.hash(this.senha, 10)
    this.senha = hash

    next()
})


//Setando o modelo de banco de dados

const User = mongoose.model('User', UserSchema);

// Exportando o modulo para ser utilizado em outros arquivos

module.exports = User;