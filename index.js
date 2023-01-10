const prompt = require("prompt-sync")();

// Leia os três números
let num1 = parseInt(prompt(`Digite o 1º número: `));
let num2 = parseInt(prompt(`Digite o 2º número: `));
let num3 = parseInt(prompt(`Digite o 3º número: `));

// Calcule a soma e a média
const soma = num1 + num2 + num3;
const media = soma / 3

// Mostre na tela o valor da soma e média
console.log(`\n1º número = ${num1} \n2º número = ${num2} \n3º número = ${num3}`)
console.log(`\nA soma é: ${soma} \nA média é: ${media}`)