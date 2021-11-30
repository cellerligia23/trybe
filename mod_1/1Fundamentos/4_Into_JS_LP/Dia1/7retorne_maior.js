/* Faça um programa que retorne o maior de três números. 
Defina no começo do programa três constantes com os valores que serão comparados. */

const numero1 = 40;
const numero2 = 20;
const numero3 = 50;


if(numero1 > numero2 && numero1 > numero3){
    console.log(numero1)
}
else if(numero2 > numero1 && numero2 > numero3){
    console.log(numero2)
}
else{
    console.log(numero3)
}