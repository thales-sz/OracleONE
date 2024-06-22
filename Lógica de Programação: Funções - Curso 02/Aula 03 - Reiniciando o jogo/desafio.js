// Crie uma função que calcule o índice de massa corporal(IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.
function calculateIMC(height, weight) {
  return weight / (height * height);
}

// Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.
function factorialRecursive(number) {
  if (number == 0) return 1;
  return number * factorialRecursive(number - 1) ;
}
console.log(factorialRecursive(4));

function factorial(number) {
  let response = 1;
  if (number == 0) return 1;
  while (number >= 1) {
    response *= number;
    number--;
  }
  return response;
}
console.log(factorial(4));

// Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais.Para isso, considere a cotação do dólar igual a R$4, 80.
function calculateDolar(value) {
  return value * 4.8;
}

// Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.
function calculateRectanglePerimeter(height, width) {
  return (height * 2) + (width * 2)
}

// Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro.Considere Pi = 3, 14.
function calculateCirclePerimeter(radius) {
  return 2 * Math.PI * radius;
}

// Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.
function showNumberTable(number) {
  let count = 1;
  while(count <= 10) {
    console.log(`${number} * ${count} =`, count * number)
    count++;
  }
}
showNumberTable(5);