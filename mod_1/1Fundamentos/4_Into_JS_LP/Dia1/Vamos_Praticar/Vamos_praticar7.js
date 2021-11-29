let statusCandidato = 'aprovado'

switch(statusCandidato){
  case 'aprovado':
    console.log("Parabéns, você foi aprovada(o)");
    break;
  case 'lista':
    console.log("Você esta na nossa lista de espera");
    break;
  case 'reprovado':
    console.log("Infelizmente não foi dessa vez. Tente novamente");
    break;
  default:
    console.log("Não se aplica");
}