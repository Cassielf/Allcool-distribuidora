window.onload = function () {
    const url = document.URL;
    var carrinho = document.getElementById('carri');
    //variavel que pega o token
    var token = url.substring(url.indexOf());
    
    token = token.split("%", 2)[1]
    localStorage.setItem("token", token)

    console.log(token);

    const links = document.getElementsByClassName('href');
    const oi = links[1].getAttribute("href")
    console.log(oi);
    // var link1 = links[1].getAttribute("href"); div1.getAttribute("align");
    // var linktot = link1 +"/"+ url;
    // links[2].setAttribute('href', linktot);
    
    console.log(linktot);
    
    if(url.indexOf('?token=') == -1){
        carrinho.style.display = 'none'
    }else{
        carrinho.style.display = 'block'
        // for(var i=0;i<links.length;i++){
        // }
    }

}