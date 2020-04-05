//3.1
const arr = [1, 2, 3, 4, 5];

const newArr = arr.map(item => item + 10);

//console.log(newArr);

//3.2
const usuario = {nome : 'Diego', idade: 23};
const showAge = item => item.idade; //funcao que recebe o item como parametro e retorna a idade do item

//console.log(showAge(usuario));

//3.3
const nome = "Diego";
const idade = 23;

const showUser = (nome = "Diego", idade = 18) => ({nome, idade}); 

//console.log(showUser(nome, idade));
//console.log(showUser(nome));

//3.4
const promise = () => new Promise((resolve, reject) => resolve());



