//Ainda não sei o que é essa parte
var data = {
    "calzone": {
        "sabor": [
            {
                "itemSabor": "Canadense",
                "tamanho": [
                    {
                        "itemTamanho": "Médio",
                        "preco": "R$29,00"
                    },
                    {
                        "itemTamanho": "Grande",
                        "preco": "R$39,00"
                    },
                    {
                        "itemTamanho": "Extra Grande",
                        "preco": "R$45,50"
                    }
                ]
            },
            {
                "itemSabor": "Camarão",
                "tamanho": [
                    {
                        "itemTamanho": "Médio",
                        "preco": "R$30,00"
                    },
                    {
                        "itemTamanho": "Grande",
                        "preco": "R$38,00"
                    },
                    {
                        "itemTamanho": "Extra Grande",
                        "preco": "R$54,00"
                    }
                ]
            },
            {
                "itemSabor": "Toscana com bacon",
                "tamanho": [
                    {
                        "itemTamanho": "Médio",
                        "preco": "R$27,00"
                    },
                    {
                        "itemTamanho": "Grande",
                        "preco": "R$36,00"
                    },
                    {
                        "itemTamanho": "Extra Grande",
                        "preco": "R$42,00"
                    }
                ]
            },
            {
                "itemSabor": "Camarão",
                "tamanho": [
                    {
                        "itemTamanho": "Médio",
                        "preco": "R$27,50"
                    },
                    {
                        "itemTamanho": "Grande",
                        "preco": "R$36,00"
                    },
                    {
                        "itemTamanho": "Extra Grande",
                        "preco": "R$42,00"
                    }
                ]
            },
            {
                "itemSabor": "3 Queijos",
                "tamanho": [
                    {
                        "itemTamanho": "Médio",
                        "preco": "R$32,00"
                    },
                    {
                        "itemTamanho": "Grande",
                        "preco": "R$39,50"
                    },
                    {
                        "itemTamanho": "Extra Grande",
                        "preco": "R$47,50"
                    }
                ]
            },
            {
                "itemSabor": "Nutri fit",
                "tamanho": [
                    {
                        "itemTamanho": "Médio",
                        "preco": "R$32,00"
                    },
                    {
                        "itemTamanho": "Grande",
                        "preco": "R$46,00"
                    },
                    {
                        "itemTamanho": "Extra Grande",
                        "preco": "R$54,00"
                    }
                ]
            },
            {
                "itemSabor": "Atum",
                "tamanho": [
                    {
                        "itemTamanho": "Médio",
                        "preco": "R$29,00"
                    },
                    {
                        "itemTamanho": "Grande",
                        "preco": "R$39,00"
                    },
                    {
                        "itemTamanho": "Extra Grande",
                        "preco": "R$46,50"
                    }
                ]
            }
        ]
    }
}

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

    var buttonAdicionaItensCar = document.getElementsByClassName('btn-add-item');
    for(var i = 0; i < buttonAdicionaItensCar.length; i++){
        buttonAdicionaItensCar[i].addEventListener('click',coletaItemCardapio);
    }

    var quantidadeEntradas = document.getElementsByClassName('quatidade');
    for (i = 0;i < quantidadeEntradas.length;i++){
        quantidadeEntradas[i].addEventListener('click',mudancaQuantidade);
    }

    var selecaoCalzone = document.getElementsByClassName('selecao-tamanho');
    for(var i = 0; i < selecaoCalzone.length; i++){
        selecaoCalzone[i].addEventListener('change',tamanhoPreco);
    }

    var buttonAdicionaCalzoneCar = document.getElementsByClassName('btn-add-calzone');
    for(var i = 0; i < buttonAdicionaCalzoneCar.length; i++){
        buttonAdicionaCalzoneCar[i].addEventListener('click',coletaCalzoneCardapio);
    }
}

function tamanhoPreco() {

    var selecaoMudada = event.target;
    var tamanhoCalzone = selecaoMudada.parentElement;
    console.log(tamanhoCalzone.getElementsByClassName("selecao-tamanho"));
    var selecaoTamanho = tamanhoCalzone.getElementsByClassName("selecao-tamanho");
    var saborCalzone = selecaoMudada.parentElement.parentElement;
    console.log(data.calzone.sabor.length);
    for (var i = 0; i < data.calzone.sabor.length; ++i){
        var itemSabor = saborCalzone.getElementsByClassName("item-sabor");
        console.log(selecaoTamanho[0].value);
        console.log(data.calzone.sabor[i].itemSabor);
        console.log(itemSabor[0].innerText);
        if(data.calzone.sabor[i].itemSabor == itemSabor[0].innerText){
            for (var j = 0; j < data.calzone.sabor[i].tamanho.length; ++j){
                if(data.calzone.sabor[i].tamanho[j].itemTamanho == selecaoTamanho[0].value){
                    var novoPreco = tamanhoCalzone.getElementsByClassName("item-preco");
                    novoPreco[0].innerHTML = data.calzone.sabor[i].tamanho[j].preco;
                }

            }

        }
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
    var compraItem = botao.parentElement.parentElement.parentElement.parentElement;
    console.log(compraItem);
    var itemNome = compraItem.getElementsByClassName('item-nome')[0].innerText;
    var itemImagem = compraItem.getElementsByClassName('item-imagem')[0].src;
    adicionaItemCar(itemNome, itemImagem, itemTamanho, itemSabor, itemPreco);
    console.log(itemNome);
    updatePreco();
}

function coletaCalzoneCardapio() {
    var botao = event.target;
    var preco = botao.parentElement;
    var itemPreco = preco.getElementsByClassName('item-preco')[0].innerText;
    var tamanho = botao.parentElement.parentElement;
    var itemTamanho = tamanho.getElementsByClassName('selecao-tamanho')[0].value;
    var itemSabor = tamanho.getElementsByClassName('item-sabor')[0].innerHTML;
    var sabor = botao.parentElement.parentElement.parentElement.parentElement;
    console.log(sabor);
    var itemNome = sabor.getElementsByClassName('item-nome')[0].innerText;
    var itemImagem = sabor.getElementsByClassName('item-imagem')[0].src;
    adicionaItemCar(itemNome, itemImagem, itemTamanho, itemSabor, itemPreco);
    updatePreco();
}

function adicionaItemCar(itemNome, itemImagem, itemTamanho, itemSabor, itemPreco) {
    var itensCarrinho = document.getElementsByClassName('itens-carrinho')[0];
    var itemCarrinho = document.getElementsByClassName('item-carrinho');
    var itemCarrinhoNome = document.getElementsByClassName('item-carrinho-nome');
    var itemCarrinhoTamanho = document.getElementsByClassName('item-carrinho-tamanho');
    var itemCarrinhoSabor = document.getElementsByClassName('item-carrinho-sabor');
    for (var i = 0; i < itemCarrinho.length;i++){
        if (itemCarrinhoNome[i].innerText == itemNome && itemCarrinhoTamanho[i].innerText == itemTamanho && itemCarrinhoSabor[i].innerText == itemSabor){
            return;
        }
    }
    console.log(itemNome);
    var novoItem = document.createElement('div');
    novoItem.classList.add('item-carrinho');
    var itemASerEscrito= `
            <span class=\"item-carrinho-nome\">${itemNome}</span> 
            <img class=\"item-carrinho-imagem\"src=${itemImagem}> 
            <span class=\"item-carrinho-tamanho\">${itemTamanho}</span>
            <span class=\"item-carrinho-sabor\">${itemSabor}</span>
            <span class=\"item-carrinho-preco\">${itemPreco}</span>
            <input class=\"quantidade\" type=\"number\" value=\"1\">
            <button class=\"btn btn-rem-item\" type=\"button\">Remover</button>
        </div> `;
    novoItem.innerHTML = itemASerEscrito;
    itensCarrinho.append(novoItem);
    novoItem.getElementsByClassName('btn-rem-item')[0].addEventListener('click',removeItemCar);
    novoItem.getElementsByClassName('quantidade')[0].addEventListener('change',quatidadeMudanca);
}

function updatePreco() {
    /*
    Calcular novo preço total
    Atualizar preço
     */
    var itensCarrinho = document.getElementsByClassName('itens-carrinho')[0];
    console.log(itensCarrinho);
    var itemCarrinho = itensCarrinho.getElementsByClassName('item-carrinho');
    console.log(itemCarrinho);
    var total = 0;
    for (var i = 0; i < itemCarrinho.length; i++){
        var item = itemCarrinho[i];
        var elementoPreco = item.getElementsByClassName('item-carrinho-preco')[0];
        console.log(elementoPreco);
        var quantidadeElemento = item.getElementsByClassName('quantidade')[0];
        var preco = elementoPreco.innerText.replace('R$','');
        preco = preco.replace(',','.');
        console.log(preco);
        var quantidade = quantidadeElemento.value;
        total = total + (preco * quantidade);
    }

    total = Math.round(total*100)/100;
    total = total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    total = total.replace('.',',');
    document.getElementsByClassName('preco-total')[0].innerText = total;

}

function quatidadeMudanca() {
    var input = event.target;
    if(isNaN(input.value) || input.value <= 0){
        input.value = 1;
    }
    updatePreco();
}