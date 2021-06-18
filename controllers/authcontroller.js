const express = require('express'); //Chamando o express
const bcrypt = require('bcryptjs') //Chamando o bcrypt
const jwt = require('jsonwebtoken') // Chamando JWT
const User = require('../models/user'); // Tranzendo o modulo de usuarios

const Produtos = require('../models/produtos');


const authConfig = require('../config/auth.json'); //Chamando o Segredo do token
const { collection } = require('../models/user');

const router = express.Router(); // Criando o router




//router.use(authmid)

//Gerando o token 

function generateToken(params = {}) {
    return jwt.sign(params, authConfig.secret, {
        expiresIn: 86400
    });
}

//Função de Autenticação (Pra testar token e ver se ele consegue se autenticar)

function fJWT(req, res, next) {
    const authHeader = req.cookies.token || req.query.token;
    
   if(!authHeader)
    return res.status(401).send('Você não tem autorização pra acessar essa pagina')

    const parts = authHeader.split(' ');

    if (!parts.length === 2)
    return res.status(401).send({ error: 'Seu token de Autorização não está com o padrão de 2 partes'})

    const [scheme, token] = parts;

    if(!/^Bearer$/i.test(scheme)) {
        return res.status(401).send({error: 'Token mal formatado'});
    }

    //const token = authHeader;

    jwt.verify(token, authConfig.secret, (err, decoded) => {
        if (err) return res.status(401).send({error: 'Token Invalido'})
    

    req.userId = decoded.id;
    return next();
});
};


//                            R O T A S

//Rota para Tela Inicial
router.get('/', (req, res) => {
    res.marko(require('../templates/index.marko'))
})

//Criando a rota de registro (Pra acessar o formulario)

router.get('/register', (req, res) => {
    res.marko(require('../templates/form.marko'))
})

//Checando se o email já está sendo usado e Criando Usuario

router.post('/register', async (req, res) => {

    const { email } = req.body
    try {
        //Caso o email já tenha sido cadastrado

        if (await User.findOne( {email} ))
        return res.send({error: "Usuario já está sendo usado"})

        const user = await User.create(req.body);

        user.senha = undefined;

        return res.redirect('/authenticate')

    } catch (err) {
        return res.status(400).send( {error: "Deu ruim ai"+err})
    }
});


//Criando a rota pra acessar a tela de login

router.get('/authenticate', (req, res) => {
    res.marko(require('../templates/login.marko'))
})

//Efetuando o login (Procurando se o email e a senha foram cadastradas)

router.post('/authenticate', async (req, res) => {
    const {email, senha} = req.body

    const user = await User.findOne({ email }).select('+senha');

    // Se o usuario não for encontrado, normalmente email digitado de forma incorreta

    if (!user){
        return res.status(400).send({ error: "Usuario não encontrado"})
    }
    // Caso a senha informada não for a mesma do banco de dados

    if(!await bcrypt.compare(senha, user.senha)){
    return res.status(400).send({ error: 'Senha invalida' })}

    //Ocultando a senha quando for efetuada a listagem

    user.senha = undefined;

    //Caso consiga efetuar o login, Será redirecionado para a tela inicial
    const token = jwt.sign({id: user.id}, authConfig.secret, {
        expiresIn: 86400
    });
    //console.log(token)

    //Alocando o token no cookies para utilizar nas requisições futuras        
    res.cookie('token','Bearer '+token,{maxAge: 60000,httpOnly:true})
     
    return res.redirect('/')
   
})


//Rota pra acessar a tela de pagamente, vulgo carrinho
router.get('/pagamentos',(req, res) => {
    res.marko(require('../templates/tela-pagamento.marko'));
})



/*------------------------ROTAS AUTENTICADAS--------------------*/

router.get ('/aqui', async (req, res) => {
    
    const teste = await User.find({}).lean()
   return res.send(teste)
})

//Rota para tela de produtos

router.get('/produtos',fJWT, (req, res) => {

    res.marko(require('../templates/produtos.marko'));
})

/*router.post('/produtos', (req, res) => {
    const id = req.body.id;
    return res.json(Produtos);
})*/



//Criando a rota de registro (Pra acessar o formulario)


//Exportando o modulo pra ser utilizado, porém com o prefixo ('/auth')

module.exports = app => app.use(router)