/* Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz:

1- Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, 
sem aumentar a quantidade de condicionais.
2 - Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case).
3 - Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
4 - Exemplo: bishop (bispo) -> diagonals (diagonais) */

const peca = 'REI';
peca.toLocaleLowerCase();

switch(peca){
  case 'rei':
    console.log('Uma casa por vez: Diagonal, vertical e horizontal');
    break;
  case 'rainha':
    console.log('Quantas casas quiser: Diagonal, vertical e horizontal');
    break;
  case 'dama':
    console.log('Quantas casas quiser: Diagonal, vertical e horizontal');
    break;
  case 'torre':
    console.log('Quantas casas quiser: Vertical e horizontal');
    break;
  case 'bispo':
    console.log('Quantas casas quiser: Diagonal');
    break;
  case 'cavalo':
    console.log('Forma de L, um-dois: Vertical e horizontal. Pode pular peças do tabuleiro');
    break;
  case 'peão':
    console.log('Uma casa para frente, execeto na primeira jogada que pode ser duas casas para frente. Não retrocede.');
    break;
  default:
    console.log('Mensagem de erro: Coloque um nome de peça válido');
}
