/* =======================================
   PÁGINA: PEDIDOS
   Scripts específicos para o formulário de pedidos
   ======================================= */

document.addEventListener('DOMContentLoaded', function() {

    const form = document.querySelector('.order-form');
    const confirmation = document.getElementById('confirmacaoPedido');

    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();

            // Coleta os campos
            const nome = form.querySelector('input[type="text"]');
            const telefone = form.querySelector('input[type="tel"]');
            const endereco = form.querySelector('textarea:first-of-type');
            const pizzaSelect = form.querySelector('select:first-of-type');
            const observacao = form.querySelector('textarea:last-of-type');

            // Validação
            if (!nome.value.trim()) {
                alert('Por favor, preencha seu nome.');
                nome.focus();
                return;
            }

            if (!telefone.value.trim() || telefone.value.length < 10) {
                alert('Por favor, preencha um telefone válido (mínimo 10 dígitos).');
                telefone.focus();
                return;
            }

            if (!endereco.value.trim() || endereco.value.length < 10) {
                alert('Por favor, preencha o endereço de entrega corretamente.');
                endereco.focus();
                return;
            }

            // Verifica se há alguma observação suspeita (brincadeira corporativa)
            const obs = observacao ? observacao.value.toLowerCase() : '';
            if (obs.includes('animatrônico') || obs.includes('robô') || obs.includes('freddy')) {
                alert('⚠️ Atenção: Assuntos relacionados a animatrônicos devem ser tratados com o departamento técnico. Seu pedido será encaminhado.');
                // Ainda assim, continua o fluxo
            }

            // Simula envio do pedido
            form.style.display = 'none';
            if (confirmation) {
                confirmation.style.display = 'block';
                confirmation.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }

            // Registro no console (para auditoria)
            console.log(`📦 Pedido recebido: ${nome.value} - ${pizzaSelect.value}`);
        });
    }

    // Mensagem no console (padrão corporativo)
    console.log('%c 🍕 Freddy Fazbear\'s Pizza - Central de Pedidos ', 'background: #850000; color: #ffd45c; font-size: 16px; font-weight: bold; padding: 6px 12px; border-radius: 4px;');
    console.log('%c Pedidos sujeitos à disponibilidade. Obrigado por escolher a Fazbear!', 'color: #b8a69b; font-size: 12px;');

});