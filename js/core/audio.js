/*
=======================================
 AUDIO SYSTEM
=======================================
*/


let backgroundMusic;



function startMusic(){


if(backgroundMusic)
return;



backgroundMusic =
new Audio(
"assets/audio/background.mp3"
);



backgroundMusic.loop = true;

backgroundMusic.volume = 0.25;


backgroundMusic.play()
.catch(
()=>{

console.log(
"Audio waiting user interaction"
);

});


}




document.addEventListener(
"click",
()=>{


startMusic();


},
{
once:true
});