/*const express = require('express'); //importando o express
routes = express.Router(); //importando a aplicaçãp de rotas
const mongoose = require('mongoose') // Carregando o mongoose na pagina
require('./models/Usuario') //importando o model de usuario
const bcrypt = require('bcryptjs');


const Usuario = mongoose.model('usuarios'); // Utilizando o model de forma externa


routes.get('/cadastro', (req, res) => {
    res.marko(require('./templates/form.marko'))
})

//Rota pra Acessar o Formulario
routes.get('/', (req, res) => {
    res.marko(require('./templates/index.marko'))
})

//Rota para tela de pagamentos

routes.get('/pagamentos', (req, res) => {
    res.marko(require('./templates/tela-pagamento.marko'));
})


//Rota para tela de produtos

routes.get('/produtos', (req, res) => {
    res.marko(require('./templates/produtos.marko'))
})

//Rota para a tela de login
routes.get('/login', (req, res) =>{
    res.marko(require('./templates/login.marko'))
})

routes.post('/login', (req, res) => {
    console.log(req.body)
})


//Pegando os dados do Formulario e mandando pro banco de dados
routes.post('/registro', (req, res) => {


    //Checando se o email já foi cadastrado
    Usuario.findOne({email: req.body.email}).then( (usuario) => {
        if (usuario){
            console.log('Já existe um usuario com esse email')
            res.redirect('/cadastro')    
        }else{
            
            const novoUsuario = new Usuario({
                nome: req.body.nome,
                date: req.body.date,
                cpf: req.body.cpf,
                endereco: req.body.endereco,
                cidade: req.body.cidade,
                estado: req.body.estado,
                cep: req.body.cep,
                email: req.body.email,
                senha: req.body.senha,
                numcartao: req.body.numcartao,
                nomecartao: req.body.nomecartao,
                cvv: req.body.cvv,
                vencicartao: req.body.vencicartao
            })

            //Criptografando o a senha
            bcrypt.genSalt(10, (erro, salt) => {
                bcrypt.hash(novoUsuario.senha, salt, (erro, hash) => {
                    if(erro){
                        console.log('Houve um erro meu bom')
                        res.redirect('/cadastro')
                    }

                    novoUsuario.senha = hash

                    novoUsuario.save().then( () => {
                        console.log('Salvo com sucesso')
                        res.redirect('/login')
                    }).catch( () => {
                        console.log('Houve um erro ao salvar o ususario')
                        res.redirect('/cadastro')
                    })
                })
            })

        }
    }).catch( (err) => {
        console.log('Deu erro ai')
    })
    
    //Salvando o novo usuario e mandando feedback
.catch((err) => {
        console.log('Não foi possivel salvar o usuario'+err)
    });
})


//exportando o modulo
module.exports = routes;*/