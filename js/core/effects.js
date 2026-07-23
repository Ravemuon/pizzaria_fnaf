/*
=======================================
 VINTAGE EFFECTS
=======================================
*/


document.addEventListener(
"DOMContentLoaded",
()=>{


console.log(
"Freddy Fazbear's Pizza System Online"
);



screenEffect();



});







/*
=======================================
 SCREEN FLICKER
=======================================
*/


function screenEffect(){


const body =
document.body;



setInterval(
()=>{


body.classList.toggle(
"screen-flicker"
);



},
5000);



}








/*
=======================================
 GOLDEN FREDDY SECRET
=======================================
*/


function activateGoldenFreddy(){



const goldenButton =
document.getElementById(
"goldenTrigger"
);



const goldenJumpscare =
document.getElementById(
"goldenJumpscare"
);





if(!goldenButton || !goldenJumpscare){


console.log(
"Golden Freddy secret unavailable"
);


return;


}





console.log(
"Golden Freddy secret activated"
);





goldenButton.addEventListener(
"click",
()=>{


goldenJumpscare.style.display="flex";



setTimeout(
()=>{


goldenJumpscare.style.display="none";


},
2500
);



}
);






goldenJumpscare.addEventListener(
"click",
()=>{


goldenJumpscare.style.display="none";


}
);



}








/*
=======================================
 COMPONENT LOADER EVENT
=======================================
*/


document.addEventListener(
"componentsLoaded",
activateGoldenFreddy
);