import { prismaClient } from '../../../../../../shared/infra/database/prisma.config';
import { ICreateCompanyDTO } from '../../../../dtos/icreate-company.dtos';
import { Company } from '../../../../entities/company.entity';
import { ICompanyRepository } from '../../../icompany.repository';

export class CompanyRepository implements ICompanyRepository {
  async create({ name, cnpj }: ICreateCompanyDTO): Promise<Company> {
    const company = await prismaClient.company.create({
      data: {
        name,
        cnpj,
      },
    });

    return company;
  }

  async findByCompanyCNPJ(
    cnpj: string
  ): Promise<Company | undefined> {
    const companyExists = await prismaClient.company.findFirst({
      where: {
        cnpj: {
          equals: cnpj,
          mode: 'insensitive',
        },
      },
    });

    return companyExists || undefined;
  }
}
