let cadastro = [];

function cadastrarUsuario() {
    let nome = prompt("Insira o nome do usuário:");
    let endereco = prompt("Insira o endereço do usuário:");
    let cidade = prompt("Insira a cidade do usuário:");
    let cpf = prompt("Insira o CPF do usuário:");
    let rg = prompt("Insira o RG do usuário:");
    let idade = prompt("Insira a idade do usuário:");
    let nomePai = prompt("Insira o nome do pai do usuário:");
    let nomeMae = prompt("Insira o nome da mãe do usuário:");
    let peso = prompt("Insira o peso do usuário:");
    let rendaBruta = prompt("Insira a renda bruta do usuário:");

    cadastro.push({
        nome: nome,
        endereco: endereco,
        cidade: cidade,
        cpf: cpf,
        rg: rg,
        idade: idade,
        nomePai: nomePai,
        nomeMae: nomeMae,
        peso: peso,
        rendaBruta: rendaBruta
    });
}

function mostrarInformacoes() {
    let usuario = prompt("De qual usuário você deseja ver as informações cadastradas?");
    for (let i = 0; i < cadastro.length; i++) {
        if (cadastro[i].nome === usuario) {
            console.log(cadastro[i]);
            break;
        }
    }
}

do{
    cadastrarUsuario();
    var repete = prompt("Deseja realizar mais um cadastro? 'sim' ou 'não' ");
}while(repete == "sim")

mostrarInformacoes();
