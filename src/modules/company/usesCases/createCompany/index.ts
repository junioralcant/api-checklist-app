import { CompanyRepository } from '../../repositories/infra/implementations/prisma/company.repository.prisma';
import { CreateCompanyController } from './create-company.controller';

const companyRepository = new CompanyRepository();
const createCompanyController = new CreateCompanyController(
  companyRepository
);

export { createCompanyController };
