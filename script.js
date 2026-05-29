document.addEventListener('DOMContentLoaded', () => {
    
    // SISTEMA DE ABAS (TECHNOLOGIAS)
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove classe ativa de todos os botões
            tabButtons.forEach(btn => btn.classList.remove('active'));
            // Remove classe ativa de todos os painéis de texto
            tabPanes.forEach(pane => pane.classList.remove('active'));

            // Adiciona classe ativa ao botão clicado
            button.classList.add('active');
            
            // Ativa o painel correspondente usando o atributo data-target
            const targetId = button.getAttribute('data-target');
            document.getElementById(targetId).classList.add('active');
        });
    });

    // VALIDAÇÃO E ENVIO DO FORMULÁRIO
    const contactForm = document.getElementById('contactForm');
    const formFeedback = document.getElementById('formFeedback');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Impede a página de recarregar

        // Pega os dados digitados
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;

        // Simulação de envio bem-sucedido
        formFeedback.textContent = `Obrigado, ${name}! Sua mensagem foi enviada com sucesso. Entraremos em contato pelo e-mail: ${email}.`;
        formFeedback.className = "form-feedback success"; // Exibe a mensagem de sucesso estilizada

        // Limpa o formulário
        contactForm.reset();

        // Some com a mensagem após 5 segundos
        setTimeout(() => {
            formFeedback.className = "form-feedback hidden";
        }, 5000);
    });
});
