import { ICreateCompanyDTO } from '../dtos/icreate-company.dtos';
import { randomUUID } from 'crypto';

export class Company {
  id: string;
  name: string;
  cnpj: string;

  private constructor(props: ICreateCompanyDTO) {
    this.name = props.name;
    this.cnpj = props.cnpj;
    this.id = randomUUID();
  }

  static create(props: ICreateCompanyDTO) {
    const company = new Company(props);
    return company;
  }
}
