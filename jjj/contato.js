function validarFormulario() {
    const nome = document.getElementById("nome");
    const email = document.getElementById("email");
    const mensagem = document.getElementById("mensagem");
  
    if (nome.value.trim() === "") {
      alert("Por favor, preencha o campo Nome.");
      nome.focus();
      return false;
    }
  
    if (email.value.trim() === "") {
      alert("Por favor, preencha o campo E-mail.");
      email.focus();
      return false;
    }
  
    if (mensagem.value.trim() === "") {
      alert("Por favor, preencha o campo Mensagem.");
      mensagem.focus();
      return false;
    }
  
    return true;
  }
  function enviarEmail() {
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("mensagem").value;
  
    const corpoEmail = `Nome: ${nome}\nE-mail: ${email}\nMensagem: ${mensagem}`;
  
    window.open(`mailto:contato@creditosocial.com.br?subject=Contato pelo site&body=${encodeURIComponent(corpoEmail)}`);
  }
  const formContato = document.getElementById("form-contato");

  formContato.addEventListener("submit", function(event) {
    event.preventDefault();
  
    if (validarFormulario()) {
      enviarEmail();
    }
  });
      