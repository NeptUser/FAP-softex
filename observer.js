class Observer {
  update(event) {}
}

class Subject {
  constructor() {
    this.observers = [];
  }

  attach(observer) {
    this.observers.push(observer);
  }

  detach(observer) {
    const index = this.observers.indexOf(observer);
    if (index !== -1) {
      this.observers.splice(index, 1);
    }
  }

  notify(event) {
    this.observers.forEach((observer) => {
      observer.update(event);
    });
  }
}

class Editor extends Subject {
  constructor() {
    super();
    this.lines = [];
  }

  insertLine(lineNumber, text) {
    this.lines.splice(lineNumber, 0, text);
    this.notify("lineInserted");
  }

  removeLine(lineNumber) {
    this.lines.splice(lineNumber, 1);
    this.notify("lineRemoved");
  }
}

class TextEditor extends Editor {
  handleEvent(event) {
    if (event === "open") {
      // Lógica para abrir o arquivo
    } else if (event === "save") {
    }
  }
}

// Classe ConsoleUI (Observer)
class ConsoleUI extends Observer {
  constructor(editor) {
    super();
    this.editor = editor;
  }

  update(event) {
    if (event === "lineInserted") {
      console.log("Uma nova linha foi inserida!");
    } else if (event === "lineRemoved") {
      console.log("Uma linha foi removida!");
    }
  }
}

// Função principal
function main() {
  const textEditor = new TextEditor();
  const consoleUI = new ConsoleUI(textEditor);
  textEditor.attach(consoleUI);

  while (true) {
    const userInput = prompt("Digite uma linha de texto (ou 'EOF' para sair):");
    if (userInput === "EOF") {
      break;
    }
    textEditor.insertLine(textEditor.lines.length, userInput);
  }

  textEditor.notify("save");

  textEditor.lines.forEach((line) => {
    console.log(line);
  });
}

main();
