/* 3 - Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
3.1 - A média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos. */

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
let media = 0;

/* Primeira forma de fazer: 

for(let i = 0; i < numbers.length; i++){
  soma = soma + numbers[i];
}
media = soma / numbers.length;
console.log(media) */


/* Segunda forma de fazer: */

for (let listNumber of numbers) {
  soma = soma + listNumber;
}
media = soma / numbers.length;
console.log(media);