/*
=======================================
 SECRET FILE SYSTEM
=======================================
*/


const secretCode =
"1987";



let inputCode = "";



document.addEventListener(
"keydown",
(event)=>{


inputCode += event.key;



if(inputCode.includes(secretCode)){


window.location.href =
"arquivos.html";


}



if(inputCode.length > 10){

inputCode="";

}



});