/* =======================================
   PÁGINA: CARREIRAS (CONTRATANDO)
   Scripts específicos para o formulário de candidatura
   ======================================= */

document.addEventListener('DOMContentLoaded', function() {

    const form = document.getElementById('jobApplication');
    const confirmation = document.getElementById('confirmacao');

    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();

            // Captura os valores
            const nome = document.getElementById('nome').value.trim();
            const email = document.getElementById('email').value.trim();
            const telefone = document.getElementById('telefone').value.trim();
            const vaga = document.getElementById('vaga').value;
            const experiencia = document.getElementById('experiencia').value.trim();
            const mensagem = document.getElementById('mensagem').value.trim();

            // Validação
            if (!nome) {
                alert('Por favor, preencha o nome completo.');
                document.getElementById('nome').focus();
                return;
            }

            if (!email || !email.includes('@')) {
                alert('Por favor, preencha um e-mail válido.');
                document.getElementById('email').focus();
                return;
            }

            if (!vaga) {
                alert('Por favor, selecione uma vaga de interesse.');
                document.getElementById('vaga').focus();
                return;
            }

            // Mapeia o valor da vaga para o nome legível
            const vagaMap = {
                'guarda': '🌙 Guarda Noturno',
                'tecnico': '🔧 Técnico de Manutenção',
                'atendente': '🎂 Atendente de Festas',
                'cozinheiro': '🍕 Cozinheiro'
            };
            const vagaNome = vagaMap[vaga] || vaga;

            // Monta o objeto com os dados
            const dados = {
                id: Date.now(),
                data: new Date().toLocaleString('pt-BR'),
                nome: nome,
                email: email,
                telefone: telefone || 'Não informado',
                vaga: vagaNome,
                experiencia: experiencia || 'Não informado',
                mensagem: mensagem || 'Não informado'
            };

            // =========================================
            // SALVAR NO LOCALSTORAGE
            // =========================================
            salvarCandidatura(dados);

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
    // FUNÇÃO PARA SALVAR NO LOCALSTORAGE
    // =========================================
    function salvarCandidatura(dados) {
        // Recupera as candidaturas já salvas
        let candidaturas = JSON.parse(localStorage.getItem('candidaturasFazbear')) || [];

        // Adiciona a nova candidatura
        candidaturas.push(dados);

        // Salva de volta no localStorage
        localStorage.setItem('candidaturasFazbear', JSON.stringify(candidaturas));

        // Exibe no console para debug
        console.log('📄 Candidatura salva com sucesso!');
        console.log('Total de candidaturas:', candidaturas.length);
        console.log('Última candidatura:', dados);
    }

    // =========================================
    // (OPCIONAL) EXIBIR TOTAL NO CONSOLE
    // =========================================
    const total = JSON.parse(localStorage.getItem('candidaturasFazbear')) || [];
    console.log(`📋 Total de candidaturas: ${total.length}`);
});