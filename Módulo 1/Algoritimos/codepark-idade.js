try{
    let nome = prompt("Insira o nome: ");
    let ano = parseInt(prompt("Insira o ano em que nasceu: "));
    
    if(ano <= 1922 || ano >=2022){
        throw new Error("O ano de nascimento não é coerente!");
    }else{
        console.log(`Olá ${nome}, sua idade em 2022 é ${2022 - ano} anos.`);
    }
}catch(error){
    console.log(error.message);
}
