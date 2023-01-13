import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import ICar from '../../../src/Interfaces/ICar';
import Car from '../../../src/Domains/Car';
import CarService from '../../../src/Services/CarService';

describe('Testes camada service', function () {
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

  afterEach(function () {
    sinon.restore();
  }); 
});
