/* Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
1 - Porcentagem >= 90 -> A
2 - Porcentagem >= 80 -> B
3 - Porcentagem >= 70 -> C
4 - Porcentagem >= 60 -> D
5 - Porcentagem >= 50 -> E
6 - Porcentagem < 50 -> F

O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100. */

let notaAluno = 'A';

if(notaAluno === 'A'){
    console.log('Sua nota é igual ou mais que 90%.');
}
else if(notaAluno === 'B'){
    console.log('Sua nota é igual ou mais que 80%.');
}
else if(notaAluno === 'C'){
    console.log('Sua nota é igual ou mais que 70%.');
}
else if(notaAluno === 'D'){
        console.log('Sua nota é igual ou mais que 60%.');
}
else if(notaAluno === 'E'){
    console.log('Sua nota é igual ou mais que 50%.');
}
else {
    console.log('Sua nota está abaixo de 50%.');
}