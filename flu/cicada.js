function validarLogin() {
    var login = document.getElementById("login").value;
    var senha = document.getElementById("senha").value;
    var mensagem = document.getElementById("mensagem");

    if (login === "CICADA" && senha === "3301") {
        mensagem.innerHTML = "Login bem-sucedido!FALE COMIGO NO PV! (vc é esperto não é mesmo?";
        mensagem.style.color = "green";
    } else {
        mensagem.innerHTML = "Login ou senha incorretos. Tente novamente.";
        mensagem.style.color = "red";
    }
}
