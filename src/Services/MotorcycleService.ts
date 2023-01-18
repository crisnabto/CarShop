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
}

export default MotorcycleService;
