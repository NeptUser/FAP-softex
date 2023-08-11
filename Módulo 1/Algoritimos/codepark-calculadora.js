do{
    console.log("Escolha uma das operações a seguir:");
    var opc = parseInt(prompt("1 - Adição \n2 - Subtração\n3 - Multiplicação\n4 - Divisão\n0 - Sair\n"));

    switch(opc){

        case 1:
            let n1 = parseFloat(prompt("Insira o número 1: "));
            let n2 = parseFloat(prompt("Insira o número 2: "));
            console.log(`O resultado da soma de ${n1} mais ${n2} é: ${n1 + n2}`);
            break;

        case 2:
            n1 = parseFloat(prompt("Insira o número 1: "));
            n2 = parseFloat(prompt("Insira o número 2: "));
            console.log(`O resultado da subtração de ${n1} menos ${n2} é: ${n1 - n2}`);
            break;
        
        case 3:
            n1 = parseFloat(prompt("Insira o número 1: "));
            n2 = parseFloat(prompt("Insira o número 2: "));
            console.log(`O resultado da multiplicação de ${n1} por ${n2} é: ${n1 * n2}`);
            break;

        case 4:
            n1 = parseFloat(prompt("Insira o número 1: "));
            n2 = parseFloat(prompt("Insira o número 2: "));
            console.log(`O resultado da divisão de ${n1} por ${n2} é: ${n1 - n2}`);
            break;
            
        case 0:
            console.log("Encerrando a calculadora!")
            break;

        default:
            console.log("Opção inválida!")
    }

}while(opc != 0);