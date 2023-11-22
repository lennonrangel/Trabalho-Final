// Adiciona um evento de clique ao botão Learn More
document.getElementById('learnMoreBtn').addEventListener('click', function() {
    alert('Clicou no botão Learn More!');
});

// Função para exibir alerta ao clicar no botão de chat
function exibirAlerta() {
    alert('Clicou no botão de chat!');
}

document.querySelector('.chat-btn').addEventListener('click', exibirAlerta);
