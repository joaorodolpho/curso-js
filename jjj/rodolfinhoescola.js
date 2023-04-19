// Array com as respostas corretas
const respostas = ["b", "a", "c"];

// Função para verificar as respostas e exibir os resultados
function verificarRespostas() {
    // Variáveis para contar as respostas corretas e incorretas
    let corretas = 0;
    let incorretas = 0;

    // Loop através dos formulários do quiz
    for (let i = 1; i <= 3; i++) {
        // Seleciona o formulário atual
        const form = document.querySelector(`#quiz${i}`);

        // Seleciona o input da resposta selecionada
        const respostaSelecionada = form.querySelector('input[name="q' + i + '"]:checked');

        // Verifica se a resposta selecionada é a correta
        if (respostaSelecionada.value === respostas[i - 1]) {
            corretas++;
            form.classList.add("correct");
        } else {
            incorretas++;
            form.classList.add("incorrect");
        }
    }

    // Cria uma div para exibir os resultados
    const resultsDiv = document.createElement
    resultsDiv.classList.add("results");

    // Cria um título para os resultados
    const resultsTitle = document.createElement("h2");
    resultsTitle.textContent = "Resultados";
    resultsDiv.appendChild(resultsTitle);

    // Cria um parágrafo com o número de respostas corretas e incorretas
    const resultsText = document.createElement("p");
    resultsText.textContent = `Você acertou ${corretas} de 3 questões.`;
    resultsDiv.appendChild(resultsText);

    // Adiciona a div de resultados à página
    const main = document.querySelector("main");
    main.appendChild(resultsDiv);
}

// Seleciona o botão de verificar respostas
const verificarBtn = document.querySelector("#verificar");

// Adiciona um listener para o evento de clique no botão
verificarBtn.addEventListener("click", verificarRespostas);
// Perguntas e respostas para o quiz
const perguntas = [
    {
      pergunta: "Qual é o sujeito da frase: O cachorro late?",
      opcoes: ["Cachorro", "Late", "O"],
      resposta: "Cachorro"
    },
    {
      pergunta: "Qual é o objeto direto da frase: Eu comprei um livro?",
      opcoes: ["Eu", "Comprei", "Livro"],
      resposta: "Livro"
    },
    {
      pergunta: "Qual é o adjetivo da frase: A casa é grande?",
      opcoes: ["Casa", "Grande", "É"],
      resposta: "Grande"
    }
  ];
  
  // Função para criar as perguntas do quiz
  function criarPerguntas() {
    const form = document.createElement("form");
  
    // Cria uma pergunta para cada objeto no array perguntas
    perguntas.forEach((pergunta, index) => {
      const perguntaDiv = document.createElement("div");
      perguntaDiv.classList.add("pergunta");
  
      // Cria um título para a pergunta
      const perguntaTitle = document.createElement("h3");
      perguntaTitle.textContent = `Pergunta ${index + 1}: ${pergunta.pergunta}`;
      perguntaDiv.appendChild(perguntaTitle);
  
      // Cria uma lista de opções de resposta para a pergunta
      const opcoesList = document.createElement("ol");
      pergunta.opcoes.forEach(opcao => {
        const opcaoItem = document.createElement("li");
        const opcaoInput = document.createElement("input");
        opcaoInput.type = "radio";
        opcaoInput.name = `pergunta${index}`;
        opcaoInput.value = opcao;
        opcaoItem.appendChild(opcaoInput);
        opcaoItem.appendChild(document.createTextNode(opcao));
        opcoesList.appendChild(opcaoItem);
      });
      perguntaDiv.appendChild(opcoesList);
  
      // Adiciona a pergunta ao formulário
      form.appendChild(perguntaDiv);
    });
  
    // Cria um botão para verificar as respostas
    const verificarBtn = document.createElement("button");
    verificarBtn.type = "button";
    verificarBtn.id = "verificar";
    verificarBtn.textContent = "Verificar respostas";
    form.appendChild(verificarBtn);
  
    // Adiciona o formulário à página
    const main = document.querySelector("main");
    main.appendChild(form);
  }
  
  // Chama a função criarPerguntas para gerar o quiz
  criarPerguntas();

  // Função para verificar as respostas do quiz
function verificarRespostas() {
    const respostas = [];
  
    // Itera sobre cada pergunta e salva a resposta selecionada em um array
    perguntas.forEach((pergunta, index) => {
      const respostaInput = document.querySelector(`input[name="pergunta${index}"]:checked`);
      if (respostaInput) {
        respostas.push(respostaInput.value);
      } else {
        respostas.push(null);
      }
    });
  
    // Verifica as respostas e exibe os resultados
    const resultadosDiv = document.createElement("div");
    resultadosDiv.classList.add("resultados");
  
    let acertos = 0;
    let erros = 0;
  
    perguntas.forEach((pergunta, index) => {
      const respostaCorreta = pergunta.resposta;
      const respostaSelecionada = respostas[index];
  
      const perguntaDiv = document.createElement("div");
      perguntaDiv.classList.add("pergunta-resultados");
  
      const perguntaTitle = document.createElement("h4");
      perguntaTitle.textContent = pergunta.pergunta;
      perguntaDiv.appendChild(perguntaTitle);
  
      const respostaDiv = document.createElement("div");
      respostaDiv.classList.add("resposta-resultados");
  
      if (respostaSelecionada === null) {
        respostaDiv.textContent = "Você não respondeu esta pergunta.";
        respostaDiv.classList.add("sem-resposta");
      } else if (respostaSelecionada === respostaCorreta) {
        respostaDiv.textContent = `Resposta: ${respostaSelecionada} (correta)`;
        respostaDiv.classList.add("resposta-correta");
        acertos++;
      } else {
        respostaDiv.textContent = `Resposta: ${respostaSelecionada} (incorreta) - A resposta correta é ${respostaCorreta}`;
        respostaDiv.classList.add("resposta-incorreta");
        erros++;
      }
  
      perguntaDiv.appendChild(respostaDiv);
      resultadosDiv.appendChild(perguntaDiv);
    });
  
    const acertosDiv = document.createElement("div");
    acertosDiv.textContent = `Acertos: ${acertos}`;
    acertosDiv.classList.add("acertos");
    resultadosDiv.appendChild(acertosDiv);
  
    const errosDiv = document.createElement("div");
    errosDiv.textContent = `Erros: ${erros}`;
    errosDiv.classList.add("erros");
    resultadosDiv.appendChild(errosDiv);
  
    const main = document.querySelector("main");
    main.appendChild(resultadosDiv);
  
    // Esconde o botão de verificação e impede que o quiz seja enviado novamente
    const verificarBtn = document.querySelector("#verificar");
    verificarBtn.disabled = true;
    verificarBtn.style.display = "none";
  }
  
  // Adiciona um listener de evento ao botão de verificação para chamar a função verificarRespostas
  const verificarBtn = document.querySelector("#verificar");
  verificarBtn.addEventListener("click", verificarRespostas);
  