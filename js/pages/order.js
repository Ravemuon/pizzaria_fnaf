/*
=======================================
 ORDER SYSTEM
=======================================
*/


function sendOrder(){



const name =
document.getElementById(
"customer"
).value;



const pizza =
document.getElementById(
"pizza"
).value;



const order = {


customer:name,


pizza:pizza,


date:
new Date()
.toLocaleString()



};



console.log(
"New Order:",
order
);



alert(
"Order received! Thank you for choosing Freddy Fazbear's Pizza."
);



}