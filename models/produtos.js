const mongoose = require('mongoose'); //Chamando o mongoose

const ProdutosSchema = mongoose.Schema({
    foto: {
        type: String,
        select: false,
    },

    nome: {
        type: String,
        unique: true,
    },

    preco: {
        type: Number,
    },

    descricao: {
        type: String,
    }
})
//Collection
mongoose.model('Produtos', ProdutosSchema)

const Produto = mongoose.model('Produtos')
/*
new Produto({
    foto: "/assets/img/imagemcoca-cola.jpg",
    nome: "Coca-Cola (lata)",
    preco: 3.98,
    descricao: "É a marca jovem, ousada, irreverente e inovadora, que desce redondo entre os milhões e mais diversos Brasileiros.."
}).save().then(() => {
console.log('Produto Cadastrado com Sucesso')
}).catch( () => {
console.log('produto não foi cadastrado com sucessos')
}),

new Produto({
    foto: "/assets/img/imagemCerveja Skol.jpg",
    nome: "Cerveja Skol (lata)",
    preco: 3.98,
    descricao: "É a marca jovem, ousada, irreverente e inovadora, que desce redondo entre os milhões e mais diversos Brasileiros.."
}).save().then(() => {
console.log('Produto Cadastrado com Sucesso')
}).catch( () => {
console.log('produto não foi cadastrado com sucessos')
}),

new Produto({
    foto: "/assets/img/imagemcerveja-heineken.jpg",
    nome: "cerveja-heineken",
    preco: 3.99,
    descricao: "heineken lager beer, ou simplesmente heineken é uma cerveja pale lager com 5% de alcool por volume produzido pela cervejaria holandesa heineken international."
}).save().then(() => {
console.log('Produto Cadastrado com Sucesso')
}).catch( () => {
console.log('produto não foi cadastrado com sucessos')
})

new Produto({
    foto: "/assets/img/imagemaguatonica.jpg",
    nome: "Água tônica",
    preco: 2.69,
    descricao: "água tonica e um refrigerante que originalmente continha apenas soda, açucar e quinina."
}).save().then(() => {
console.log('Produto Cadastrado com Sucesso')
}).catch( () => {
console.log('produto não foi cadastrado com sucessos')
})

new Produto({
    foto: "/assets/img/imagemcervejadevassa.jpg",
    nome: "Cerveja Devassa(lata)",
    preco: 3.01,
    descricao: "Devassa é a marca de uma cerveja criada em 2002, e inicialmente artesanal e em 2007 adquirida pela Brasil Kirin."
}).save().then(() => {
console.log('Produto Cadastrado com Sucesso')
}).catch( () => {
console.log('produto não foi cadastrado com sucessos')
})

new Produto({
    foto: "/assets/img/imagemcachaçapitu.jpg",
    nome: "Cachaça Pitú (lata)",
    preco: 4.29,
    descricao: "Pitú é uma industria de cachaça do municipio de Vitoria de Santo Antão"
}).save().then(() => {
console.log('Produto Cadastrado com Sucesso')
}).catch( () => {
console.log('produto não foi cadastrado com sucessos')
})

new Produto({
    foto: "/assets/img/imagemcervejapetra.jpg",
    nome: "Cerveja Petra (lata)",
    preco: 3.79,
    descricao: "Toda linha Petra, usa exclusivamente água retirada de veios profundos da região da serra de Petrópolis."
}).save().then(() => {
console.log('Produto Cadastrado com Sucesso')
}).catch( () => {
console.log('produto não foi cadastrado com sucessos')
})

new Produto({
    foto: "/assets/img/imagemmontila.jpg",
    nome: "Montila",
    preco: 29.90,
    descricao: "Montilla é uma marca de rum e vodka de propriedade do conglomerado empresarial francês Pernod Ricard."
}).save().then(() => {
console.log('Produto Cadastrado com Sucesso')
}).catch( () => {
console.log('produto não foi cadastrado com sucessos')
})

new Produto({
    foto: "/assets/img/imagemvodkaabsolut.jpg",
    nome: "Absolut Vodka ",
    preco: 75.90,
    descricao: "Absolut é uma marca de vodka sueca fundada em 1879 por L.O."
}).save().then(() => {
console.log('Produto Cadastrado com Sucesso')
}).catch( () => {
console.log('produto não foi cadastrado com sucessos')
})

new Produto({
    foto: "/assets/img/imagemstolichnaya.jpg",
    nome: "Stolichnaya Vodka ",
    preco: 89.90,
    descricao: "Stolichnaya é uma vodka russa feita com grãos de trigo e centeio."
}).save().then(() => {
console.log('Produto Cadastrado com Sucesso')
}).catch( () => {
console.log('produto não foi cadastrado com sucessos')
})

new Produto({
    foto: "/assets/img/imagemchivas-regal.jpg",
    nome: "Chivas Regal",
    preco: 149.90,
    descricao: "Chivas Regal é uma mistura de uísque escoces produzido por Chivas brothers, pertencete ao grupo Pernod Ricard."
}).save().then(() => {
console.log('Produto Cadastrado com Sucesso')
}).catch( () => {
console.log('produto não foi cadastrado com sucessos')
})

new Produto({
    foto: "/assets/img/imagemgim.jpg",
    nome: "Gim",
    preco: 124.90,
    descricao: "Gim ou Gin é uma bebida destilada á base de cereais."
}).save().then(() => {
console.log('Produto Cadastrado com Sucesso')
}).catch( () => {
console.log('produto não foi cadastrado com sucessos')
})

new Produto({
    foto: "/assets/img/imagemred bull.jpg",
    nome: "Energético Red Bull",
    preco: 7.20,
    descricao: "Red Bull é uma bebida energética vendida pela companhia austríaca Red Bull GMBH."
}).save().then(() => {
console.log('Produto Cadastrado com Sucesso')
}).catch( () => {
console.log('produto não foi cadastrado com sucessos')
})

new Produto({
    foto: "/assets/img/imagemtntenergydrink.jpg",
    nome: "TNT Energy Drink (lata)",
    preco: 5.39,
    descricao: "TNT Energy Drink é uma marca brasileira de bebida energética de propriedade da cervejaria Petropolis."
}).save().then(() => {
console.log('Produto Cadastrado com Sucesso')
}).catch( () => {
console.log('produto não foi cadastrado com sucessos')
})

new Produto({
    foto: "/assets/img/imagemmonsterenergy.jpg",
    nome: "Monster Energy (lata)",
    preco: 6.40,
    descricao: "Monster Energy é uma marca norte-americana de bebida energética, lançada pela Hansen Natural em 2002 e produzida pela Monster Beverage cO."
}).save().then(() => {
console.log('Produto Cadastrado com Sucesso')
}).catch( () => {
console.log('Produto não foi cadastrado com sucessos')
})

new Produto({
    foto: "/assets/img/imagemdellvalefrut.jpg",
    nome: "Del Valle Frut Uva (1L)",
    preco: 4.29,
    descricao: "Del Valle e uma marca de suco é produzida com uvas selecionadas e cultivadas pela fazenda Timbáuba."
}).save().then(() => {
console.log('Produto Cadastrado com Sucesso')
}).catch( () => {
console.log('produto não foi cadastrado com sucessos')
})

new Produto({
    foto: "/assets/img/imagemtoddynho.jpg",
    nome: "Toddynho",
    preco: 2.10,
    descricao: "Toddynho é uma linha tradicional de produtos achocolatados fabricados pela Pepsico."
}).save().then(() => {
console.log('Produto Cadastrado com Sucesso')
}).catch( () => {
console.log('produto não foi cadastrado com sucessos')
})

new Produto({
    foto: "/assets/img/imagemsúfresh.jpg",
    nome: "Sú Fresh de uva",
    preco: 3.99,
    descricao: "A linha de produtos mais completa, para encher a sua vida de sabor."
}).save().then(() => {
console.log('Produto Cadastrado com Sucesso')
}).catch( () => {
console.log('produto não foi cadastrado com sucessos')
})

new Produto({
    foto: "/assets/img/imagemfantalaranja.jpg",
    nome: "Fanta laranja (2L)",
    preco: 5.69,
    descricao: "É uma marca de refrigerantes, que detém uma linha variada de produtos e que pertence a Coca-Cola Company."
}).save().then(() => {
console.log('Produto Cadastrado com Sucesso')
}).catch( () => {
console.log('produto não foi cadastrado com sucessos')
})

new Produto({
    foto: "/assets/img/imagemguarána antarctica.jpg",
    nome: "Guarána Antarctica (2L)",
    preco: 6.90,
    descricao: "Guarána Antarctica é um refrigerante brasileiro que foi lançado no Brasil em 18 de agsoto de 1921, pela então companhia Antarctica paulista."
}).save().then(() => {
console.log('Produto Cadastrado com Sucesso')
}).catch( () => {
console.log('produto não foi cadastrado com sucessos')
})*/


//exportando o modulo do banco de dados

const Produtos = mongoose.model('Produtos', ProdutosSchema)

module.exports = Produtos;