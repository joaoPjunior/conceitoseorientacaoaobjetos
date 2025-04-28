let usuarios = [];

function cadastrar() {
    let nome = document.getElementById("nome").value;
    let cpf = document.getElementById("cpf").value;
    let idade = document.getElementById("idade").value;
    let celular = document.getElementById("celular").value;
    let cor = document.getElementById("cor").value;
    let sexo = document.getElementById("sexo").value;

    let usuario = { nome, cpf, idade, celular, cor, sexo };
    usuarios.push(usuario);

    atualizarLista();
    limparCampos();
}

function atualizarLista() {
    let lista = document.getElementById("listaUsuarios");
    lista.innerHTML = "";
    usuarios.forEach((user, index) => {
        lista.innerHTML += `<li>${index + 1}. ${user.nome}, ${user.cpf}, ${user.idade} anos, ${user.celular}, Cor: ${user.cor}, Sexo: ${user.sexo}</li>`;
    });
}

function limparCampos() {
    document.getElementById("cadastroForm").reset();
}