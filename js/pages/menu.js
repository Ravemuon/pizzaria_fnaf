/*
=======================================
 FREDDY'S PIZZA MENU - CARDÁPIO OFICIAL
=======================================
*/

function iniciarMenu() {
    const container = document.getElementById("menu-container");
    if (!container) return;

    // Dados do cardápio (usando objetos para melhor legibilidade)
    const pizzas = [
        {
            nome: "Pizza Freddy Especial",
            imagem: "especial_dacasa.jpg",
            descricao: "A receita clássica da casa.",
            preco: "R$ 39,90"
        },
        {
            nome: "Quatro Queijos",
            imagem: "4queijos.jpg",
            descricao: "Mussarela, parmesão, provolone e catupiry.",
            preco: "R$ 42,90"
        },
        {
            nome: "Calabresa Tradicional",
            imagem: "calabresa_sem_cebola.jpg",
            descricao: "Calabresa especial Freddy's.",
            preco: "R$ 38,90"
        },
        {
            nome: "Frango com Catupiry",
            imagem: "frango_com_catupiry.jpg",
            descricao: "Frango temperado com catupiry.",
            preco: "R$ 41,90"
        },
        {
            nome: "Marguerita",
            imagem: "marguerita.jpg",
            descricao: "Tomate, queijo e manjericão.",
            preco: "R$ 36,90"
        },
        {
            nome: "Pizza Sensação",
            imagem: "sensacao.jpg",
            descricao: "Pizza doce especial.",
            preco: "R$ 44,90"
        }
    ];

    // Limpa o container antes de adicionar (evita duplicação)
    container.innerHTML = '';

    pizzas.forEach(pizza => {
        const card = document.createElement("article");
        card.className = "pizza-card";

        card.innerHTML = `
            <img src="../assets/imagens/pizzas/${pizza.imagem}" alt="${pizza.nome}">
            <h4>${pizza.nome}</h4>
            <p>${pizza.descricao}</p>
            <span class="price">${pizza.preco}</span>
            <br>
            <a href="pedidos.html" class="btn-small">🍕 Pedir</a>
        `;

        container.appendChild(card);
    });

    // Mensagem no console (padrão corporativo)
    console.log('%c 🍕 Cardápio Freddy\'s ', 'background: #850000; color: #ffd45c; font-size: 16px; font-weight: bold; padding: 6px 12px; border-radius: 4px;');
    console.log('%c Sabores disponíveis para delivery e retirada.', 'color: #b8a69b; font-size: 12px;');
}

/*
  Executa independente da ordem de carregamento
  - Se os componentes forem carregados via eventos customizados, escuta 'componentsLoaded'
  - Fallback via DOMContentLoaded com timeout para garantir
*/
document.addEventListener("componentsLoaded", iniciarMenu);

document.addEventListener("DOMContentLoaded", function() {
    // Pequeno delay para garantir que o DOM esteja completamente pronto
    setTimeout(iniciarMenu, 300);
});