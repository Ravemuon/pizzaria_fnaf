/* =======================================
   PÁGINA: EVENTOS
   Scripts específicos para a página de eventos
   ======================================= */

document.addEventListener('DOMContentLoaded', function() {

    // Efeito sutil de fade-in nos cards de pacotes
    const cards = document.querySelectorAll('.promo-card');
    if (cards.length > 0) {
        cards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transition = 'opacity 0.6s ease, transform 0.3s ease';
            setTimeout(() => {
                card.style.opacity = '1';
            }, 200 + (index * 150));
        });
    }

    // Adiciona um aviso sutil no console (para manter o tom corporativo)
    console.log('%c Freddy Fazbear Entertainment ', 'background: #850000; color: #ffd45c; font-size: 16px; font-weight: bold; padding: 8px 12px; border-radius: 4px;');
    console.log('%c Eventos e festas disponíveis. Consulte a administração para reservas. ', 'color: #b8a69b; font-size: 12px;');

});