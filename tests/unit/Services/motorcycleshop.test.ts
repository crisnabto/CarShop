import { Model } from 'mongoose';
import { expect } from 'chai';
import sinon from 'sinon';
import Motorcycle from '../../../src/Domains/Motorcycle';
import IMotorcycle from '../../../src/Interfaces/IMotorcycle';
import MotorcycleService from '../../../src/Services/MotorcycleService';

describe('Testes camada Service Motorcycle', function () {
  it('Deve cadastrar uma moto corretamente', async function () {
    const motorDataInput: IMotorcycle = {
      model: 'Honda Cb 600f Hornet',
      year: 2005,
      color: 'Yellow',
      status: true,
      buyValue: 30.000,
      category: 'Street',
      engineCapacity: 600,
    };
    const motorDataOutput: Motorcycle = new Motorcycle(motorDataInput); 
    sinon.stub(Model, 'create').resolves(motorDataOutput);

    const service = new MotorcycleService();
    const result = await service.addNewMotorcycle(motorDataInput);

    expect(result).to.be.deep.equal(motorDataOutput);
  });

  it('Deve lancar um erro ao cadastrar uma moto sem modelo', async function () {
    const motorDataInput: IMotorcycle = {
      model: '',
      year: 2005,
      color: 'Yellow',
      status: true,
      buyValue: 30.000,
      category: 'Street',
      engineCapacity: 600,
    };
    sinon.stub(Model, 'create').resolves({});

    try {
      const service = new MotorcycleService();
      await service.addNewMotorcycle(motorDataInput);
    } catch (error) {
      // Assert
      expect((error as Error).message).to.be.equal('All fields must be complete');
    }
  });

  afterEach(function () {
    sinon.restore();
  });
});
