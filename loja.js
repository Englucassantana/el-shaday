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
        buttonAdicinaItensCar[i].addEventListener('click',coletaItemCardapio);
    }
}

function removeItemCar() {
    /*
    Remover item do carrinho
    Atualizar preço
    * */
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();
    updatePreco();
}

function coletaItemCardapio(){
    var botao = event.target;
    var sabor = botao.parentElement;
    var itemSabor = sabor.getElementsByClassName('item-sabor')[0].innerText;
    var itemPreco = sabor.getElementsByClassName('item-preco')[0].innerText;
    var tamanho = botao.parentElement.parentElement;
    var itemTamanho = tamanho.getElementsByClassName('item-tamanho')[0].innerText;
    var compraItem = botao.parentElement.parentElement.parentElement;
    var itemNome = compraItem.getElementsByClassName('item-nome')[0].innerText;
    var itemImagem = compraItem.getElementsByClassName('item-imagem')[0].src;
    adicionaItemCar(itemNome, itemImagem, itemTamanho, itemSabor, itemPreco);
    updatePreco();
}


function adicionaItemCar(itemNome, itemImagem, itemTamanho, itemSabor, itemPreco) {
    var itensCarrinho = document.getElementsByClassName('item-carrinho')[0];
    var itemCarrinhoNome = document.getElementsByClassName('item-carrinho-nome');
    var itemCarrinhoTamanho = document.getElementsByClassName('item-carrinho-tamanho');
    var itemCarrinhoSabor = document.getElementsByClassName('item-carrinho-sabor');
    for (var i = 0; i < itensCarrinho.length;i++){
        if (itemCarrinhoNome[i].innerText == itemNome){
            return;
        }else{
            if (itemCarrinhoTamanho[i].innerText == itemTamanho) {
                return;
            }else{
                if(itemCarrinhoSabor[i].innerText == itemSabor){
                    return;
                }
            }
        }
    }
    console.log(itemNome);
    var novoItem = document.createElement('div');
    novoItem.classList.add('item-carrinho');
    var itemASerEscrito= `
            <span class=\"item-carrinho-nome\">${itemNome}</span> 
            <img class=\"item-carrinho-imagem\"src=\"imagem/item.png\"> 
            <span class=\"item-carrinho-tamanho\">${itemTamanho}</span>
            <span class=\"item-carrinho-sabor\">${itemSabor}</span>
            <span class=\"item-carrinho-preco\">${itemPreco}</span>
            <input class=\"quantidade\" type=\"number\" value=\"1\">
            <button class=\"btn btn-rem-item\" type=\"button\">Remover</button>
        </div> `;
    novoItem.innerHTML = itemASerEscrito;
    itensCarrinho.append(novoItem);
    novoItem.getElementsByClassName('btn-rem-item')[0].addEventListener('click',removeItemCar);
}

function updatePreco() {
    /*
    Calcular novo preço total
    Atualizar preço
     */
    var itensCarrinho = document.getElementsByClassName('itens-carrinho')[0];
    console.log(itensCarrinho);
    var itemCarrinho = itensCarrinho.getElementsByClassName("item-carrinho");
    console.log(itemCarrinho);
    var total = 0;
    for (var i = 1; i < itemCarrinho.length; i++){
        var item = itemCarrinho[i];
        var elementoPreco = item.getElementsByClassName('item-carrinho-preco')[0];
        console.log(elementoPreco)
        var quantidadeElemento = item.getElementsByClassName('quantidade')[0];
        var preco = elementoPreco.innerText.replace('R$','');
        preco = preco.replace(',','.');
        console.log(preco);
        var quantidade = quantidadeElemento.value;
        total = total + (preco * quantidade);
    }

    total = Math.round(total*100)/100;
    total = total.toString();
    total = total.replace('.',',');
    document.getElementsByClassName('preco-total')[0].innerText = 'R$' + total;
}