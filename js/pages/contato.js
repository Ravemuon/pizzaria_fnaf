/* =======================================
   PÁGINA: CONTATO
   Scripts específicos para a página de contato
   ======================================= */

document.addEventListener('DOMContentLoaded', function() {

    // =========================================
    // 1. FORMULÁRIO DE CONTATO
    // =========================================
    const form = document.getElementById('contactForm');
    const confirmation = document.getElementById('confirmation');

    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();

            // Captura os valores
            const nome = document.getElementById('nome').value.trim();
            const email = document.getElementById('email').value.trim();
            const telefone = document.getElementById('telefone').value.trim();
            const assunto = document.getElementById('assunto').value;
            const mensagem = document.getElementById('mensagem').value.trim();

            // Validação
            if (!nome) {
                alert('Por favor, preencha seu nome.');
                document.getElementById('nome').focus();
                return;
            }

            if (!email || !email.includes('@')) {
                alert('Por favor, preencha um e-mail válido.');
                document.getElementById('email').focus();
                return;
            }

            if (!assunto) {
                alert('Por favor, selecione um assunto.');
                document.getElementById('assunto').focus();
                return;
            }

            if (!mensagem || mensagem.length < 10) {
                alert('Por favor, escreva uma mensagem com pelo menos 10 caracteres.');
                document.getElementById('mensagem').focus();
                return;
            }

            // Monta o objeto com os dados
            const dados = {
                id: Date.now(),
                data: new Date().toLocaleString('pt-BR'),
                nome: nome,
                email: email,
                telefone: telefone || 'Não informado',
                assunto: assunto,
                mensagem: mensagem
            };

            // =========================================
            // 2. SALVAR NO LOCALSTORAGE
            // =========================================
            salvarPedido(dados);

            // Exibe a mensagem de confirmação
            form.style.display = 'none';
            if (confirmation) {
                confirmation.style.display = 'block';
                confirmation.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }

            // (Opcional) Limpa os campos do formulário
            form.reset();
        });
    }

    // =========================================
    // 3. FUNÇÃO PARA SALVAR NO LOCALSTORAGE
    // =========================================
    function salvarPedido(dados) {
        // Recupera os pedidos já salvos
        let pedidos = JSON.parse(localStorage.getItem('pedidosFazbear')) || [];

        // Adiciona o novo pedido
        pedidos.push(dados);

        // Salva de volta no localStorage
        localStorage.setItem('pedidosFazbear', JSON.stringify(pedidos));

        // Exibe no console para debug
        console.log('📦 Pedido salvo com sucesso!');
        console.log('Total de pedidos:', pedidos.length);
        console.log('Último pedido:', dados);
    }

    // =========================================
    // 4. BOTÃO PARA VISUALIZAR PEDIDOS SALVOS
    // =========================================
    const btnVerPedidos = document.getElementById('verPedidos');
    const listaPedidos = document.getElementById('listaPedidos');

    if (btnVerPedidos && listaPedidos) {
        btnVerPedidos.addEventListener('click', function() {
            const pedidos = JSON.parse(localStorage.getItem('pedidosFazbear')) || [];

            if (pedidos.length === 0) {
                listaPedidos.innerHTML = `
                    <p style="text-align:center; color:#b8a69b; font-family:'Special Elite', cursive;">
                        📭 Nenhum pedido salvo ainda.
                    </p>
                `;
            } else {
                let html = `
                    <div style="max-height:400px; overflow-y:auto; text-align:left; font-size:14px;">
                        <p style="text-align:center; color:#ffd45c; font-family:'Press Start 2P', monospace; font-size:12px; margin-bottom:15px;">
                            Total de pedidos: ${pedidos.length}
                        </p>
                `;
                pedidos.forEach(function(pedido, index) {
                    html += `
                        <div style="background:rgba(255,255,255,0.05); padding:12px; margin-bottom:8px; border-left:4px solid #ffd45c; border-radius:4px;">
                            <strong style="color:#ffd45c; font-family:'Bowlby One SC', cursive;">#${index + 1}</strong>
                            <span style="color:#b8a69b; font-size:12px; margin-left:10px;">${pedido.data}</span>
                            <br>
                            <span style="color:#f0e0d0;"><strong>Nome:</strong> ${pedido.nome}</span>
                            <span style="color:#f0e0d0; margin-left:15px;"><strong>Assunto:</strong> ${pedido.assunto}</span>
                            <br>
                            <span style="color:#b8a69b; font-size:13px;">${pedido.mensagem.substring(0, 60)}${pedido.mensagem.length > 60 ? '...' : ''}</span>
                        </div>
                    `;
                });
                html += `</div>`;
                listaPedidos.innerHTML = html;
            }

            // Rola suavemente até a lista
            listaPedidos.scrollIntoView({ behavior: 'smooth', block: 'center' });
        });
    }

    // =========================================
    // 5. (OPCIONAL) EXIBIR TOTAL DE PEDIDOS NO CONSOLE
    // =========================================
    const total = JSON.parse(localStorage.getItem('pedidosFazbear')) || [];
    console.log(`📋 Total de pedidos salvos: ${total.length}`);

});