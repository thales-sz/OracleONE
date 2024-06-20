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
  if (countdown === 0) {
    alert('Finalizou!');
    break;
  }
  alert(countdown);
  countdown--;
}

let countup = prompt('Digite um número para uma contagem progressiva:');
let aux = 0;

while (aux <= countup) {
  if (countup === aux) {
    alert('Finalizou!');
    break;
  }
  alert(aux);
  aux++;
}
