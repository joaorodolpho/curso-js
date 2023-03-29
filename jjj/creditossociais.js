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

function onSignIn(googleUser) {
  // Recupera as informações do usuário
  const profile = googleUser.getBasicProfile();
  const nome = profile.getName();
  const email = profile.getEmail();

  // Coloca as informações do usuário na página
  document.getElementById("nome-usuario").textContent = nome;
  document.getElementById("email-usuario").textContent = email;
}

const form = document.getElementById('transfer-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const recipient = document.getElementById('recipient').value;
  const amount = document.getElementById('amount').value;

  fetch('/transfer', {
    method: 'POST',
    body: JSON.stringify({ recipient, amount }),
    headers: { 'Content-Type': 'application/json' }
  })
  .then(response => response.json())
  .then(data => {
    if (data.success) {
      alert('Transferência realizada com sucesso!');
    } else {
      alert('Ocorreu um erro durante a transferência.');
    }
  })
  .catch(error => {
    console.error('Ocorreu um erro:', error);
    alert('Ocorreu um erro durante a transferência.');
  });
});

