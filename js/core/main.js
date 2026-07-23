/*
=======================================
 FREDDY FAZBEAR'S PIZZA
 COMPONENT LOADER SYSTEM
=======================================
*/

document.addEventListener("DOMContentLoaded", () => {
    loadComponents();
});

/*
=======================================
 CARREGA COMPONENTES
=======================================
*/

async function loadComponents() {
    const isInsidePages = window.location.pathname.includes("/paginas/");
    const basePath = isInsidePages ? "../" : "";

    const components = {
        header: "components/header.html",
        navbar: "components/navbar.html",
        sidebar: "components/sidebar.html",
        footer: "components/footer.html"
    };

    for (const component in components) {
        const container = document.getElementById(component);
        if (!container) continue;

        try {
            const response = await fetch(basePath + components[component]);
            if (!response.ok) {
                throw new Error("HTTP " + response.status);
            }
            container.innerHTML = await response.text();

            // Inicializa a sidebar IMEDIATAMENTE após carregar
            if (component === 'sidebar') {
                initSidebar();
            }
        } catch (error) {
            console.error("Erro carregando componente:", component, error);
        }
    }

    // Corrige caminhos das imagens (apenas dentro de /paginas/)
    fixImages(isInsidePages);

    // Inicializa Navbar (menu mobile)
    initNavbar();

    // Dispara evento para scripts dependentes (ex: effects.js, contato.js, galeria.js)
    document.dispatchEvent(new Event("componentsLoaded"));

    console.log('[MAIN] Todos os componentes carregados com sucesso.');
}

/*
=======================================
 SIDEBAR (MOBILE DRAWER)
=======================================
*/

function initSidebar() {
    const toggleBtn = document.getElementById('sidebarToggle');
    const drawer = document.getElementById('sidebarDrawer');
    const overlay = document.getElementById('sidebarOverlay');
    const closeBtn = document.getElementById('sidebarClose');

    // Se algum elemento não existir, aborta (ex: página sem sidebar)
    if (!toggleBtn || !drawer || !overlay) {
        console.warn('[SIDEBAR] Elementos não encontrados. Verifique o HTML da sidebar.');
        return;
    }

    // Função para abrir/fechar o drawer
    function toggleSidebar(open) {
        const isOpen = (open !== undefined) ? open : !drawer.classList.contains('open');

        drawer.classList.toggle('open', isOpen);
        overlay.classList.toggle('show', isOpen);
        toggleBtn.classList.toggle('active', isOpen);
        toggleBtn.setAttribute('aria-expanded', isOpen);

        // Bloqueia/libera o scroll do body
        document.body.style.overflow = isOpen ? 'hidden' : '';
    }

    // Evento: botão hambúrguer
    toggleBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleSidebar();
    });

    // Evento: botão fechar (X)
    if (closeBtn) {
        closeBtn.addEventListener('click', () => toggleSidebar(false));
    }

    // Evento: clique no overlay (fundo escuro)
    overlay.addEventListener('click', () => toggleSidebar(false));

    // Evento: tecla ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && drawer.classList.contains('open')) {
            toggleSidebar(false);
        }
    });

    // Fecha ao clicar em qualquer link (melhor usabilidade no mobile)
    drawer.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                toggleSidebar(false);
            }
        });
    });

    // Fecha ao redimensionar para desktop (se estiver aberto)
    window.addEventListener('resize', () => {
        if (window.innerWidth >= 769 && drawer.classList.contains('open')) {
            toggleSidebar(false);
        }
    });

    console.log('[SIDEBAR] Drawer mobile inicializado com sucesso.');
}

/*
=======================================
 NAVBAR RESPONSIVA
=======================================
*/

function initNavbar() {
    const toggle = document.getElementById("navToggle");
    const menu = document.getElementById("navMenu");

    if (!toggle || !menu) {
        console.warn('[NAVBAR] Elementos não encontrados.');
        return;
    }

    // Abre/fecha o menu
    toggle.addEventListener("click", () => {
        menu.classList.toggle("open");
    });

    // Fecha o menu ao clicar em um link
    menu.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            menu.classList.remove("open");
        });
    });

    console.log('[NAVBAR] Menu mobile inicializado.');
}

/*
=======================================
 CORRIGE CAMINHOS DAS IMAGENS
=======================================
*/

function fixImages(insidePages) {
    if (!insidePages) return;

    document.querySelectorAll("img").forEach(img => {
        const src = img.getAttribute("src");
        if (src && !src.startsWith("../") && !src.startsWith("/") && !src.startsWith("http")) {
            img.src = "../" + src;
        }
    });
}

/*
=======================================
 NAVEGAÇÃO (REDIRECIONAMENTO)
=======================================
*/

function goTo(page) {
    const insidePages = window.location.pathname.includes("/paginas/");
    if (insidePages) {
        window.location.href = page;
    } else {
        window.location.href = "paginas/" + page;
    }
}