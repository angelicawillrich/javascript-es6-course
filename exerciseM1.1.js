class Usuario {
  constructor(email, senha) {
    this.email = email;
    this.senha = senha;
  }

  isAdmin() {
    return this.admin == true;
  }
  getEmail() {
    return this.email;
  }
}

class Admin extends Usuario {
  constructor(email, senha) {
    super(email, senha);
    this.admin = true;
  }
}

const User1 = new Usuario('user@teste.com', 'senha123');
const Admin1 = new Admin('admin@teste.com', 'senha123');

console.log(User1.isAdmin());
console.log(Admin1.isAdmin());

console.log(Admin1.getEmail());
console.log(User1.getEmail());