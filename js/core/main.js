/*
=======================================
 FREDDY FAZBEAR'S PIZZA
 COMPONENT LOADER SYSTEM
=======================================
*/


document.addEventListener(
"DOMContentLoaded",
()=>{

    loadComponents();

});








async function loadComponents(){



    const isInsidePages =
    window.location.pathname.includes("/paginas/");



    const basePath =
    isInsidePages ? "../" : "";






    const components = {


        header:
        "components/header.html",


        navbar:
        "components/navbar.html",


        sidebar:
        "components/sidebar.html",


        footer:
        "components/footer.html"


    };








    for(
        const component in components
    ){



        const container =
        document.getElementById(component);



        if(!container)
        continue;







        try{



            const response =
            await fetch(
                basePath + components[component]
            );




            if(!response.ok){

                throw new Error(
                    "HTTP " + response.status
                );

            }





            container.innerHTML =
            await response.text();





        }
        catch(error){


            console.error(
                "Erro carregando:",
                component,
                error
            );


        }


    }







    fixImages(
        isInsidePages
    );





    document.dispatchEvent(
        new Event(
            "componentsLoaded"
        )
    );



}









/*
=======================================
 CORRIGE IMAGENS DOS COMPONENTES
=======================================
*/


function fixImages(
insidePages
){



    if(!insidePages)
    return;






    document
    .querySelectorAll("img")
    .forEach(img=>{


        let src =
        img.getAttribute("src");



        if(
            src &&
            !src.startsWith("../") &&
            !src.startsWith("/") &&
            !src.startsWith("http")
        ){


            img.src =
            "../" + src;


        }



    });



}









/*
=======================================
 NAVEGAÇÃO
=======================================
*/


function goTo(page){



    const insidePages =
    window.location.pathname.includes("/paginas/");



    if(insidePages){


        window.location.href =
        page;



    }
    else{


        window.location.href =
        "paginas/" + page;



    }



}