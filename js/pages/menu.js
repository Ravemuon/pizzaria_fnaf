/*
=======================================
 FREDDY'S PIZZA MENU
=======================================
*/


function iniciarMenu(){


const container =
document.getElementById(
"menu-container"
);



if(!container)
return;





const pizzas=[


[
"Pizza Freddy Especial",
"especial_dacasa.jpg",
"A receita clássica da casa.",
"R$39,90"
],


[
"Quatro Queijos",
"4queijos.jpg",
"Mussarela, parmesão, provolone e catupiry.",
"R$42,90"
],


[
"Calabresa Tradicional",
"calabresa_sem_cebola.jpg",
"Calabresa especial Freddy's.",
"R$38,90"
],


[
"Frango com Catupiry",
"frango_com_catupiry.jpg",
"Frango temperado com catupiry.",
"R$41,90"
],


[
"Marguerita",
"marguerita.jpg",
"Tomate, queijo e manjericão.",
"R$36,90"
],


[
"Pizza Sensação",
"sensacao.jpg",
"Pizza doce especial.",
"R$44,90"
]


];






pizzas.forEach(pizza=>{


const card =
document.createElement(
"article"
);


card.className =
"pizza-card";



card.innerHTML=`

<img src="../assets/imagens/pizzas/${pizza[1]}">


<h3>
${pizza[0]}
</h3>


<p>
${pizza[2]}
</p>


<strong>
${pizza[3]}
</strong>


<a href="pedidos.html">
Pedir Agora
</a>

`;



container.appendChild(card);



});



}





/*
Executa independente da ordem
*/


document.addEventListener(
"componentsLoaded",
iniciarMenu
);



document.addEventListener(
"DOMContentLoaded",
()=>{


setTimeout(
iniciarMenu,
300
);


});