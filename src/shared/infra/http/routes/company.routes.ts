import { Router } from 'express';
import { createCompanyController } from '../../../../modules/company/usesCases/createCompany';

const companyRouter = Router();

companyRouter.post('/company', (request, response) => {
  createCompanyController.handle(request, response);
});

export { companyRouter };
