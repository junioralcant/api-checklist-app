import express from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from '../../../../swagger.json';
import { companyRouter } from './routes/company.routes';
import { userRouter } from './routes/user.routes';
import { redoclyRouter } from './routes/redocly.routes';

const app = express();

app.use(express.json());

app.use(
  '/api-docs',
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument)
);

app.use(companyRouter, userRouter, redoclyRouter);

app.listen(3333, () => console.log('Server is running'));
