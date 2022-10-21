import { ParameterRequiredError } from '../../../../shared/infra/error/parameter-requered.error';
import { ICreateCompanyDTO } from '../../dtos/icreate-company.dtos';
import { ICompanyRepository } from '../../repositories/icompany.repository';

export class CreateCompanyUseCase {
  constructor(private companyRepository: ICompanyRepository) {}

  async execute({ name, cnpj }: ICreateCompanyDTO) {
    if (!name || !cnpj) {
      throw new ParameterRequiredError('Name/CNPJ is required', 422);
    }

    const companyExisting =
      await this.companyRepository.findByCompanyCNPJ(cnpj);

    if (companyExisting) {
      throw new ParameterRequiredError('CNPJ existing.', 409);
    }

    const company = await this.companyRepository.create({
      name,
      cnpj,
    });

    return company;
  }
}
