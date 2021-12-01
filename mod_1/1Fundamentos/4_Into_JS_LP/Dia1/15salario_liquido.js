/* Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. 
Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido. 
INSS (Instituto Nacional do Seguro Social)
1 - Salário bruto até R$ 1.556,94: alíquota de 8%
2 - Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
3 - Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
4 - Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88
IR (Imposto de Renda)
1 - Até R$ 1.903,98: isento de imposto de renda
2 - De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
3 - De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
4 - De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
5 - Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto. */

const salarioBruto = 3000;
let inss = salarioBruto * 8 / 100;
let inss2 = salarioBruto * 9 / 100;
let inss3 = salarioBruto * 11 / 100;
let ir = salarioBruto * 7.5 / 100;
let ir2= salarioBruto * 15 / 100;
let ir3 = salarioBruto * 22.5 / 100;
let ir4 = salarioBruto * 27.5 / 100;
let salarioLiquidoInss = 0;
let salarioLiquidoIr = 0;


if(salarioBruto <= 1903.98){
    salarioLiquidoInss = salarioBruto - inss;
    console.log('Salário liquido a receber', salarioLiquidoInss.toFixed(2))
}
else if(salarioBruto > 1556.95 && salarioBruto < 2594.92){
    salarioLiquidoInss = salarioBruto - inss2;
    console.log('Salário liquido a receber', salarioLiquidoInss.toFixed(2))
}
else if(salarioBruto > 2594.93){
    salarioLiquidoInss = salarioBruto - inss3;
    console.log('Salário liquido a receber', salarioLiquidoInss.toFixed(2))
}

if(salarioBruto > 2594.93){
    salarioLiquidoIr  = salarioBruto - ir;
    console.log('Salário liquido a receber', salarioLiquidoIr .toFixed(2))
}