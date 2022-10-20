import { CompanyRepositoryInMemory } from '../repositories/infra/implementations/in-memory/company.repository.memory';
import { CreateCompanyUseCase } from './create-company.usecase';

let createCompanyUseCase: CreateCompanyUseCase;
let companyRepositoryInMemory: CompanyRepositoryInMemory;

describe('Create company', () => {
  beforeEach(() => {
    companyRepositoryInMemory = new CompanyRepositoryInMemory();
    createCompanyUseCase = new CreateCompanyUseCase(
      companyRepositoryInMemory
    );
  });

  it('should be create new company', async () => {
    const company = {
      name: 'JJJR',
      cnpj: '123',
    };

    const companyCreated = await createCompanyUseCase.execute(
      company
    );

    expect(companyCreated).toHaveProperty('id');
  });
});
