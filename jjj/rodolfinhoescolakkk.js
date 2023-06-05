function fazerLogin() {
    var alunoNome = document.getElementById("alunoNome").value;
    var senha = document.getElementById("senha").value;
  
    // Verifica se as credenciais do aluno estão corretas
    if (verificarCredenciais(alunoNome, senha)) {
      // Obtém as notas do aluno
      var notas = obterNotas(alunoNome);
  
      // Exibe as notas na página
      exibirNotas(notas);
  
      // Mostra a seção de notas e oculta a seção de login
      document.getElementById("notasSection").style.display = "block";
      document.getElementById("mensagemErro").innerHTML = "";
    } else {
      // Exibe uma mensagem de erro se as credenciais estiverem incorretas
      document.getElementById("mensagemErro").innerHTML = "Credenciais inválidas. Por favor, tente novamente.";
    }
  }
  
  function verificarCredenciais(alunoNome, senha) {
    // Verifica se as credenciais estão corretas (exemplo simplificado)
    // Aqui você pode implementar sua própria lógica de autenticação
    return (alunoNome === "rodolfinho" && senha === "12345");
  }
  
  function obterNotas(alunoNome) {
    // Obtém as notas do aluno do armazenamento local
    var notasArmazenadas = JSON.parse(localStorage.getItem("notas")) || {};
    return notasArmazenadas[alunoNome] || {};
  }
  
  function exibirNotas(notas) {
    var notasDiv = document.getElementById("notas");
    notasDiv.innerHTML = "";
  
    for (var materia in notas) {
      if (notas.hasOwnProperty(materia)) {
        var nota = notas[materia];
        var notaDiv = document.createElement("div");
        notaDiv.innerHTML = materia + ": " + nota;
        notasDiv.appendChild(notaDiv);
      }
    }
  }
  