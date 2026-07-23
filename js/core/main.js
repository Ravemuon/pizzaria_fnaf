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



/*
=======================================
 CARREGA COMPONENTES
=======================================
*/

async function loadComponents(){


    const isInsidePages =
    window.location.pathname.includes(
        "/paginas/"
    );


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



    for(const component in components){


        const container =
        document.getElementById(
            component
        );


        if(!container)
        continue;



        try{


            const response =
            await fetch(
                basePath +
                components[component]
            );


            if(!response.ok){

                throw new Error(
                    "HTTP " +
                    response.status
                );

            }


            container.innerHTML =
            await response.text();


        }


        catch(error){


            console.error(

                "Erro carregando componente:",

                component,

                error

            );


        }


    }



    /*
    =======================================
    Corrige caminhos
    =======================================
    */

    fixImages(
        isInsidePages
    );



    /*
    =======================================
    Navbar Responsiva
    =======================================
    */

    initNavbar();



    /*
    =======================================
    Libera scripts dependentes
    =======================================
    */

    document.dispatchEvent(

        new Event(
            "componentsLoaded"
        )

    );



}



/*
=======================================
 NAVBAR RESPONSIVA
=======================================
*/

function initNavbar(){


    const toggle =
    document.getElementById(
        "navToggle"
    );


    const menu =
    document.getElementById(
        "navMenu"
    );


    if(
        !toggle ||
        !menu
    ) return;



    toggle.addEventListener(

        "click",

        ()=>{

            menu.classList.toggle(
                "open"
            );

        }

    );



    menu
    .querySelectorAll("a")
    .forEach(link=>{

        link.addEventListener(

            "click",

            ()=>{

                menu.classList.remove(
                    "open"
                );

            }

        );

    });


}



/*
=======================================
 CORRIGE IMAGENS
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


        const src =
        img.getAttribute(
            "src"
        );


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
    window.location.pathname.includes(
        "/paginas/"
    );


    if(insidePages){

        window.location.href =
        page;

    }

    else{

        window.location.href =
        "paginas/" + page;

    }


}