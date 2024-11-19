// Seleciona o botão de confete e o contêiner onde os confetes aparecerão
const buttonConfetti = document.getElementById('button_confetti');
const confettiContainer = document.getElementById('div_confetti');
const confettiColors = ['#ff0a54', '#ff477e', '#ff7096', '#ff85a1', '#fbb1bd', '#ffccd5', '#a0e7e5', '#b4f8c8', '#fbe7c6', '#ff758f'];

// Função para criar um confete
function createConfetti() {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');

    // Gera uma cor aleatória da lista de cores
    const randomColor = confettiColors[Math.floor(Math.random() * confettiColors.length)];
    confetti.style.backgroundColor = randomColor; // Atribui a cor ao confete
    confetti.style.left = Math.random() * 98 + 'vw'; // Posição horizontal aleatória
    confetti.style.top = '0px'; // Inicia no topo da janela
    confetti.style.width = Math.random() * 10 + 5 + 'px'; // Largura aleatória
    confetti.style.height = confetti.style.width; // Quadrado
    confetti.style.position = 'absolute';
    confetti.style.borderRadius = '50%';
    confetti.style.animation = `fall ${Math.random() * 3 + 2}s linear infinite`;

    // Verifica se a cor está sendo aplicada corretamente
    console.log('Cor do confete:', randomColor);

    confettiContainer.appendChild(confetti);

    // Remove o confete após a animação
    setTimeout(() => {
        confetti.remove();
    }, 5000);
}

// Função que lança vários confetes ao mesmo tempo
function launchConfetti() {
    for (let i = 0; i < 100; i++) {
        createConfetti();
    }
}

// Adiciona um evento de clique ao botão de confetes
buttonConfetti.addEventListener('click', launchConfetti);

document.getElementById('currentYear').textContent = new Date().getFullYear();