//Ainda não sei o que é essa parte
if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready);
} else {
    ready();
}

function ready() {
    var buttonRemoveItensCar = document.getElementsByClassName('btn-rem-item');
    for(var i = 0; i < buttonRemoveItensCar.length; i++){
        buttonRemoveItensCar[i].addEventListener('click',removeItemCar);
    }

    var buttonAdicinaItensCar = document.getElementsByClassName('btn-add-item');
    for(var i = 0; i < buttonAdicinaItensCar.length; i++){
        buttonAdicinaItensCar[i].addEventListener('click',adicionaItemCarClicado)
    }
}

function removeItemCar() {
    /*
    Remover item do carrinho
    Atualizar preço
    * */
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updatePreco();
}

function adicionaItemCarClicado() {
    /*
    Adicionar item ao carrinho
    Atualizar preço
     */
    var botao = event.target
    var compraItem = botao.parentElement.parentElement
    var titulo = compraItem.getElementsByClassName('item-nome')[0].innerText
    var preco = compraItem.getElementsByClassName('item-preco')[0].innerText
    var imagemItem = compraItem.getElementsByClassName('item-imagem')[0].src
    adicionaItemCar(titulo, preco, imagemItem)
    updatePreco();

}

function adicionaItemCar(titulo, preco, iamgemItem) {
    var itemCarrinho = document.createElement('div')
    cabecalhoTabela.classList.add('cabecalho-tabela')
    var itemCarrinhoNome = document.getElementsByClassName('item-carrinho-nome')
    var itemCarrinho = document.getElementsByClassName('item-carrinho')
    for (var i = 0; i < itemCarrinhoNome.length; i++) {
        if (itemCarrinhoNome[i].innerText == titulo) {
            alert('Esse item já foi adicionado ao carrinho')
            return
        }
    }
    var itemCarrinhoConteudo = `
        <span class="item-carrinho-nome">Nome_do_item</span>
        <img class="item-carrinho-imagem"src="imagem/item.png">
        <span class="item-carrinho-preco">R$00,00</span>
        <input class="quantidade" type="number" value="1">
        <button class="btn btn-rem-item" type="button">Remover</button>`
    itemCarrinho.innerHTML = itemCarrinhoConteudo
    itemCarrinhoConteudo.append(itemCarrinho)
    itemCarrinho.getElementsByClassName('btn-rem-item')[0].addEventListener('click', removeItemCar)
    itemCarrinho.getElementsByClassName('quantidade')[0].addEventListener('change', updatePreco)
}

function updatePreco() {
    /*
    Calcular novo preço total
    Atualizar preço
     */

}