// Seleciona todas as imagens com a classe toggleButton
var toggleButtons = document.querySelectorAll(".toggleButton");

// Adiciona um ouvinte de evento de clique em cada uma das imagens
toggleButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        // Obtém o ID da sessão associada à imagem clicada
        var sessionID = button.getAttribute("data-session");
        
        // Obtém a sessão correspondente com base no ID
        var session = document.getElementById(sessionID);
        
        // Alterna a visibilidade da sessão clicada
        if (session.classList.contains("hidden")) {
            session.classList.remove("hidden");
        } else {
            session.classList.add("hidden");
        }
    });
});
