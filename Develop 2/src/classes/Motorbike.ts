import Vehicle from "./Vehicle.js";
import Wheel from "./Wheel.js";

class Motorbike extends Vehicle {
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  wheels: Wheel[];

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
    this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.topSpeed = topSpeed;
    if (!wheels || wheels.length !== 2) {
      this.wheels = [new Wheel(), new Wheel()];
    } else {
      this.wheels = wheels;
    }
  }

  wheelie(): void {
    console.log(`Motorbike ${this.make} ${this.model} is doing a wheelie!`);
  }


  
  thisprintDetails() {
    super.printDetails();
    console.log(`Wheels: ${this.wheels}  Wheels:`); 
    for (const wheel of this.wheels) {
      console.log(`  ${wheel} inch wheel`);
    }
  }
}

export default Motorbike;
