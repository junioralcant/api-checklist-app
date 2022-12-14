import express from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from '../../../../swagger.json';
import { companyRouter } from './routes/company.routes';
import { userRouter } from './routes/user.routes';
import { redoclyRouter } from './routes/redocly.routes';
import { adminRouter } from './routes/admin.routes';
import { checklistRouter } from './routes/checklist.routes';

const app = express();

app.use(express.json());

app.use(
  '/api-docs',
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument)
);

app.use(
  companyRouter,
  userRouter,
  redoclyRouter,
  adminRouter,
  checklistRouter
);

app.listen(3333, () => console.log('Server is running'));
