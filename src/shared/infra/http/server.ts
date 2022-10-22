import express, { application } from 'express';
import { companyRouter } from './routes/company.routes';
import { userRouter } from './routes/user.routes';

const app = express();

app.use(express.json());

app.use(companyRouter, userRouter);

app.listen(3333, () => console.log('Server is running'));
