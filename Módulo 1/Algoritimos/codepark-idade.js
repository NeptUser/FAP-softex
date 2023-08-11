try{
    let nome = prompt("Insira o nome: ");
    let ano = parseInt(prompt("Insira o ano em que nasceu: "));
    
    if(ano <= 1922 || ano >=2023){
        throw new Error("O ano de nascimento não é coerente!");
    }else{
        console.log(`Olá ${nome}, sua idade em 2023 é ${2023 - ano} anos.`);
    }
}catch(error){
    console.log(error.message);
}
