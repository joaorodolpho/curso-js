const jacob = {
    values: {
      friendship: false,
      moderation: false,
      courage: false,
      resilience: false,
    },
  };
  function showOptions() {
    const options = document.createElement('div');
    options.innerHTML = `
      <h2>O que Jacob deve fazer?</h2>
      <button onclick="goOut()">Sair com os amigos</button>
      <button onclick="playGame()">Jogar mais um pouco</button>
    `;
    document.body.appendChild(options);
  }
  
  function goOut() {
    console.log('Jacob sai com os amigos.');
    // chamar função para lutar contra o monstro do vício
  }
  
  function playGame() {
    console.log('Jacob joga mais um pouco.');
    // chamar função para aumentar o monstro do vício
  }
  function fightAddiction() {
    const random = Math.floor(Math.random() * 10) + 1;
    if (random > 5) {
      console.log('Jacob perde a batalha.');
      function fightAddiction() {
        const random = Math.floor(Math.random() * 10) + 1;
        if (random > 5) {
        console.log('Jacob perde a batalha contra o monstro do vício.');
        // aumentar o monstro do vício
        } else {
        console.log('Jacob vence a batalha contra o monstro do vício e conquista o valor da moderação.');
        jacob.values.moderation = true;
        // chamar função para mostrar novas opções de ação
        }
        }
        
//Agora, vamos criar a função para mostrar as novas opções de ação, após a luta contra o monstro do vício. Se Jacob conquistou o valor da moderação, as novas opções devem incluir sair para comer com o amigo ou jogar mais um pouco. Se ele não conquistou, as novas opções devem incluir apenas jogar mais um pouco.


function showNewOptions() {
  const options = document.createElement('div');
  options.innerHTML = `
    <h2>O que Jacob deve fazer?</h2>
    ${jacob.values.moderation ? `
      <button onclick="goEat()">Sair para comer com o amigo</button>
    ` : ''}
    <button onclick="playGame()">Jogar mais um pouco</button>
  `;
  document.body.appendChild(options);
}

function goEat() {
  console.log('Jacob sai para comer com o amigo.');
  // chamar função para lutar contra o monstro da gula
}
function fightGluttony() {
    const random = Math.floor(Math.random() * 10) + 1;
    if (random > 5) {
      console.log('Jacob perde a batalha contra o monstro da gula.');
      // aumentar o monstro da gula
    } else {
      console.log('Jacob vence a batalha contra o monstro da gula e conquista o valor da amizade.');
      jacob.values.friendship = true;
      // chamar função para mostrar novas opções de ação
    }
  }
  
  function showNewOptions2() {
    const options = document.createElement('div');
    options.innerHTML = `
      <h2>O que Jacob deve fazer?</h2>
      ${jacob.values.friendship ? `
        <button onclick="goToSchool()">Voltar para a escola</button>
      ` : ''}
      <button onclick="playGame()">Jogar mais um pouco</button>
    `;
    document.body.appendChild(options);
  }
  
  function goToSchool() {
    console.log('Jacob volta para a escola.');
    // chamar função para lutar contra o monstro da humilhação
  }
  function fightHumiliation() {
    const random = Math.floor(Math.random() * 10) + 1;
    if (random > 5) {
      console.log('Jacob perde a batalha contra o monstro da humilhação.');
      // aumentar o monstro da humilhação
    } else {
      console.log('Jacob vence a batalha contra o monstro da humilhação e conquista o valor da coragem.');
      jacob.values.courage = true;
      // chamar função para mostrar novas opções de ação
}
}

function showNewOptions3() {
const options = document.createElement('div');
options.innerHTML = `<h2>O que Jacob deve fazer?</h2> <button onclick="goHome()">Voltar para casa</button> <button onclick="playGame()">Jogar mais um pouco</button>`;
document.body.appendChild(options);
}

function goHome() {
console.log('Jacob volta para casa.');
// chamar função para lutar contra o monstro da solidão
}

//Por fim, a luta contra o monstro da solidão e a vitória final.


function fightLoneliness() {
  const random = Math.floor(Math.random() * 10) + 1;
  if (random > 5) {
    console.log('Jacob perde a batalha contra o monstro da solidão.');
    // aumentar o monstro da solidão
  } else {
    console.log('Jacob vence a batalha contra o monstro da solidão e encontra seus amigos de novo!');
    // chamar função para mostrar tela final
    showFinalScreen();
  }
}

function showFinalScreen() {
  const finalScreen = document.createElement('div');
  finalScreen.innerHTML = `
    <h2>Parabéns, você venceu!</h2>
    <p>Jacob aprendeu os valores da moderação, amizade, coragem e não se deixou levar pela solidão.</p>
  `;
  document.body.appendChild(finalScreen);
}

// iniciar o jogo
playGame();