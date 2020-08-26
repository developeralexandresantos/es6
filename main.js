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
};

class Usuario {
    constructor(email, senha) {
        this.email = email;
        this.senha = senha;
        this.admin = false;
    }

    isAdmin() {
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


const idade = usuarios.map((item) => item.idade);
console.log(idade);

const trabalhaEMaiorQue18 = usuarios.filter((item) => item.idade > 18 && item.empresa === 'DreamMaker');
console.log(trabalhaEMaiorQue18);

const encontraGoogle = usuarios.find((item) => item === 'Google');
console.log(encontraGoogle);

const multiplicador = usuarios.map(function (item) {
    const multiplicacao = ({ ...item, idade: item.idade * 2});
    return multiplicacao;
})

const idadeMultiplicada = multiplicador.filter((item) => item.idade < 50);
console.log(idadeMultiplicada);

// 3.1
const arr = [1, 2, 3, 4, 5];

console.log(arr.map((item) => item + 10));