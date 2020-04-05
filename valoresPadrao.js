//valores padrao

/**function soma(a = 3, b = 6) { //define um valor para as variáveis, caso elas nao recebam nada por parametro
  return a + b;
}*/
const soma = (a = 3, b = 6) => a + b;

console.log(soma(1));