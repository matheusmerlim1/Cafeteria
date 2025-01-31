// Função construtora de objetos Produto
var Produto = function (id, nome, categoria, img, valorUnitario) {
    this.id = id;
    this.nome = nome;
    this.categoria = categoria;
    this.foto = img;
    this.valorUnitario = valorUnitario;
};

// Função para buscar um item pelo ID no vetor
function pesquisaPorId(vetor, objId) {
    return vetor.find(function (item) {
        return item.id === parseInt(objId); // Certifique-se de converter para número
    });
}

// Lista de produtos do cardápio
var cardapio = [
    new Produto(1, "Capuccino", "Bebidas Quentes", "https://rafaelescalfoni.github.io/desenv_web/img/capuccino.png", 7),
    new Produto(2, "Espresso", "Bebidas Quentes", "https://rafaelescalfoni.github.io/desenv_web/img/espresso.png", 4),
    new Produto(3, "Frapuccino", "Bebidas Quentes", "https://rafaelescalfoni.github.io/desenv_web/img/frapuccino.png", 8),
    new Produto(4, "Chococcino", "Bebidas Quentes", "https://rafaelescalfoni.github.io/desenv_web/img/chococcino.png", 7),
    new Produto(5, "Chocolate Quente", "Bebidas Quentes", "https://rafaelescalfoni.github.io/desenv_web/img/chocolate_quente.png", 10),
    new Produto(6, "Frapê", "Bebidas Frias", "https://rafaelescalfoni.github.io/desenv_web/img/frape.png", 12),
    new Produto(7, "Suco de Laranja", "Bebidas Frias", "https://rafaelescalfoni.github.io/desenv_web/img/suco_laranja.png", 10),
    new Produto(8, "Açaí", "Doces", "https://rafaelescalfoni.github.io/desenv_web/img/acai.png", 12),
    new Produto(9, "Bolo de Laranja", "Doces", "https://rafaelescalfoni.github.io/desenv_web/img/bolo_laranja.png", 8)
];

// Variável para armazenar o total do pedido
var total = 0;

$(function () {
    // 1. Carregar o cardápio dinamicamente na UL #cardapio
    $.each(cardapio, function (ind, item) {
        var itemLista = $("<li>");
        itemLista.attr("id", item.id);
        itemLista.text(`${item.nome} - R$ ${item.valorUnitario.toFixed(2)}`);
        $("#cardapio").append(itemLista);
    });

    // 2. Evento de clique para adicionar itens ao pedido
    $("#cardapio").on("click", "li", function () {
        var itemEscolhido = pesquisaPorId(cardapio, $(this).attr("id"));

        if (itemEscolhido) {
            // Criar um novo elemento <li> para o pedido
            var novoPedido = $("<li>").text(`${itemEscolhido.nome} - R$ ${itemEscolhido.valorUnitario.toFixed(2)}`);
            $("#pedidos").append(novoPedido);

            // 3. Atualizar o total
            total += itemEscolhido.valorUnitario;
            $("#valorTotal").text(`Total - R$ ${total.toFixed(2)}`);
        }
    });
});
