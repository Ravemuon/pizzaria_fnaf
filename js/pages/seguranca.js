/* =======================================
   PÁGINA: SEGURANÇA
   Scripts específicos para a página de segurança
   ======================================= */

document.addEventListener('DOMContentLoaded', function() {

    // Efeito de "carregamento" no manual (opcional)
    const manual = document.querySelector('.secret-file');
    if (manual) {
        manual.style.opacity = '0';
        manual.style.transition = 'opacity 0.8s ease';
        setTimeout(() => {
            manual.style.opacity = '1';
        }, 300);
    }

    // Exibe aviso no console para manter o tom corporativo
    console.log('%c ⚠ FAZBEAR SECURITY PROTOCOL ', 'background: #1a1410; color: #ffd45c; font-size: 14px; font-weight: bold; padding: 6px 12px; border: 2px solid #ffd45c;');
    console.log('%c Este sistema contém informações restritas. Apenas funcionários autorizados devem prosseguir. ', 'color: #b8a69b; font-size: 12px;');

});