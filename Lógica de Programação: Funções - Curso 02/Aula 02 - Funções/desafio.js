// Criar uma função que exibe "Olá, mundo!" no console.
function greetings() {
  console.log('Olá, mundo!')
}
greetings();

// Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
function greetingsPerson(name) {
  console.log(`Olá, ${name}`)
}
greetingsPerson('Thales');

// Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
function double(number) {
  return number * 2;
}
console.log(double(4));

// Criar uma função que recebe três números como parâmetros e retorna a média deles.
function average(num1, num2, num3) {
  return (num1 + num2 + num3) / 3
}
console.log(average(2, 3, 6));

// Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
function biggerNumber(num1, num2) {
  return num1 > num2 ? num1 : num2;
}
console.log(biggerNumber(4, 8));

// Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo
function multiplyByItself(number) {
  return number * number;
}
console.log(multiplyByItself(5));