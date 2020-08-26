// REST - pega o resto das propriedades

const usuario = {
    nome: 'Alexandre',
    idade: 37,
    empresa: 'DreamMaker'
};

const {nome , ...resto } = usuario;

console.log(nome);
console.log(resto);

// Exemplo de rest com array e desestruturação

const arr = [1, 2, 3, 4];

const [a, b, ...c] = arr;
console.log(a);
console.log(b);
console.log(c);

// Exemplo de rest com function

function soma(...params) {
    return params.reduce((total, next) => total + next);
}

console.log(soma(1, 3, 4));

// SPREAD

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [...arr1, ...arr2];

console.log(arr3);

const usuario1 = {
    nome:'Alexandre',
    idade: 37,
    empresa: 'DreamMaker'
};

const usuario2 = { ...usuario1, nome:'Rafael'};
console.log(usuario2);