import express from 'express';
import swaggerUI from 'swagger-ui-express';
import * as swaggerDocument from './swagger.json';
import ErrorHandler from './Middlewares/ErrorHandler';
import routes from './Routes/Routes';

const app = express();
app.use(express.json());
app.use(routes);
app.use(ErrorHandler.handle);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

export default app;
