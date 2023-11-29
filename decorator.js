class Sandwich {
  getDescription() {
    return "Meat Sandwich";
  }

  getCost() {
    return 7.49;
  }
}

class GrilledChickenDecorator {
  constructor(sandwich) {
    this.sandwich = sandwich;
  }

  getDescription() {
    return this.sandwich.getDescription() + ", Grilled Chicken";
  }

  getCost() {
    return this.sandwich.getCost() + 4.50;
  }
}

class PepperoniDecorator {
  constructor(sandwich) {
    this.sandwich = sandwich;
  }

  getDescription() {
    return this.sandwich.getDescription() + ", Pepperoni";
  }

  getCost() {
    return this.sandwich.getCost() + 0.99;
  }
}

class ShreddedMozzarellaCheeseDecorator {
  constructor(sandwich) {
    this.sandwich = sandwich;
  }

  getDescription() {
    return this.sandwich.getDescription() + ", Shredded Mozzarella Cheese";
  }

  getCost() {
    return this.sandwich.getCost() + 2.00;
  }
}

const sandwich = new Sandwich();
const decoratedSandwich = new ShreddedMozzarellaCheeseDecorator(new PepperoniDecorator(new GrilledChickenDecorator(sandwich)));

console.log(decoratedSandwich.getDescription() + " costs $" + decoratedSandwich.getCost());
