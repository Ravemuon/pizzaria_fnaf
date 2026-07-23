document.addEventListener(
"DOMContentLoaded",
()=>{


const buttons =
document.querySelectorAll(
".gallery-filter button"
);



const items =
document.querySelectorAll(
".gallery-item"
);



buttons.forEach(button=>{


button.addEventListener(
"click",
()=>{


let filter =
button.dataset.filter;



items.forEach(item=>{


if(
filter==="all" ||
item.classList.contains(filter)
){


item.style.display="block";


}

else{


item.style.display="none";


}



});


});


});





/* ==========================
   VISUALIZADOR
========================== */


const viewer =
document.querySelector(
".image-viewer"
);



const viewerImg =
viewer.querySelector(
"img"
);



const viewerTitle =
viewer.querySelector(
"h2"
);



const close =
document.querySelector(
".close-viewer"
);




items.forEach(item=>{


item.addEventListener(
"click",
()=>{


const img =
item.querySelector("img");



const title =
item.querySelector("h3");



viewerImg.src =
img.src;



viewerTitle.textContent =
title.textContent;



viewer.classList.add(
"active"
);



});


});





close.addEventListener(
"click",
()=>{


viewer.classList.remove(
"active"
);


});





viewer.addEventListener(
"click",
(e)=>{


if(e.target===viewer)
{

viewer.classList.remove(
"active"
);

}


});



});