import {
  Model,
  Schema,
  model,
  models,
  isValidObjectId,
} from 'mongoose';

abstract class AbstractODM<T> {
  private _schema: Schema<T>;
  private _model: Model<T>;
  private _modelName: string;

  constructor(schema: Schema<T>, modelName: string) {
    this._modelName = modelName;
    this._schema = schema;
    this._model = models[this._modelName] || model(this._modelName, this._schema);
  }

  public async create(obj: T): Promise<T> {
    return this._model.create({ ...obj });
  }

  public async find(): Promise<T[]> {
    return this._model.find();
  }

  public async findById(id: string): Promise<T | null> {
    if (!isValidObjectId(id)) throw new Error('Invalid mongo id');
    return this._model.findById(id);
  }
}

export default AbstractODM;