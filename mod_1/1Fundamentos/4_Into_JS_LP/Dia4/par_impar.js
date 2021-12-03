/* Exercício 2 - Crie uma função que, dado um array de números inteiros, 
retorne a quantidade de números pares e ímpares no formato: { pares: 0, ímpares: 0 } */


function array(numeros) {
  let par = 0;
  let impar = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (numeros % 2 == 0) {
      par += 1;
    } 
    else {
      impar += 1;
    }
  }
  
}
console.log(array)
console.log()