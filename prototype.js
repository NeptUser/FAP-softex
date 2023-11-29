class Vehicle {
  constructor(model, brand, color, numberOfWheels) {
    this.model = model;
    this.brand = brand;
    this.color = color;
    this.numberOfWheels = numberOfWheels;
  }

  clone() {
    return Object.assign(Object.create(Object.getPrototypeOf(this)), this);
  }

  represent() {
    return `Vehicle: ${this.model}, Brand: ${this.brand}, Color: ${this.color}, Number of Wheels: ${this.numberOfWheels}`;
  }
}

class Car extends Vehicle {
  constructor(model, brand, color, numberOfWheels, numberOfDoors) {
    super(model, brand, color, numberOfWheels);
    this.numberOfDoors = numberOfDoors;
  }

  clone() {
    return Object.assign(Object.create(Object.getPrototypeOf(this)), this);
  }

  represent() {
    return `${super.represent()}, Number of Doors: ${this.numberOfDoors}`;
  }
}

class Motorcycle extends Vehicle {
  constructor(model, brand, color, numberOfWheels, hasElectricStart) {
    super(model, brand, color, numberOfWheels);
    this.hasElectricStart = hasElectricStart;
  }

  clone() {
    return Object.assign(Object.create(Object.getPrototypeOf(this)), this);
  }

  represent() {
    return `${super.represent()}, Has Electric Start: ${this.hasElectricStart}`;
  }
}

class Application {
  static main() {
    const vehicles = [];

    vehicles.push(new Car("Fiesta", "Ford", "Blue", 4, 4).clone());
    vehicles.push(new Car("Gol", "Volkswagen", "Red", 4, 2).clone());
    vehicles.push(new Car("Civic", "Honda", "Silver", 4, 4).clone());
    vehicles.push(new Motorcycle("CBR600RR", "Honda", "Black", 2, true).clone());
    vehicles.push(new Motorcycle("Ninja 300", "Kawasaki", "Green", 2, false).clone());
    vehicles.push(new Motorcycle("MT-07", "Yamaha", "White", 2, true).clone());

    const clones = this.cloneArray(vehicles);

    for (const vehicle of clones) {
      console.log(vehicle.represent());
    }
  }

  static cloneArray(vehicles) {
    return vehicles.map((vehicle) => vehicle.clone());
  }
}

Application.main();
