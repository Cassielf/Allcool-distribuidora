var Arraypreco = new Array();

window.onload = function () {
  const btnCarrinho = document.getElementsByClassName("addCarrinho");
  let items = [];

  for (let i = 0; i < btnCarrinho.length; i++) {
    btnCarrinho[i].addEventListener("click", function (e) {
      var nameprod =
        e.target.parentElement.parentElement.children[0].textContent;
      var precoprod =
        e.target.parentElement.children[0].children[0].textContent;
      var descprod =
        e.target.parentElement.parentElement.children[1].textContent;
      var imageprod = e.target.parentElement.parentElement.parentElement.children[0].children[0].getAttribute(
        "src" );
      // console.log(imageprod);

      if (typeof Storage !== "undefined") {
        let item = {
          id: i + 1,
          name: nameprod,
          image: imageprod,
          preco: precoprod,
          descricao: descprod,
          quant: 1,
        };

        if (JSON.parse(localStorage.getItem("items")) === null) {
          items.push(item);
          localStorage.setItem("items", JSON.stringify(items));
        } else {
          const localItems = JSON.parse(localStorage.getItem("items"));
          localItems.map((data) => {
            if (item.id == data.id) {
              item.quant = data.quant + 1;
            } else {
              items.push(data);
            }
          });
          items.push(item);
          localStorage.setItem("items", JSON.stringify(items));
        }
        window.location.reload();
      } else {
        console.log("Ops, algo não está Funcionando");
      }
    });
  }

  // adicionando os items na pagina de carrinho
  const carrinho = document.getElementById("allproducts");
  let prod = "";
  let preco = "";
  let precoFinal = 0;

  if (JSON.parse(localStorage.getItem("items"))[0] == null) {
    prod += "<div><h2>Carrinho vazio</h2></div>";
  } else {
    JSON.parse(localStorage.getItem("items")).map((data) => {
      data.preco = data.preco * data.quant;

      prod +=
        `<div class="produtos">
            <div class="image">
                <img src="` +
        data.image +
        `" alt="">
            </div>
            <div class="info">
                <h5>` +
        data.name +
        `</h5>
                <p>` +
        data.descricao +
        `</p>
            </div>
            <div class="count">
                <div>
                    <p>Quantidade</p>
                </div>
                <div class="contador">
                    <button class="menos">
                        <img src="" alt="">-
                    </button>
                    <input  class="campo" value="` +
        data.quant +
        `" type="text" readonly="true">
                    <button class="mais">
                        <img src="" alt="">+
                    </button>
                </div>
            </div>
            <div class="total">
                <div>
                    <p>Total</p>
                </div>
                <p>R$ <span>` +
        data.preco +
        `</span></p>
            </div>
        </div>`;
      preco = data.preco;
      Arraypreco.push(preco);
    });
    //somo todos os valores dentro do array de produtos
    for (var i = 0; i < Arraypreco.length; i++) {
      precoFinal = precoFinal + Arraypreco[i];
    }
  }

  var totalProduto = document.getElementById("totalProduto");
  var ValorFinal = document.getElementById("ValorFinal");

  //adiciona tudo que estiver no LocalStorage no corpo html
  carrinho.innerHTML += prod;

  //seta os valores ja com os calculos para os valores finais
  totalProduto.innerHTML += `` + precoFinal;
  ValorFinal.innerHTML += `` + precoFinal;

  const btnMais = document.getElementsByClassName("mais");
  const btnMenos = document.getElementsByClassName("menos");
  const localItems = JSON.parse(localStorage.getItem("items"));
  const campo = document.getElementsByClassName("campo");
  
  for (let i = 0; i < btnMais.length; i++) {
    btnMais[i].addEventListener("click", function (e) {
      
      let item = {
        id: localItems[i].id,
        name: localItems[i].name,
        image: localItems[i].image,
        preco: localItems[i].preco,
        descricao: localItems[i].descricao,
        quant: localItems[i].quant,
      };
      localItems.map((data) => {
        if (item.id == data.id) {
          item.quant = data.quant + 1;
        } else {
          items.push(data);
        }
      });
      items.push(item);
      localStorage.setItem("items", JSON.stringify(items));
      window.location.reload();
      
    });
    
    btnMenos[i].addEventListener("click", function (e) {
      var btMenos = campo[i].getAttribute("value");
      // console.log(btMenos);  
          var resp="N";
          if( btMenos <= 1){
            resp = prompt("Certeza que quer excluir o item do carrinho? (S/N)")
            if(resp == "S"){
              let items = [];
              JSON.parse(localStorage.getItem("items")).map((data) => {
                if(data.id != localItems[i].id){
                  items.push(data);
                }
              });
              localStorage.setItem("items", JSON.stringify(items));
              window.location.reload();
            }else if(resp == "N"){
              alert("Ação cancelada");
            }else{
              alert("Você só apenas pode digitar S(para sim) e N(para não)");
            }
          }else{
            
            let item = {
              id: localItems[i].id,
              name: localItems[i].name,
              image: localItems[i].image,
                preco: localItems[i].preco,
                descricao: localItems[i].descricao,
                quant: localItems[i].quant,
              };

              localItems.map((data) => {
                if (item.id == data.id) {
                  item.quant = data.quant - 1;
                } else {
                      items.push(data);
                    }
              });

              items.push(item);
              localStorage.setItem("items", JSON.stringify(items));
              window.location.reload();
          }
            
        });
      }
};

const cancela = document.getElementById("cancela");
cancela.addEventListener("click", function (e) {
  localStorage.clear();
  window.location.href = "/";
});
    
var finalizar = document.getElementById("final");
finalizar.addEventListener("click", function (e) {
  console.log(JSON.parse(localStorage.getItem("items")));

  if(JSON.parse(localStorage.getItem("items")) == null){
    // console.log("vooo");
    $(document).ready(function(){
      $('#toast-place').append(`
          <div class="toast popup" data-autohide="false">
              <div class="toast-header alert alert-danger" role="alert">
                  <strong class="mr-auto text-primary">Carrinho Vazio</strong>
                  <button type="button" class="ml-2 mb-1 close" data-dismiss="toast">&times;</button>
              </div>
              <div class="toast-body">
                  Você precisa ter itens no carrinho para poder finalizar a compra.
              </div>
          </div>
      `);
      $('.toast').toast('show');
    });
  }else{
    finalizar.setAttribute("data-toggle", "modal");
    finalizar.setAttribute("data-target", "#exampleModalCenter");
    localStorage.clear();
    // window.location.reload();
  }
});
    

// AXIOS POST

const axios = require('axios')

const itens = localStorage.getItem("items");
const token = localStorage.getItem("token");

axios.post("/produtos", itens, {
  header: {
    Authorization: `Bearer ${token}`
  }
})

// AXIOS

/*axios.get("/qualquer").then((response) => {
  var response = response.data;
}).catch((error) =>{
  //M....
})*/