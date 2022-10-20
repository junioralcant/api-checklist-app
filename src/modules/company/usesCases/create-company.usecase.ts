import { ICreateCompanyDTO } from '../dtos/icreate-company.dtos';
import { ICompanyRepository } from '../repositories/icompany.repository';

export class CreateCompanyUseCase {
  constructor(private companyRepository: ICompanyRepository) {}

  async execute({ name, cnpj }: ICreateCompanyDTO) {
    const company = await this.companyRepository.create({
      name,
      cnpj,
    });

    return company;
  }
}
