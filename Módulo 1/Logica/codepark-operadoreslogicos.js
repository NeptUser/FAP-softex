var pontos = 0;
var moedas = 0;
var enfrentou_chefe = true;

//Jogador 1 = Verdadeiro
pontos = 120;
moedas = 15
enfrentou_chefe = true;

console.log(pontos >= 100 && moedas >=5 && enfrentou_chefe)

//Jogador 2 = Falso
pontos = 99;
moedas = 200;
enfrentou_chefe = false;

console.log(pontos >= 100 && moedas >= 5 && enfrentou_chefe)

//Jogador 3 = Verdadeiro 
pontos = 100;
moedas = 5;
enfrentou_chefe = true;

console.log(pontos < 100 || moedas < 5 || enfrentou_chefe)

//Jogador 4 = Verdadeiro
pontos = 101;
moedas = 4;
enfrentou_chefe = false;

console.log(pontos != 100 || moedas != 5 || enfrentou_chefe)
