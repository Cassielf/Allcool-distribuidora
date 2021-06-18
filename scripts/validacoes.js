var form = document.getElementById('form');

form.addEventListener('submit', function (e) {
    
    var senha1 = document.getElementById("senha").value;
    var senha2 = document.getElementById("senha2").value;
    
    if (senha1 != senha2) {
        document.getElementById("senha2").style.border = "red 3px solid";
        $(document).ready(function(){
            $('#toast-place').append(`
                <div class="toast popup" data-autohide="false">
                    <div class="toast-header">
                        <strong class="mr-auto text-primary">Senhas diferentes</strong>
                        <button type="button" class="ml-2 mb-1 close" data-dismiss="toast">&times;</button>
                    </div>
                    <div class="toast-body">
                        A primeira senha deve ser exatamente igual a segunda.
                    </div>
                </div>
            `);
            $('.toast').toast('show');
        });
        //não deixa o form ser enviado
        e.preventDefault();
    } else {
        document.getElementById("senha2").style.border = "green 3px solid";
        
    }
    //validações dos seguintes campos
    var nome = document.getElementById("nome_completo");
    var email = document.getElementById("inputEmail4");
    var data = document.getElementById("data_nascimento").value;
    // var campoData = document.getElementById("data_nascimento");
    var numCartao = document.getElementById("numCartao");
    var cvv = document.getElementById("cvv");
    
    //Verifica se o campo nome foi preenchido e se
    //contém no mínimo três caracteres.
    if (nome.value == "" || nome.value.lenght < 3) {
        //É mostrado um alerta, caso o campo esteja vazio.
        // alert("Por favor, indique um nome válido.");
        $(document).ready(function(){
            $('#toast-place').append(`
                <div class="toast popup" data-autohide="false">
                    <div class="toast-header">
                        <strong class="mr-auto text-primary">Nome inválido</strong>
                        <button type="button" class="ml-2 mb-1 close" data-dismiss="toast">&times;</button>
                    </div>
                    <div class="toast-body">
                        Verifique seu nome.
                    </div>
                </div>
            `);
            $('.toast').toast('show');
        });
        //Foi definido um focus no campo.
        nome.focus();
        //o form não é enviado.
        e.preventDefault();
    }
    
    //validação email
    
    // o campo e-mail precisa de conter: "@", "." e não pode estar vazio
    if (email.value == ""
    || email.value.indexOf('@') == -1
    || email.value.indexOf('.') == -1) {
        // alert("Por favor, informe um E-MAIL válido!");
        $(document).ready(function(){
            $('#toast-place').append(`
                <div class="toast popup" data-autohide="false">
                    <div class="toast-header">
                        <strong class="mr-auto text-primary">Email válido</strong>
                        <button type="button" class="ml-2 mb-1 close" data-dismiss="toast">&times;</button>
                    </div>
                    <div class="toast-body">
                        Por favor, informe um email válido
                    </div>
                </div>
            `);
            $('.toast').toast('show');
        });
        email.style.border = "red 3px solid";
        e.preventDefault();
    } else {
        email.style.border = "green 3px solid";
    }

    //validação data de nascimento

    data = data.replace("/", "-"); // substitui as barras "/" por hífen "-"

    var data_array = data.split("-"); // quebra a data em array

    // para o IE onde será inserido no formato dd/MM/yyyy
    if (data_array[0].length != 4) {
        data = data_array[2] + "-" + data_array[1] + "-" + data_array[0]; // remonto a data no formato yyyy/MM/dd
    }

    // compara as datas e calculo a idade
    var hoje = new Date();
    var nasc = new Date(data);
    var idade = 0;
    idade = hoje.getFullYear() - nasc.getFullYear();
    var mes = hoje.getMonth() - nasc.getMonth();

    // calcula a idade 
    if (mes < 0 || (mes === 0 && hoje.getDate() < nasc.getDate())) {
        idade--;
    }
    console.log(idade);
    if (idade > 18) {
        campoData.style.border = "green 3px solid";
    } else {
        // alert("Pessoas menores de 18 não podem se cadastrar.");
        $(document).ready(function(){
            $('#toast-place').append(`
                <div class="toast popup" data-autohide="false">
                    <div class="toast-header alert-danger">
                        <strong class="mr-auto text-primary">Menor de idade</strong>
                        <button type="button" class="ml-2 mb-1 close" data-dismiss="toast">&times;</button>
                    </div>
                    <div class="toast-body alert-danger">
                        Você deve ser maior de idade para se inscrever.
                    </div>
                </div>
            `);
            $('.toast').toast('show');
        });
        campoData.style.border = "red 3px solid";
        e.preventDefault();
    }

    //validação do cvv
    if (cvv.value.length != 3) {
        // alert("Só é permitido 3 digitos no CVV");
        $(document).ready(function(){
            $('#toast-place').append(`
                <div class="toast popup" data-autohide="false">
                    <div class="toast-header">
                        <strong class="mr-auto text-primary">CVV inválido</strong>
                        <button type="button" class="ml-2 mb-1 close" data-dismiss="toast">&times;</button>
                    </div>
                    <div class="toast-body">
                        O código de segurança deve apenas conter 3 digitos.
                    </div>
                </div>
            `);
            $('.toast').toast('show');
        });
        cvv.style.border = "red 3px solid";
        e.preventDefault();
    } else cvv.style.border = "green 3px solid";

    if (numCartao.value.length != 16) {
        // alert("O número do cartão deve ter apenas 16 números");
        
        cvv.style.border = "red 3px solid";
        e.preventDefault();
    } else cvv.style.border = "green 3px solid";

});

//validação do cpf
var CPFid = document.getElementById('cpf');

CPFid.addEventListener('focusout', function (e) {

    var cpf = CPFid.value; // captura o valor que usario digitou

    cpf = cpf.replace(/[\s.-]*/igm, '') //troca qualquer caractere especial por nada, caso o usuario digite com .

    if (!cpf ||
        cpf.length != 11 ||
        cpf == "00000000000" ||
        cpf == "11111111111" ||
        cpf == "22222222222" ||
        cpf == "33333333333" ||
        cpf == "44444444444" ||
        cpf == "55555555555" ||
        cpf == "66666666666" ||
        cpf == "77777777777" ||
        cpf == "88888888888" ||
        cpf == "99999999999"
    ) {
        CPFid.style.border = "red 3px solid";
        $(document).ready(function(){
            $('#toast-place').append(`
                <div class="toast popup" data-autohide="false">
                    <div class="toast-header alert alert-danger" role="alert">
                        <strong class="mr-auto text-primary">CPF inválido</strong>
                        <button type="button" class="ml-2 mb-1 close" data-dismiss="toast">&times;</button>
                    </div>
                    <div class="toast-body">
                        Por favor insira um CPF válido e de no mínimo 11 digitos.
                    </div>
                </div>
            `);
            $('.toast').toast('show');
        });
    } else {
        CPFid.style.border = "green 3px solid";
    }
    var soma = 0
    var resto

    for (var i = 1; i <= 9; i++)
        soma = soma + parseInt(cpf.substring(i - 1, i)) * (11 - i)
    resto = (soma * 10) % 11

    if ((resto == 10) || (resto == 11)) resto = 0

    if (resto != parseInt(cpf.substring(9, 10))) {
        CPFid.style.border = "red 3px solid";
        $(document).ready(function(){
            $('#toast-place').append(`
                <div class="toast popup" data-autohide="false">
                    <div class="toast-header alert alert-danger" role="alert">
                        <strong class="mr-auto text-primary">CPF inválido</strong>
                        <button type="button" class="ml-2 mb-1 close" data-dismiss="toast">&times;</button>
                    </div>
                    <div class="toast-body">
                        Por favor insira um CPF válido e de no mínimo 11 digitos.
                    </div>
                </div>
            `);
            $('.toast').toast('show');
        });
        e.preventDefault();
    }


    soma = 0
    for (var i = 1; i <= 10; i++) {
        soma = soma + parseInt(cpf.substring(i - 1, i)) * (12 - i)
    }
    resto = (soma * 10) % 11

    if ((resto == 10) || (resto == 11)) resto = 0

    if (resto != parseInt(cpf.substring(10, 11))) {
        // alert("Ops, seu cpf é invalido");
        CPFid.style.border = "red 3px solid";
        e.preventDefault();
    }



});

var dataVenc = document.getElementById('dataVencimentoCartao');

dataVenc.addEventListener('focusout', function (e) {
    if (dataVenc.value.indexOf('/') == -1) {
        alert("Falta o / no campo Data de vencimento");
        dataVenc.style.border = "red 3px solid";
        e.preventDefault();
    } else {
        dataVenc.style.border = "green 3px solid";
    }
});
