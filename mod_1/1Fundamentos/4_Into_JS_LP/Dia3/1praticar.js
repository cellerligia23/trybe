/* 1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , 
imprima na tela um quadrado feito de asteriscos de lado de tamanho n . Por exemplo: n = 5
*****
*****
*****
*****
*****    */

let numero = 5;
let asteriscosLinhas = '';
let simbolo = '*';

for(let linha = 0; linha < numero; linha += 1){
  //asteriscosLinhas = asteriscosLinhas + simbolo;
  
  //Outra maneira:
  asteriscosLinhas += simbolo

} 

for(let coluna = 0; coluna < numero; coluna += 1){
 console.log(asteriscosLinhas);

}
