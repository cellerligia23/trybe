/* Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. 
Retorne true se os ângulos representarem os ângulos de um triângulo e false, 
caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.
1 - Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.
2 - Um ângulo será considerado inválido se não tiver um valor positivo. */ 

const angulo1 = 0;
const angulo2 = -5;
const angulo3 = -41;

let somaAngulo = angulo1 + angulo2 + angulo3;

if(somaAngulo > 0 && somaAngulo <= 180){
    console.log('True');
}
else if(somaAngulo < 0){
    console.log('Mensagem de erro: Ângulo do triângulo negativo');
}
else{
    console.log('False'); 
}