function Operacao() {
  try {
    var numero1 = parseFloat(prompt("Digite o primeiro número:"));
    var numero2 = parseFloat(prompt("Digite o segundo número:"));

    if (numero2 === 0) {
      throw new Error("Divisão por zero não é permitida!");
    }

    var resultado = numero1 / numero2;
    console.log("Resultado da divisão:", resultado);
  } catch (erro) {
    console.error("Erro:", erro.message);
  } finally {
    console.log("Operação concluída.");
  }
}

Operacao();
