/* =======================================
   PÁGINA: PEDIDOS SALVOS
   Script para carregar e gerenciar pedidos do localStorage
   ======================================= */

document.addEventListener('DOMContentLoaded', function() {

    const container = document.getElementById('listaPedidos');
    const btnExportar = document.getElementById('btnExportar');
    const btnLimpar = document.getElementById('btnLimpar');

    // =======================================
    // CARREGAR PEDIDOS
    // =======================================
    function carregarPedidos() {
        const mensagens = JSON.parse(localStorage.getItem('fazbear_mensagens')) || [];

        if (mensagens.length === 0) {
            container.innerHTML = `
                <div class="sem-pedidos">
                    <span class="emoji">📭</span>
                    Nenhuma mensagem encontrada.
                    <br><small style="font-size:14px;">Envie uma mensagem pelo <a href="contato.html" style="color:#8b0000;">formulário de contato</a>.</small>
                </div>
            `;
            return;
        }

        // Ordena por data (mais recente primeiro)
        mensagens.sort((a, b) => b.id - a.id);

        let html = '';
        mensagens.forEach((msg, index) => {
            // Mapeia assunto para emoji
            const assuntos = {
                'pedido': '🍕',
                'evento': '🎂',
                'trabalho': '💼',
                'seguranca': '🔒',
                'duvida': '❓',
                'outro': '📝'
            };
            const emojiAssunto = assuntos[msg.assunto] || '📩';

            html += `
                <div class="pedido-card">
                    <div class="pedido-header">
                        <span class="pedido-id">#${index + 1}</span>
                        <span class="pedido-data">${msg.data || 'Data desconhecida'}</span>
                    </div>
                    <div class="pedido-corpo">
                        <p><strong>${emojiAssunto} Nome:</strong> ${msg.nome}</p>
                        <p><strong>📧 E-mail:</strong> ${msg.email}</p>
                        ${msg.telefone ? `<p><strong>📞 Telefone:</strong> ${msg.telefone}</p>` : ''}
                        <p><strong>📋 Assunto:</strong> ${msg.assunto}</p>
                        <div class="mensagem-texto">
                            <strong>💬 Mensagem:</strong>
                            <p style="margin:6px 0 0 0;">${msg.mensagem}</p>
                        </div>
                    </div>
                </div>
            `;
        });

        container.innerHTML = html;
    }

    // =======================================
    // EXPORTAR COMO JSON
    // =======================================
    function exportarJSON() {
        const mensagens = JSON.parse(localStorage.getItem('fazbear_mensagens')) || [];
        if (mensagens.length === 0) {
            alert('Não há mensagens para exportar.');
            return;
        }

        const blob = new Blob([JSON.stringify(mensagens, null, 2)], { type: 'application/json' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = `pedidos_fazbear_${new Date().toISOString().slice(0,10)}.json`;
        link.click();
        URL.revokeObjectURL(link.href);
    }

    // =======================================
    // LIMPAR TODOS OS PEDIDOS
    // =======================================
    function limparPedidos() {
        if (confirm('Tem certeza que deseja apagar TODAS as mensagens salvas?')) {
            localStorage.removeItem('fazbear_mensagens');
            carregarPedidos();
            alert('Todas as mensagens foram removidas.');
        }
    }

    // =======================================
    // EVENTOS DOS BOTÕES
    // =======================================
    if (btnExportar) btnExportar.addEventListener('click', exportarJSON);
    if (btnLimpar) btnLimpar.addEventListener('click', limparPedidos);

    // =======================================
    // INICIALIZAR
    // =======================================
    carregarPedidos();

});