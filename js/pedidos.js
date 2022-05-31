function buscarClientePreencherPedido() {
    let codigoCliente = document.querySelector('#codigoClientePedido').value;

    for (var i = 0; i< Clientes.length; i++) {
        if (codigoCliente == Clientes[i].codigo) {
            document.querySelector('#nomeClientePedido').value = Clientes[i].nome;
        }
    }
}

function buscarProdutoPreencherPedido() {
    let codigoProduto = document.querySelector('#codigoProdutoPedidoLanc').value;

    let codigoCliente = document.querySelector('#codigoClientePedido').value;
    let nomeClientePedido = document.querySelector('#nomeClientePedido').value;
    
    if (codigoCliente == '' && nomeClientePedido == '') {
        alert('Preencher o cliente..');
        return false;
    }

    for (var i = 0; i< Produtos.length; i++) {
        if (codigoProduto == Produtos[i].codigo) {
            document.querySelector('#descricaoProdutoPedidoLanc').value = Produtos[i].descricao;
            document.querySelector('#precoProdutoPedidoLanc').value = Produtos[i].preco;
            document.querySelector('#quantidadeRealProduto').value = Produtos[i].quantidade;
        }
    }
}


const adicionarProdutoPedido = document.querySelector("#adicionarProdutoPedido");

let ProdutosAdicionados = [{}];

adicionarProdutoPedido.addEventListener("click", function(e) {
    e.preventDefault();

    let quantidadeASerAdicionada = document.querySelector('#quantidadeASerAdicionada').value;
    let quantidadeProduto = document.querySelector('#quantidadeRealProduto').value

    if (quantidadeASerAdicionada <= quantidadeProduto) {


        let codigoProdutoInsert = parseInt(document.querySelector('#codigoProdutoPedidoLanc').value);

        for (var i = 0; i< ProdutosAdicionados.length; i++) {
            if (codigoProdutoInsert == ProdutosAdicionados[i].id) {
                alert('Esse item já está na lista do pedido');
                return false;
            }
        }

        let valorProduto = parseFloat(document.querySelector('#precoProdutoPedidoLanc').value);
        let tbody = document.querySelector('#listaProdutos');

        let tr = tbody.insertRow();
    
        let td_item = tr.insertCell();
        let td_descricao = tr.insertCell();
        let td_preco = tr.insertCell();
        let td_qtde = tr.insertCell();
        let td_subtotal = tr.insertCell();

        ProdutosAdicionados.push({id: codigoProdutoInsert});

        td_item.innerText = codigoProdutoInsert;
        td_item.style.width = '10%';
        td_descricao.innerText = document.querySelector('#descricaoProdutoPedidoLanc').value;
        td_descricao.style.width = '50%';
        td_preco.innerText = valorProduto;
        td_preco.style.width = '10%';
        td_qtde.innerText = document.querySelector('#quantidadeASerAdicionada').value;    
        td_qtde.style.width = '10%';
        let totalProdutoV = quantidadeASerAdicionada * valorProduto;
        td_subtotal.innerText = totalProdutoV
        let valorAnterior = parseFloat(document.querySelector('#totalPedido').innerHTML);

        document.querySelector('#totalPedido').innerHTML = (valorAnterior) + (totalProdutoV);

        td_subtotal.style.width = '20%';
    } else {
        alert('Você digitou uma quantidade superior a que existe. Quantidade Real: ' + quantidadeProduto);
    }

});


function fecharFormPedido() {

    let div1 = document.getElementById("pedidos");
    div1.setAttribute("hidden", "hidden");
}