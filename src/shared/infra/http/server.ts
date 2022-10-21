import express, { application } from 'express';
import { companyRouter } from './routes/company.routes';

const app = express();

app.use(express.json());

app.use(companyRouter);

app.listen(3333, () => console.log('Server is running'));
