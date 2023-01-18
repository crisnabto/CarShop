import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import ICar from '../../../src/Interfaces/ICar';
import Car from '../../../src/Domains/Car';
import CarService from '../../../src/Services/CarService';

describe('Testes camada service Car', function () {
  it('Deveria cadastrar um carro corretamente', async function () {
    // Arrange
    const carDataInput: ICar = {
      model: 'Marea',
      year: 2002,
      color: 'Black',
      status: true,
      buyValue: 15.990,
      doorsQty: 4,
      seatsQty: 5,
    };
    const carDataOutput: Car = new Car(carDataInput);
    sinon.stub(Model, 'create').resolves(carDataOutput);

    // Act
    const service = new CarService();
    const result = await service.addNewCar(carDataInput);

    // Assert
    expect(result).to.be.deep.equal(carDataOutput);
  });

  it('Deve lancar um erro ao cadastrar carro sem modelo', async function () {
    // Arrange
    const carDataInput: ICar = {
      model: '',
      year: 2002,
      color: 'Black',
      status: true,
      buyValue: 15.990,
      doorsQty: 4,
      seatsQty: 5,
    };
    sinon.stub(Model, 'create').resolves({});

    // Act
    try {
      const service = new CarService();
      await service.addNewCar(carDataInput);
    } catch (error) {
      // Assert
      expect((error as Error).message).to.be.equal('All fields must be complete');
    }
  });

  it('Deve lancar um erro ao alterar um carro que nao existe', async function () {
    const carDataInput: ICar = {
      model: 'Marea',
      year: 2002,
      color: 'Black',
      status: true,
      buyValue: 15.990,
      doorsQty: 4,
      seatsQty: 5,
    };
    sinon.stub(Model, 'findByIdAndUpdate').resolves({});
    try {
      const service = new CarService();
      await service.updateById('1111222233330000ffffcccc', carDataInput);
    } catch (error) {
      expect((error as Error).message).to.be.equal('Car not found');
    }
  });

  it('Deve listar todos os carros', async function () {
    const output = [
      {
        id: '634852326b35b59438fbea2f',
        model: 'Marea',
        year: 2002,
        color: 'Black',
        status: true,
        buyValue: 15.99,
        doorsQty: 4,
        seatsQty: 5,
      },
    ];
    sinon.stub(Model, 'find').resolves(output);
    const service = new CarService();
    const result = await service.getAllCars();

    expect(result).to.be.deep.equal(output);
  });

  it('Deve retornar corretamente o carro ao pesquisar por id', async function () {
    const output: ICar = {
      id: '634852326b35b59438fbea2f',
      model: 'Marea',
      year: 2002,
      color: 'Black',
      status: true,
      buyValue: 15.99,
      doorsQty: 4,
      seatsQty: 5,
    };
    sinon.stub(Model, 'findById').resolves(output);

    const service = new CarService();
    const result = await service.findCarById('634852326b35b59438fbea2f');

    expect(result).to.be.deep.equal(output);
  });

  afterEach(function () {
    sinon.restore();
  });
});
