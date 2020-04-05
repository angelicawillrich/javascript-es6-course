//arrows functions

const arr = [1, 3, 5, 8, 9];

//const newArr = arr.map(function(item) { //funcao anonima!!
//const newArr = arr.map(item => { //quando só recebe 1 paramentro, nao precisa de parenteses
  //return item * 2;
//});
const newArr = arr.map(item => item * 2); //quando só tem uma linha de comando (item * 2), pode tirar as {}
//mas só serve para funcoes anonimas!

console.log(newArr);

/**const teste = () => {
  return 'teste';
};*/
const teste = () => 'teste2';
const teste2 = () => ({nome : 'Angélica'}); 
//quando queremos retornar um objeto, temos que usar parenteses em volta das {} do objeto
//para a funcao nao confundir e achar q as chaves sao da funcao mesmo

console.log(teste());
console.log(teste2());