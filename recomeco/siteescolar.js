document.addEventListener("DOMContentLoaded", function() {
    // Função para manipular a navegação
    function toggleNavigation() {
        const nav = document.querySelector("nav ul");
        nav.classList.toggle("active");
    }

    // Evento de clique no botão de navegação
    document.querySelector("header button").addEventListener("click", toggleNavigation);

    // Função para alternar a cor do cabeçalho
    function changeHeaderColor() {
        const header = document.querySelector("header");
        const colors = ["#FF5733", "#33FF57", "#337AFF"];
        let currentColor = colors[0];
        let colorIndex = 0;

        setInterval(function() {
            colorIndex = (colorIndex + 1) % colors.length;
            currentColor = colors[colorIndex];
            header.style.backgroundColor = currentColor;
        }, 2000);
    }

    // Função para mostrar/ocultar formulário de contato
    function toggleContactForm() {
        const form = document.getElementById("formulario-contato");
        form.classList.toggle("visible");
    }

    // Evento de clique no botão "Mostrar/Ocultar Formulário"
    document.getElementById("toggle-form").addEventListener("click", toggleContactForm);

    // Função para validar e processar o formulário de contato
    function processContactForm() {
        const nome = document.getElementById("nome").value;
        const email = document.getElementById("email").value;
        const mensagem = document.getElementById("mensagem").value;

        if (nome === "" || email === "" || mensagem === "") {
            alert("Por favor, preencha todos os campos.");
        } else {
            // Simulação de envio bem-sucedido
            alert("Mensagem enviada com sucesso!");

            // Limpar campos do formulário após o envio
            document.getElementById("nome").value = '';
            document.getElementById("email").value = '';
            document.getElementById("mensagem").value = '';
        }
    }

    // Evento de clique no botão de envio do formulário
    document.getElementById("enviar").addEventListener("click", processContactForm);

    // Iniciar a alteração de cor do cabeçalho
    changeHeaderColor();
});
