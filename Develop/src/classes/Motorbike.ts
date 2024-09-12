import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';

class Motorbike extends Vehicle {
  constructor(
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    wheels: Wheel[]
  ) {
    super();

    if (wheels.length !== 2) {
      throw new Error("A motorbike must have 2 wheels.");
    }
  }

  wheelie() {
    console.log(`Motorbike ${this.make} ${this.model} is doing a wheelie!`);
  }

  printDetails() {
    super.printDetails();
    console.log("Wheels:", this.wheels);
  }
}

export default Motorbike;