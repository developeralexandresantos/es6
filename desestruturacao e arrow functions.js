const usuario = {
    nome: 'Alexandre',
    idade: 37,
    endereco: {
        cidade: 'Sao Paulo',
        estado: 'SP'
    },
};

function mostraNome({nome, idade, endereco:{cidade}}) {
    console.log(nome);
    console.log(idade);
    console.log(cidade);
}

mostraNome(usuario);