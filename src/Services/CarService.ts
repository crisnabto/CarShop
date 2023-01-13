import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CreateCarODM from '../Models/CreateCarODM';

class CarService {
  private createCarDomain(carData: ICar | null): Car | null {
    if (carData) {
      return new Car(carData);
    }
    return null;
  }

  public async addNewCar(carData: ICar) {
    // Criar instância da Model de Payment usando Mongoose
    const carODM = new CreateCarODM();
    // Inserir os dados no banco
    const newCar = await carODM.addNewCar(carData);
    // Retornar os dados com o id
    return this.createCarDomain(newCar);
  }
}

export default CarService;