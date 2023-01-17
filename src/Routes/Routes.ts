import { Router } from 'express';
import CarController from '../Controllers/CarController';

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

export default routes;