<<<<<<< HEAD
=======
class TodoList {
    constructor() {
        this.todos = [];
    }

    addTodo() {
        this.todos.push('Novo todo');
        console.log(this.todos);
    }
}

const MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function () {
    MinhaLista.addTodo(); 
}

>>>>>>> 4678b155ddce36196ef0bdfc5a6ab80f8a02fda7
class Usuario {
    constructor(email, senha) {
        this.email = email;
        this.senha = senha;
        this.admin = false;
    }

    isAdmin() {
<<<<<<< HEAD
        return `${this.admin}`;
    }
};

class Admin extends Usuario {
    constructor(email, senha) {
        super();
        this.email = email;
        this.senha = senha;
        this.admin = true;
    }
};

const User1 = new Usuario('email@teste.com', 'senha123');
const Admin1 = new Admin('email@teste.com', 'senha123');

console.log(User1.isAdmin());
console.log(Admin1.isAdmin());

const usuario = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
]

const idades = usuario.map(function (item) {
    return item.idade;
});

console.log(idades);

const filter = usuario.filter(function (item) {
    return item.idade > 18 && item.empresa === 'Rocketseat';
});

console.log(filter);

const find = usuario.find(function (item) {
    return item.empresa === 'Google';
});

console.log(find);

const novoUsuario = usuario.map(function(item) {
    const teste = ({ ...item, idade:item.idade * 2});
    return teste;
});

const filtrado = novoUsuario.filter(item => item.idade < 50)

console.log(filtrado);
=======
        return this.admin;
    }
}

class Admin extends Usuario{
    constructor(email, senha) {
        super();
        this.admin = true;
    }
}

const User1 = new Usuario('email@teste.com', 'senha123');
const Adm1 = new Admin('email@teste.com', 'senha123');

console.log(User1.isAdmin());
console.log(Adm1.isAdmin());
>>>>>>> 4678b155ddce36196ef0bdfc5a6ab80f8a02fda7
