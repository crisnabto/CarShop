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
    const newCar = await carODM.create(carData);
    // Retornar os dados com o id
    return this.createCarDomain(newCar);
  }

  public async getAllCars() {
    const carODM = new CreateCarODM();
    const allCars = await carODM.find();
    const allCarsDomains = allCars.map((car) => this.createCarDomain(car));
    return allCarsDomains;
  }

  public async findCarById(id: string) {
    const carODM = new CreateCarODM();
    const getCarById = await carODM.findById(id);
    return this.createCarDomain(getCarById);
  }

  public async updateById(id: string, carData: ICar) {
    const carODM = new CreateCarODM();
    const updateCarById = await carODM.update(id, carData);
    return this.createCarDomain(updateCarById);
  }
}

export default CarService;