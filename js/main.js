document.addEventListener("DOMContentLoaded",()=>{


    loadComponent(
        "header",
        "components/header.html"
    );


    loadComponent(
        "navbar",
        "components/navbar.html"
    );


    loadComponent(
        "footer",
        "components/footer.html"
    );


});





function loadComponent(id,file){


    fetch(file)

    .then(response=>{


        if(!response.ok){

            throw new Error(
                "Erro ao carregar "+file
            );

        }


        return response.text();


    })


    .then(html=>{


        document.getElementById(id).innerHTML = html;


    })


    .catch(error=>{


        console.error(error);


    });


}