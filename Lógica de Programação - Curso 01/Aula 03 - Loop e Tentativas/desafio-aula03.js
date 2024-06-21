// Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.
let countAsc = 1;

while (countAsc <= 10) {
  console.log('Número da execução ascendente atual:', countAsc);
  countAsc++;
}

// Crie um contador que comece em 10 e vá até 0 usando um loop while. Mostre cada número.
let countDesc = 10;

while (countDesc >= 0) {
  console.log('Número da execução descendente atual:', countDesc);
  countDesc--;
}

// Crie um programa de contagem regressiva. Peça um número ao usuario e conte deste número até 0, usando um loop while no console do navegador.
let countdown = prompt('Digite um número para uma contagem regressiva:');

while (countdown >= 0) {
  alert(countdown);
  countdown--;
}

// Crie um programa de contagem progressiva. Peça um número ao usuario e conte de 0 até esté número, usando um loop while no console do navegador.
let countupMax = prompt('Digite um número para uma contagem progressiva:');
let countup = 0;

while (countup <= countupMax) {
  alert(countup);
  countup++;
}
