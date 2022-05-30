let Clientes = [
    {
        codigo: 1,
        nome: 'Paulo Vinicius',
        data: '15/05/2022'
    },
    {
        codigo: 2,
        nome: 'Vinicius Paulo',
        data: '17/06/2022'
    }
]

// BOTÃO ESQUERDA
const btn = document.querySelector("#esquerda");
btn.addEventListener("click", function(e) {
    e.preventDefault();

    let ind = parseInt(document.querySelector('#index').value);
    ind--;
    console.log(ind,'Estou passando os registros para esquerda.');
    if (ind == -1) {
        alert('Não existe mais registros a direita.');
        return false;
    }

    atribuicaoCampos(ind);

    // console.log(ind);
});
// /BOTÃO ESQUERDA

// BOTÃO DIREITA
const btn2 = document.querySelector("#direita");
btn2.addEventListener("click", function(e) {
    e.preventDefault();

    let ind = parseInt(document.querySelector('#index').value);
    ind++;
    console.log('Estou passando os registros para direita.');
    if (ind == Clientes.length) {
        alert('Não existe mais registros a direita.');
        return false;
    }

    atribuicaoCampos(ind);

});
// /BOTÃO DIREITA

var atribuicaoCampos = (ind) => {
    document.querySelector('#codigo').value = Clientes[ind].codigo;
    document.querySelector('#nome').value = Clientes[ind].nome;
    document.querySelector('#dataCadastro').value = Clientes[ind].data;

    document.querySelector('#index').value = ind;
}

// LIMPA CAMPOS PARA SALVAR
const btn3 = document.querySelector("#novoRegistro");
btn3.addEventListener("click", function(e) {
    e.preventDefault();

    document.querySelector('#codigo').value = parseInt(Clientes.length) + 1;
    document.querySelector('#nome').value = '';

    let data = new Date();
    let dia = String(data.getDate()).padStart(2, '0');
    let mes = String(data.getMonth() + 1).padStart(2, '0');
    let ano = data.getFullYear();
    document.querySelector('#dataCadastro').value = dia + '/' + mes + '/' + ano;
});
// /LIMPA CAMPOS PARA SALVAR

// SALVAR CLIENTES
var infoPadrao = () => {
    document.querySelector('#index').value = 0;
    document.querySelector('#codigo').value = Clientes[0].codigo;
    document.querySelector('#nome').value = Clientes[0].nome;
    document.querySelector('#dataCadastro').value = Clientes[0].data;
}
infoPadrao();

const btn4 = document.querySelector("#salvarDados");
btn4.addEventListener("click", function(e) {
    e.preventDefault();
    
    let codigo = document.querySelector('#codigo').value;
    let nome = document.querySelector('#nome').value;
    let data = document.querySelector('#dataCadastro').value;

    if (codigo == '' || nome == '' || data == '') {
        alert('Revisar os campos...');
        return false;
    }

    for (var i = 0; i< Clientes.length; i++) {
        if (Clientes[i].codigo == codigo) {
            alert('Esse código já existe cadastro.');
            return false;
        }
    }

    Clientes.push({codigo: parseInt(codigo), nome: nome, data: data});
    infoPadrao();
    console.log('Salvando registro...');
});

// /SALVAR CLIENTES

function fecharFormCliente() {

    console.log('teste');
    let div1 = document.getElementById("clientes");
    div1.setAttribute("hidden", "hidden");
}