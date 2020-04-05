//operacoes em vetores


const arr = [1, 2, 3, 4, 5, 8];

//map: percorres vetor sem for
//usa funcao anonima!
const newArr = arr.map(function(item, index) { //index é opcional
  return item * 2 + index;
});

console.log(newArr);

const sum = arr.reduce(function(total, next) { //para consumir todo o vetor e transformar um uma única variável
  return total + next; //soma todos os valores do array
});

console.log(sum);

const filter = arr.filter(function(item) { //retorna true ou false
  return item % 2 === 0;
});

console.log(filter);

const find = arr.find(function(item) { //encontra algo no array
  return item === 2;
});

console.log(find);