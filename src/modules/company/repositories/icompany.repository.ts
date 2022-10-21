import { ICreateCompanyDTO } from '../dtos/icreate-company.dtos';
import { Company } from '../entities/company.entity';

export interface ICompanyRepository {
  create(data: ICreateCompanyDTO): Promise<Company>;

  findByCompanyCNPJ(cnpj: string): Promise<Company | undefined>;
}
