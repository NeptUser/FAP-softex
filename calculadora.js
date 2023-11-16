function calcular(valor1, valor2, operador) {
    let resultado;

    switch (operador) {
        case '+':
            resultado = valor1 + valor2;
            break;
        case '-':
            resultado = valor1 - valor2;
            break;
        case '*':
            resultado = valor1 * valor2;
            break;
        case '/':
            if (valor2 !== 0) {
                resultado = Math.floor(valor1 / valor2);
                let resto = valor1 % valor2;
                return `Quociente: ${resultado}, Resto: ${resto}`;
            } else {
                return 'Erro: divisão por zero';
            }
        default:
            return 'Operador inválido';
    }

    return resultado;
}

let valor1 = parseFloat(prompt('Digite o primeiro valor:'));
let valor2 = parseFloat(prompt('Digite o segundo valor:'));

let operador = prompt('Digite o operador (+, -, *, /):');

let resultado = calcular(valor1, valor2, operador);
console.log(`Resultado: ${resultado}`);
