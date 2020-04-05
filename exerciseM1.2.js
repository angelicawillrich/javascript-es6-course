const usuarios = [
  { nome: 'Diego', idade: 23, empresa: 'Rocketseat'},
  { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat'},
  { nome: 'Lucas', idade: 30, empresa: 'Facebook'},
];

const idades = usuarios.map(function(item) { //index é opcional
  return item.idade;
});

//console.log(idades);

////////////////////////////////////////////////////////////////

const filter = usuarios.filter(function(item) { //retorna true ou false
  return item.empresa == "Rocketseat" && item.idade > 18;
});

//console.log(filter);

////////////////////////////////////////////////////////////////////
const find = usuarios.find(function(item) { //encontra algo no array
  return item.empresa == "Google";
});

//console.log(find);

/////////////////////////////////////////////////////////////////////

const newAge = usuarios
  .map(item => ({...item, idade: item.idade * 2}))
  .filter(item => item.idade <= 50);

console.log(newAge);
