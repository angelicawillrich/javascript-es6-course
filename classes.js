/**class TodoList {
  constructor() {
    this.todos = [];
  }
  
    addTodo() {
      this.todos.push('Novo todo');
      console.log(this.todos);
  }
}

const MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function() {
  MinhaLista.addTodo();
}*/

//com heranca
class List {
  constructor() {
    this.data = [];
  }
  
    add(data) {
      this.data.push(data);
      console.log(this.data);
  }
}

class TodoList extends List { //classe filha de List
  constructor() {
    super(); // chama o constructor da classe mae

    this.usuario = "Angelica";
  }

  mostraUsuario() {
    console.log(this.usuario);
  }
}

var MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function() {
  MinhaLista.add('Novo todo');
}

MinhaLista.mostraUsuario();