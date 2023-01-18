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

  it('Deve lancar um erro ao alterar uma moto que nao existe', async function () {
    const motorDataInput: IMotorcycle = {
      model: 'Honda Cb 600f Hornet',
      year: 2005,
      color: 'Yellow',
      status: true,
      buyValue: 30.000,
      category: 'Street',
      engineCapacity: 600,
    };
    sinon.stub(Model, 'findByIdAndUpdate').resolves({});
    try {
      const service = new MotorcycleService();
      await service.updateById('1111222233330000ffffcccc', motorDataInput);
    } catch (error) {
      expect((error as Error).message).to.be.equal('Motorcycle not found');
    }
  });

  it('Deve listar todos as motos', async function () {
    const output = [
      {
        id: '634852326b35b59438fbea31',
        model: 'Honda Cbr 1000rr',
        year: 2011,
        color: 'Orange',
        status: true,
        buyValue: 59.900,
        category: 'Street',
        engineCapacity: 1000,
      },
    ];
    sinon.stub(Model, 'find').resolves(output);
    const service = new MotorcycleService();
    const result = await service.getAllMotorcycles();

    expect(result).to.be.deep.equal(output);
  });

  it('Deve retornar corretamente a moto ao pesquisar por id', async function () {
    const output: IMotorcycle = {
      id: '634852326b35b59438fbea2f',
      model: 'Honda Cbr 1000rr',
      year: 2011,
      color: 'Orange',
      status: true,
      buyValue: 59.900,
      category: 'Street',
      engineCapacity: 1000,
    };
    sinon.stub(Model, 'findById').resolves(output);

    const service = new MotorcycleService();
    const result = await service.findMotorcycleById('634852326b35b59438fbea2f');

    expect(result).to.be.deep.equal(output);
  });

  afterEach(function () {
    sinon.restore();
  });
});
