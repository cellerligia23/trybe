/* 2- Para o segundo exercício, faça o mesmo que antes, 
mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo: n = 5
*
**
***
****
*****   */

let numero = 5;
let simbolo = '*';
let espaco = '';

for(let index = 0; index < numero; index += 1){
  espaco = espaco + simbolo;
  console.log(espaco)
}