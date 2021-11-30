let fruits = [3, 4, 10, 1, 12];
soma = 0;

for(let index = 0; index < fruits.length; index += 1){
  soma = soma + fruits[index];
  /* ou soma += fruits[index] */
    
}

if(soma > 15){
  console.log(soma);
}
else{
  console.log("valor menor que 16");
}

