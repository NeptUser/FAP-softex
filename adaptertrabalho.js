class Galinha {
  ciscar() {
    console.log("Ciscando...");
  }

  voarCurtoDistancia() {
    console.log("Voando curta distância...");
  }
}

class Pato {
  grasnar() {
    console.log("Grasnando...");
  }

  voarLongaDistancia() {
    console.log("Voando longa distância...");
  }
}

class AdaptadorPato {
  constructor(pato) {
    this.pato = pato;
  }

  ciscar() {
    this.pato.grasnar();
  }

  voarCurtoDistancia() {
    this.pato.voarLongaDistancia();
  }
}

class AdaptadorPatoDemo {
  static main() {
    const galinha = new Galinha();
    const pato = new Pato();

    console.log("A Galinha faz:");
    galinha.ciscar();
    galinha.voarCurtoDistancia();

    console.log("\nO Pato faz:");
    pato.grasnar();
    pato.voarLongaDistancia();

    console.log("\nAdaptando o Pato para ser usado como Galinha:");
    const adaptadorPato = new AdaptadorPato(pato);
    adaptadorPato.ciscar();
    adaptadorPato.voarCurtoDistancia();
  }
}

AdaptadorPatoDemo.main();
