import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import CreateMotorODM from '../Models/CreateMotorODM';

class MotorcycleService {
  private createMotorcycleDomain(motorData: IMotorcycle | null): Motorcycle | null {
    if (motorData) {
      return new Motorcycle(motorData);
    }
    return null;
  }

  public async addNewMotorcycle(motorData: IMotorcycle) {
    // Criar instância da Model de Payment usando Mongoose
    const motorcycleODM = new CreateMotorODM();
    // Inserir os dados no banco
    const newMotorcycle = await motorcycleODM.create(motorData);
    // Retornar os dados com o id
    return this.createMotorcycleDomain(newMotorcycle);
  }

  public async getAllMotorcycles() {
    const motorcycleODM = new CreateMotorODM();
    const allMotorcycles = await motorcycleODM.find();
    const allMotorcyclesDomains = allMotorcycles.map((car) => this.createMotorcycleDomain(car));
    return allMotorcyclesDomains;
  }

  public async findMotorcycleById(id: string) {
    const motorcycleODM = new CreateMotorODM();
    const getMotorcycleById = await motorcycleODM.findById(id);
    return this.createMotorcycleDomain(getMotorcycleById);
  }

  public async updateById(id: string, motorData: IMotorcycle) {
    const motorcycleODM = new CreateMotorODM();
    const updateMotorcycleById = await motorcycleODM.update(id, motorData);
    return this.createMotorcycleDomain(updateMotorcycleById);
  }
}

export default MotorcycleService;
