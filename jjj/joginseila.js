// Variável para armazenar a pontuação
let score = 0;

// Seleciona o botão
const button = document.getElementById("clickButton");

// Seleciona o elemento de pontuação
const scoreElement = document.getElementById("score");

// Atualiza a pontuação exibida
function updateScore() {
  scoreElement.textContent = score;
}

// Função chamada quando o botão é clicado
function handleClick() {
  score++; // Aumenta a pontuação
  updateScore(); // Atualiza a pontuação exibida
}

// Adiciona o evento de clique ao botão
button.addEventListener("click", handleClick);
