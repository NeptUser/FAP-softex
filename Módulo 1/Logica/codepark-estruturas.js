console.log("Escolha um veículo entre trator, moto ou bicicleta")

var terrestre;
var capacidade; //Considerando o modelo, perguntar a capacidade é inutil
var capacete;
var peso;
var pedal;

console.log("Vamos lá! Responda 'Sim' ou 'Não'");

terrestre = prompt("É terrestre? ");

if(terrestre === 'Sim'){
    
    capacete = prompt("Este veículo precisa de capacete?");
    if(capacete === 'Sim'){
        console.log("O veículo é uma moto"); 
    
    }else if(capacete === 'Não'){
       
        peso = prompt("O veículo é pesado?");
        if(peso === 'Sim'){
            console.log("o veículo é um trator");
        }else if(peso === 'Não'){
            console.log("O veículo é uma bicicleta");
        }else{
            console.log("Entrada invalida!");
       
        }
    }else{
        console.log("Entrada invalida!");
    }

}else if(terrestre === 'Não'){
    console.log("Certamente não é nenhum dos meios de transporte dispostos a cima.");
}else{
    console.log("Entrada invalida!");
}