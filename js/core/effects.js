/*
=======================================
 EFFECTS - FREDDY FAZBEAR'S PIZZA
=======================================
*/

/**
 * Efeito de flicker na tela (vintage CRT)
 */
function screenEffect() {
    const body = document.body;

    setInterval(() => {
        body.classList.toggle('screen-flicker');
    }, 5000);
}

/**
 * Ativa o Easter Egg do Golden Freddy
 */
function activateGoldenFreddy() {
    const goldenButton = document.getElementById('goldenTrigger');
    const goldenJumpscare = document.getElementById('goldenJumpscare');

    if (!goldenButton || !goldenJumpscare) {
        console.warn('[Golden Freddy] Elementos não encontrados.');
        return;
    }

    console.log('[Golden Freddy] Easter Egg ativado.');

    // Clique no botão → mostra o jumpscare
    goldenButton.addEventListener('click', function() {
        goldenJumpscare.style.display = 'flex';

        // Oculta automaticamente após 2.5 segundos
        setTimeout(() => {
            goldenJumpscare.style.display = 'none';
        }, 2500);
    });

    // Clique na imagem do jumpscare → fecha imediatamente
    goldenJumpscare.addEventListener('click', function() {
        goldenJumpscare.style.display = 'none';
    });
}

/**
 * Inicialização dos efeitos
 */
document.addEventListener('DOMContentLoaded', function() {
    console.log('[SYSTEM] Freddy Fazbear\'s Pizza System Online');
    screenEffect();
});

/**
 * Aguarda o carregamento dos componentes (header, navbar, footer)
 * para ativar o Golden Freddy (que está no footer)
 */
document.addEventListener('componentsLoaded', activateGoldenFreddy);