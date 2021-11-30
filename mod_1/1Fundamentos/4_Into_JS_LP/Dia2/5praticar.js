/* 5 - Utilizando for , descubra qual o maior valor contido no array e imprima-o; */

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maiorNumeros = 0;

for(let i = 0; i < numbers.length; i++){
  let numeros1 = numbers.length[i];

  for(let index = 0; index < numbers.length; index++){
    let numeros2 = numbers.length[index];

    if(numeros1 > numeros2){
      maiorNumeros = numeros1;
      
    }
  }
}
console.log(maiorNumeros);