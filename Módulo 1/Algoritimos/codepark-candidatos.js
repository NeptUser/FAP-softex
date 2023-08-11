const candidatos = [
    {num: 889, votos:0},
    {num: 847, votos:0},
    {num: 515, votos:0},
    {num: 0, votos:0}
];
    
const erros = {
    votoInvalido: "Apenas números são aceitos para votar!"
}
    
function votar(numero) {
    let candidatoEncontrado = false;
    for (let i = 0; i < candidatos.length; i++) {
        if (candidatos[i].num === numero) {
            candidatos[i].votos++;
            candidatoEncontrado = true;
            break;
        }
    }
    if (!candidatoEncontrado) {
        for (let i = 0; i < candidatos.length; i++) {
            if (candidatos[i].num === 0) {
                candidatos[i].votos++;
                break;
            }
        }
    }
}

function encerrarEleicao() {
    let vencedor = candidatos[0];
    for (let i = 1; i < candidatos.length; i++) {
        if (candidatos[i].votos > vencedor.votos) {
            vencedor = candidatos[i];
        }
    }
    console.log(`O vencedor da eleição é o candidato de número ${vencedor.num} com ${vencedor.votos} votos.`);
}

// MAIN
let continuarVotando = true;
while(continuarVotando) {
    
    console.log("Votação iniciada!");
    console.log("Escolha uma das opções abaixo!");
    console.log("Candidato X | Número 889\nCandidato Y | Número 847\nCandidato Z | Número 515\nVoto em branco | Número 0");
    
    let voto = prompt();
    
    if (isNaN(voto)) {
        console.log(erros.votoInvalido);
    } else {
        votar(parseInt(voto));
    }
    
    let continuar = prompt("Deseja continuar votando? (s/n)");
    if (continuar === "n") {
        continuarVotando = false;
    }
}

encerrarEleicao();