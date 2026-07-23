/* =======================================
   PÁGINA: ARQUIVOS
   Scripts específicos para a página de arquivos internos
   ======================================= */

// Efeito de "carregamento" no terminal
document.addEventListener('DOMContentLoaded', function() {
    var terminal = document.querySelector('.terminal-text');
    if (terminal) {
        terminal.style.opacity = '0';
        setTimeout(function() {
            terminal.style.transition = 'opacity 0.8s';
            terminal.style.opacity = '1';
        }, 500);
    }
});

// Efeito de piscar do cursor no terminal (opcional)
document.addEventListener('DOMContentLoaded', function() {
    var cursor = document.querySelector('.terminal-text .cursor');
    if (cursor) {
        setInterval(function() {
            cursor.style.opacity = (cursor.style.opacity === '0') ? '1' : '0';
        }, 500);
    }
});