let countAsc = 1;

while (countAsc <= 10) {
  console.log('Número da execução ascendente atual:', countAsc);
  countAsc++;
}

let countDesc = 10;

while (countDesc >= 0) {
  console.log('Número da execução descendente atual:', countDesc);
  countDesc--;
}

let countdown = prompt('Digite um número para uma contagem regressiva:');

while (countdown >= 0) {
  alert(countdown);
  countdown--;
}

let countupMax = prompt('Digite um número para uma contagem progressiva:');
let countup = 0;

while (countup <= countupMax) {
  alert(countup);
  countup++;
}
