let saldo = 0;
const transacoes = [];

const saldoElement = document.getElementById('saldo-valor');
const transacoesElement = document.getElementById('transacoes');

function atualizarSaldo() {
    saldoElement.textContent = saldo.toFixed(2);
  }
  
  function atualizarTransacoes() {
    transacoesElement.innerHTML = '';
    for (let i = 0; i < transacoes.length; i++) {
      const transacao = transacoes[i];
      const li = document.createElement('li');
      li.textContent = transacao.descricao + ': R$ ' + transacao.valor.toFixed(2);
      li.classList.add(transacao.tipo);
      transacoesElement.appendChild(li);
    }
  }
  
  function adicionarTransacao(descricao, valor, tipo) {
    transacoes.push({ descricao, valor, tipo });
    atualizarTransacoes();
  }
  
  function recarregar() {
    const valor = parseFloat(prompt('Digite o valor a ser recarregado:'));
    if (isNaN(valor)) {
      alert('Valor inválido!');
      return;
    }
    if (valor <= 0) {
      alert('O valor deve ser maior que zero!');
      return;
    }
    saldo += valor;
    adicionarTransacao('Recarga', valor, 'recarga');
    atualizarSaldo();
  }
  
  atualizarSaldo();
  atualizarTransacoes();
  
  document.getElementById('btn-recarregar').addEventListener('click', recarregar);

  <!-- Google Sign-In API -->
<script src="https://apis.google.com/js/platform.js" async defer></script>

<!-- Meta tag necessária para a API do Google -->
<meta name="google-signin-client_id" content="model-signifier-382122.apps.googleusercontent.com">

<!-- Botão de login do Google -->
<div class="g-signin2" data-onsuccess="onSignIn"></div>

function onSignIn(googleUser) {
  // Recupera as informações do usuário
  const profile = googleUser.getBasicProfile();
  const nome = profile.getName();
  const email = profile.getEmail();

  // Coloca as informações do usuário na página
  document.getElementById("nome-usuario").textContent = nome;
  document.getElementById("email-usuario").textContent = email;
}
