var banco = {
  contas: [],

  criarConta: function (conta, saldoInicial, tipoConta, agencia) {
    var novaConta = {
      conta: conta,
      saldo: saldoInicial,
      tipoConta: tipoConta,
      agencia: agencia
    };
    this.contas.push(novaConta);
    return "Conta criada com sucesso!";
  },

  buscarSaldo: function (conta) {
    var contaEncontrada = this.encontrarConta(conta);
    if (contaEncontrada) {
      return contaEncontrada.saldo;
    } else {
      return "Conta não encontrada.";
    }
  },

  deposito: function (conta, valor) {
    var contaEncontrada = this.encontrarConta(conta);
    if (contaEncontrada) {
      contaEncontrada.saldo += valor;
      return "Depósito realizado. Novo saldo: " + contaEncontrada.saldo;
    } else {
      return "Conta não encontrada.";
    }
  },

  saque: function (conta, valor) {
    var contaEncontrada = this.encontrarConta(conta);
    if (contaEncontrada) {
      if (valor > contaEncontrada.saldo) {
        return "Saldo insuficiente";
      } else {
        contaEncontrada.saldo -= valor;
        return "Saque realizado. Novo saldo: " + contaEncontrada.saldo;
      }
    } else {
      return "Conta não encontrada.";
    }
  },

  numeroConta: function (conta) {
    var contaEncontrada = this.encontrarConta(conta);
    if (contaEncontrada) {
      return contaEncontrada.conta;
    } else {
      return "Conta não encontrada.";
    }
  },

  encontrarConta: function (conta) {
    return this.contas.find(function (c) {
      return c.conta === conta;
    });
  }
};

function operacao() {
  var opcao = prompt("Escolha uma opção:\n1 - Criar conta\n2 - Ver saldo\n3 - Realizar depósito\n4 - Realizar saque\n5 - Obter número da conta\n0 - Sair");

  switch (opcao) {
    case "1":
      var novaConta = prompt("Digite o número da conta:");
      var saldoInicial = parseFloat(prompt("Digite o saldo inicial:"));
      var tipoConta = prompt("Digite o tipo de conta:");
      var agencia = prompt("Digite a agência:");
      console.log(banco.criarConta(novaConta, saldoInicial, tipoConta, agencia));
      break;
    case "2":
      var contaSaldo = prompt("Digite o número da conta:");
      console.log(banco.buscarSaldo(contaSaldo));
      break;
    case "3":
      var contaDeposito = prompt("Digite o número da conta:");
      var valorDeposito = parseFloat(prompt("Digite o valor do depósito:"));
      console.log(banco.deposito(contaDeposito, valorDeposito));
      break;
    case "4":
      var contaSaque = prompt("Digite o número da conta:");
      var valorSaque = parseFloat(prompt("Digite o valor do saque:"));
      console.log(banco.saque(contaSaque, valorSaque));
      break;
    case "5":
      var contaNumero = prompt("Digite o número da conta:");
      console.log(banco.numeroConta(contaNumero));
      break;
    case "0":
      console.log("Saindo...");
      return;
    default:
      console.log("Opção inválida.");
  }

  operacao();
}

operacao();
