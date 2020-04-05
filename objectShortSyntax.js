//Object short syntax

const nome = "Angel";
const idade = 36;

const usuario = {
  //nome: nome, //NAO PRECISA REPETIR QUANDO O NOME DA PROPRIEDADE É IGUAL AO NOME DA VARIÁVEL
  //idade: idade,
  nome,
  idade,
  empresa: "Rocketseat",
};

console.log(usuario);