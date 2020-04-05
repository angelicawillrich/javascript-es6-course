//desestruturacao de objetos
const usuario = {
  nome: 'Angelica',
  idade: '36',
  endereco: {
    cidade: 'Munique',
    estado: 'Bav',
  },
};

/**const nome = usuario.name;
const cidade = usuario.endereco.cidade;*/
const { nome, idade, endereco: {cidade} } = usuario; //desestruturacao

console.log(nome);
console.log(idade);
console.log(cidade);

/**function mostraNome(usuario) {
  console.log(usuario.nome);
}*/
function mostraNome( {nome, idade}) {
  console.log(nome, idade);
}

mostraNome(usuario);