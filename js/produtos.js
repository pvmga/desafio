let Produtos = [
    {
        codigo: 1,
        descricao: 'Canetta AZUL',
        preco: 1.25,
        quantidade: 2
    },
    {
        codigo: 2,
        descricao: 'Lapis AZUL',
        preco: 2.25,
        quantidade: 3
    },
    {
        codigo: 3,
        descricao: 'Borracha Detalhista',
        preco: 3.25,
        quantidade: 5
    }
]

// BOTÃO ESQUERDA
const btnProdutoEsquerda = document.querySelector("#esquerdaProduto");
btnProdutoEsquerda.addEventListener("click", function(e) {
    e.preventDefault();

    let ind = parseInt(document.querySelector('#indexProduto').value);
    ind--;
    console.log(ind,'Estou passando os registros para esquerda.');
    if (ind == -1) {
        alert('Não existe mais registros a direita.');
        return false;
    }

    atribuicaoCamposProdutos(ind);

    // console.log(ind);
});
// /BOTÃO ESQUERDA

// BOTÃO DIREITA
const btnProdutoDireita = document.querySelector("#direitaProduto");
btnProdutoDireita.addEventListener("click", function(e) {
    e.preventDefault();

    let ind = parseInt(document.querySelector('#indexProduto').value);
    ind++;
    console.log('Estou passando os registros para direita.');
    if (ind == Produtos.length) {
        alert('Não existe mais registros a direita.');
        return false;
    }

    atribuicaoCamposProdutos(ind);

});
// /BOTÃO DIREITA

var atribuicaoCamposProdutos = (ind) => {
    document.querySelector('#codigoProduto').value = Produtos[ind].codigo;
    document.querySelector('#descricaoProduto').value = Produtos[ind].descricao;
    document.querySelector('#precoProduto').value = Produtos[ind].preco;
    document.querySelector('#quantidadeProduto').value = Produtos[ind].quantidade;

    document.querySelector('#indexProduto').value = ind;
}

// LIMPA CAMPOS PARA SALVAR
const btnProdutoNovo = document.querySelector("#novoRegistroProduto");
btnProdutoNovo.addEventListener("click", function(e) {
    e.preventDefault();

    document.querySelector('#codigoProduto').value = parseInt(Produtos.length) + 1;
    document.querySelector('#descricaoProduto').value = '';
    document.querySelector('#descricaoProduto').value = '';
    document.querySelector('#precoProduto').value = '';
    document.querySelector('#quantidadeProduto').value = '';

});
// /LIMPA CAMPOS PARA SALVAR

var infoPadraoProduto = () => {
    document.querySelector('#indexProduto').value = 0;
    document.querySelector('#codigoProduto').value = Produtos[0].codigo;
    document.querySelector('#descricaoProduto').value = Produtos[0].descricao;
    document.querySelector('#precoProduto').value = Produtos[0].preco;
    document.querySelector('#quantidadeProduto').value = Produtos[0].quantidade;
}
infoPadraoProduto();

// SALVAR CLIENTES
const btnProdutoClientes = document.querySelector("#salvarDadoProduto");
btnProdutoClientes.addEventListener("click", function(e) {
    e.preventDefault();
    
    let codigo = document.querySelector('#codigoProduto').value;
    let descricaoProduto = document.querySelector('#descricaoProduto').value;
    let precoProduto = document.querySelector('#precoProduto').value;
    let quantidadeProduto = document.querySelector('#quantidadeProduto').value;

    if (codigo == '' || descricaoProduto == '' || precoProduto == '' || quantidadeProduto == '') {
        alert('Revisar os campos...');
        return false;
    }

    for (var i = 0; i< Produtos.length; i++) {
        if (Produtos[i].codigo == codigo) {
            alert('Esse código já existe cadastro.');
            return false;
        }
    }

    Produtos.push({codigo: parseInt(codigo), descricao: descricaoProduto, preco: precoProduto, quantidade: quantidadeProduto});
    infoPadraoProduto();
    console.log('Salvando registro...');
});

// /SALVAR CLIENTES

function fecharFormProduto() {

    console.log('teste');
    let div1 = document.getElementById("produtos");
    div1.setAttribute("hidden", "hidden");
}