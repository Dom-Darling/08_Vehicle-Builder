import Vehicle from './Vehicle.js';
import Motorbike from './Motorbike.js';
import Car from './Car.js';
import Wheel from './Wheel.js';
import AbleToTow from '../interfaces/AbleToTow.js';

class Truck extends Vehicle implements AbleToTow {
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  wheels: Wheel[];
  towingCapacity: number;

  constructor(
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    towingCapacity: number,
    wheels?: Wheel[]
  ) {
    super();
    this.vin = vin;
this.color = color;
this.make = make;
this.model = model;
this.year = year;
this.weight = weight;
this.topSpeed = topSpeed;
    this.towingCapacity = towingCapacity;

    if (!wheels || wheels.length !== 4) {
      this.wheels = [
        new Wheel(),
        new Wheel(),
        new Wheel(),
        new Wheel()
      ];
    } else {
      this.wheels = wheels;
    }
  }

  tow(vehicle: Truck | Motorbike | Car): void {
    if (vehicle.weight <= this.towingCapacity) {
      console.log(`Towing ${vehicle.make} ${vehicle.model}`);
    } else {
      console.log(`Vehicle is too heavy to be towed.`);
    }
  }

  override printDetails(): void {
    super.printDetails();
    console.log(`Towing Capacity: ${this.towingCapacity}`);
    console.log(`Wheels:`);
    for (const wheel of this.wheels) {
      console.log(`  ${wheel} inch wheel`);
    }
  }
}

export default Truck;