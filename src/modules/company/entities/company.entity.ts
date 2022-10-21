import { randomUUID } from 'crypto';

interface ICompanyProps {
  name: string;
  cnpj: string;
}

export class Company {
  id: string;
  name: string;
  cnpj: string;

  private constructor(props: ICompanyProps) {
    this.name = props.name;
    this.cnpj = props.cnpj;
    this.id = randomUUID();
  }

  static create(props: ICompanyProps) {
    const company = new Company(props);
    return company;
  }
}
