// Altere o conteúdo da tag h1 com document.querySelector e atribua o seguinte texto: Hora do Desafio.
const title = document.querySelector('h1');
title.innerText = 'Hora do desafio';

// Crie uma função que exiba no console a mensagem O botão foi clicado sempre que o botão Console for pressionado.
function handleConsoleClick() {
  console.log('O botão foi clicado');
}

// Crie uma função que exiba um alerta com a mensagem: Eu amo JS, sempre que o botão Alerta for pressionado.
function handleAlertClick() {
  alert('Eu amo JS!');
}

// Crie uma função que é executada quando o botão prompt é clicado, perguntando o nome de uma cidade do Brasil.Em seguida, exiba um alerta com a mensagem concatenando a resposta com o texto: Estive em { cidade } e lembrei de você.
function handlePromptClick() {
  const cityName = prompt('Digite o nome de uma cidade brasileira');

  alert(`Estive em ${cityName} e lembrei de você`);
}

// Ao clicar no botão soma, peça 2 números inteiros e exiba o resultado da soma em um alerta.
function handleSumClick() {
  const firstNumber = Number(prompt('Digite um número inteiro'));
  const secondNumber = Number(prompt('Digite um outro número inteiro'));

  const sum = firstNumber + secondNumber;

  alert(`A soma dos dois números é ${sum}`);
}