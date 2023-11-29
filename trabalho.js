class Computer {
  constructor(ram, hdd, cpu) {
    this.ram = ram;
    this.hdd = hdd;
    this.cpu = cpu;
  }

  getRAM() {
    return this.ram;
  }

  getHDD() {
    return this.hdd;
  }

  getCPU() {
    return this.cpu;
  }

  getType() {
    return "Computer";
  }

  toString() {
    return `Type: ${this.getType()}, RAM: ${this.getRAM()}GB, HDD: ${this.getHDD()}GB, CPU: ${this.getCPU()}GHz`;
  }
}

class ComputerFactory {
  static createComputer(type, ram, hdd, cpu) {
    if (type.toLowerCase() === "pc") {
      return new PC(ram, hdd, cpu);
    } else if (type.toLowerCase() === "server") {
      return new Server(ram, hdd, cpu);
    } else {
      throw new Error("Invalid computer type!");
    }
  }
}

class PC extends Computer {
  constructor(ram, hdd, cpu) {
    super(ram, hdd, cpu);
  }

  getType() {
    return "PC";
  }
}

class Server extends Computer {
  constructor(ram, hdd, cpu) {
    super(ram, hdd, cpu);
  }

  getType() {
    return "Server";
  }
}

const pc = ComputerFactory.createComputer("pc", "8", "500", "2.4");
const server = ComputerFactory.createComputer("server", "16", "1000", "3.2");

console.log(pc.toString());
console.log(server.toString());
