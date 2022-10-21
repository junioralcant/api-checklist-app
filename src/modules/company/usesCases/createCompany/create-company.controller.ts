import { Request, Response } from 'express';
import { CompanyRepository } from '../../repositories/infra/implementations/prisma/company.repository.prisma';
import { CreateCompanyUseCase } from './create-company.usecase';

export class CreateCompanyController {
  constructor(private companyRepositoy: CompanyRepository) {}

  async handle(request: Request, response: Response) {
    const { name, cnpj } = request.body;

    const createCompanyUseCase = new CreateCompanyUseCase(
      this.companyRepositoy
    );

    const company = await createCompanyUseCase.execute({
      name,
      cnpj,
    });

    return response.json(company);
  }
}
