import { Router } from 'express';
import CarController from '../Controllers/CarController';
import MotorcycleController from '../Controllers/MotorcycleController';

const routes = Router();

routes.post(
  '/cars',
  (req, res, next) => new CarController(req, res, next).addNewCar(),
);
routes.get(
  '/cars/:id',
  (req, res, next) => new CarController(req, res, next).findCarById(),
);
routes.get(
  '/cars',
  (req, res, next) => new CarController(req, res, next).getAllCars(),
);
routes.put(
  '/cars/:id',
  (req, res, next) => new CarController(req, res, next).update(),
);

// ------------------

routes.post(
  '/motorcycles',
  (req, res, next) => new MotorcycleController(req, res, next).addNewMotorcycle(),
);
routes.get(
  '/motorcycles/:id',
  (req, res, next) => new MotorcycleController(req, res, next).findMotorcycleById(),
);
routes.get(
  '/motorcycles',
  (req, res, next) => new MotorcycleController(req, res, next).getAllMotorcycles(),
);
routes.put(
  '/motorcycles/:id',
  (req, res, next) => new MotorcycleController(req, res, next).update(),
);

export default routes;