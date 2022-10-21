import { ICreateCompanyDTO } from '../../../../dtos/icreate-company.dtos';
import { Company } from '../../../../entities/company.entity';
import { ICompanyRepository } from '../../../icompany.repository';

export class CompanyRepositoryInMemory implements ICompanyRepository {
  companies: Company[] = [];

  async create({ name, cnpj }: ICreateCompanyDTO): Promise<Company> {
    const company = Company.create({ name, cnpj });

    this.companies.push(company);

    return company;
  }

  async findByCompanyCNPJ(
    cnpj: string
  ): Promise<Company | undefined> {
    const company = this.companies.find(
      (company) => company.cnpj === cnpj
    );

    return company;
  }
}
