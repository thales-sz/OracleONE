
// Resolução da aula

alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 5;
let chute = prompt('Escolha um número entre 1 e 10');

if (chute == numeroSecreto) {
  console.log('Isso ai! Você descobriu o número secreto (5)');
}

// Minha solução completa

const secretNumber = parseInt(Math.random() * 100);
let attempts = 1;
let guess = null;

alert('Welcome to the secret number game');

while (guess !== secretNumber) {
  guess = parseInt(prompt('Choose a number between 1 and 100'));

  if (guess === secretNumber) {
    alert('Congratulations! You guessed the secret number');
    break;
  } else {
    if (guess > secretNumber) {
      alert('The secret number is lower');
    } else {
      alert('The secret number is higher');
    }
    attempts++;
  }
}

const totalAttemps = attempts > 1 ? 'attempts' : 'attempt';

alert(`The secret number was ${secretNumber} and you guessed it in ${attempts} ${totalAttemps}`)

