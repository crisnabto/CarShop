import IMotorcycle from '../Interfaces/IMotorcycle';
import Vehicle from './Vehicle';

class Motorcycle extends Vehicle {
  private category: string;
  private engineCapacity: number;

  constructor(motorData: IMotorcycle) {
    super(motorData);
    this.category = motorData.category;
    this.engineCapacity = motorData.engineCapacity;
  }
}

export default Motorcycle;