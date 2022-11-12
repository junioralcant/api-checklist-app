import { hash } from 'bcryptjs';
import { CustomError } from '../../../../shared/infra/error/custom.error';
import { ParameterRequiredError } from '../../../../shared/infra/error/parameter-requered.error';
import { ICreateAdminDTO } from '../../dtos/icreate-admin.dtos';
import { IAdminRepository } from '../../repositories/iadmin.repository';

export class CreateAdminUseCase {
  constructor(private adminRepository: IAdminRepository) {}

  async execute({ name, email, password }: ICreateAdminDTO) {
    if (!name || !email || !password) {
      throw new Error('Name/e-mail/password is required');
    }

    const adminExists = await this.adminRepository.findByAdminEmail(
      email
    );

    if (adminExists) {
      throw new CustomError(
        'User already exists',
        400,
        'USER_EXISTS_ERROR'
      );
    }

    const hashPassword = await hash(password, 10);

    const admin = await this.adminRepository.create({
      name,
      email,
      password: hashPassword,
    });

    return admin;
  }
}
