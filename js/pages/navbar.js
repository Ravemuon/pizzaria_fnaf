/* =======================================
   NAVBAR - CONTROLE DO MENU MOBILE
   ====================================== */

document.addEventListener('componentsLoaded', function() {
    const toggle = document.getElementById('navToggle');
    const menu = document.getElementById('navMenu');

    // Verifica se os elementos existem na página
    if (!toggle || !menu) return;

    /**
     * Abre/fecha o menu ao clicar no botão toggle
     */
    toggle.addEventListener('click', function() {
        menu.classList.toggle('open');
        toggle.classList.toggle('active');
    });

    /**
     * Fecha o menu automaticamente ao clicar em qualquer link
     * (exceto se o link for uma âncora interna com #, para não prejudicar a navegação)
     */
    const links = menu.querySelectorAll('a:not([href^="#"])');
    links.forEach(function(link) {
        link.addEventListener('click', function() {
            menu.classList.remove('open');
            toggle.classList.remove('active');
        });
    });

    /**
     * Fecha o menu ao clicar fora dele (em qualquer lugar da página)
     * Útil para melhor usabilidade em dispositivos móveis
     */
    document.addEventListener('click', function(event) {
        const isClickInsideMenu = menu.contains(event.target);
        const isClickOnToggle = toggle.contains(event.target);

        if (!isClickInsideMenu && !isClickOnToggle && menu.classList.contains('open')) {
            menu.classList.remove('open');
            toggle.classList.remove('active');
        }
    });

    /**
     * Fecha o menu ao pressionar a tecla ESC
     */
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && menu.classList.contains('open')) {
            menu.classList.remove('open');
            toggle.classList.remove('active');
        }
    });

    // Mensagem de depuração (opcional)
    console.log('[NAVBAR] Menu mobile inicializado com sucesso.');
});