//operadores rest e spread
//tem que instalar o pacote:
//yarn add @babel/plugin-proposal-object-rest-spread
//e adicionar isso no .babelrc "plugins": ["@babel/plugin-proposal-object-rest-spread"]
//REST: pra pegar o resto das propriedades

//em objeto
const usuario = {
  nome: 'Diego',
  idade: 23,
  empresa: 'Rocketseat',
};

const { nome, ...resto} = usuario;

console.log(nome);
console.log(resto);

//em vetor
const arr = [1, 2, 3, 4];

const [a, b, ...c] = arr;

console.log(a);
console.log(b);
console.log(c);

//para parametro de funcoes
function soma(...params) {
  //function soma(a, b, ...params){
  return params.reduce((total, next) => total + next);
}

console.log(soma(1, 3, 4));

////////////////////////////////////////////////////////////////////////////////////
//SPREAD repassa o conteudo de um objeto ou array para outra estrutura de dados
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2];

console.log(arr3);

//para criar um novo objeto quase igual a outro objeto existente, com poucas mudancas
const usuario1 = {
  nome: 'Diego',
  idade: 23,
  empresa: 'Rocketseat',
};

const usuario2 = {...usuario1, nome: 'Gabriel'};

console.log(usuario2);