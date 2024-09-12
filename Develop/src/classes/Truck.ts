import Vehicle from './Vehicle.js';
import Motorbike from './Motorbike.js';
import Car from './Car.js';
import Wheel from './Wheel.js';

interface AbleToTow {
  tow(vehicle: Vehicle): void;
}

class Truck extends Vehicle implements AbleToTow {
  bedLength: number;
  fuelTankCapacity: number;

  constructor(
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weightCapacity: number,
    bedLength: number,
    wheels: Wheel[],
    fuelTankCapacity: number
  ) {
    super(vin, color, make, model, year, weightCapacity);

    if (wheels.length !== 4) {
      throw new Error("A truck must have 4 wheels.");
    }

    this.bedLength = bedLength;
    this.fuelTankCapacity = fuelTankCapacity;
  }

  tow(vehicle: Vehicle): void {
    if (vehicle.weight <= this.weightcapacity) {
      console.log(`Towing ${vehicle.make} ${vehicle.model} successfully.`);
    } else {
      console.log(`Unable to tow ${vehicle.make} ${vehicle.model}. Exceeds towing capacity.`);
    }
  }

  printdetails(): void {
    super.printDetails();
    console.log(`Bed Length: ${this.bedLength}`);
    console.log(`Fuel Tank Capacity: ${this.fuelTankCapacity}`);
  }
}

export default Truck;