const currentHour = 19; //recebe um número entre 4 e 24 de sua escolha, para representar as horas do dia.
let message = '';

if(currentHour >= 22){
    //console.log("Não deveríamos comer nada, é hora de dormir", message);
    message = "Não deveríamos comer nada, é hora de dormir"
}
else if(currentHour > 18 && currentHour < 22){
    //console.log("Rango da noite, vamos jantar :D", message);
    message = "Rango da noite, vamos jantar :D"
}
else if(currentHour >= 14 && currentHour < 18){
    //console.log("Vamos fazer um bolo pro café da tarde?", message);
    message = "Vamos fazer um bolo pro café da tarde?"
}
else if(currentHour >= 11 && currentHour < 14){
    //console.log("Hora do almoço!!!", message);
    message = "Hora do almoço!!!"
}
else if(currentHour >= 4 && currentHour < 11){
    //console.log("Hmmm, cheiro de café recém passado", message);
    message = "Hmmm, cheiro de café recém passado"
}
console.log(message);