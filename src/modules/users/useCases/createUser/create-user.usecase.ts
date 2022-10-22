import { ParameterRequiredError } from '../../../../shared/infra/error/parameter-requered.error';
import { ICreateUserDTO } from '../../dtos/icreate-user.dtos';
import { IUserRepository } from '../../repositories/iuser.repository';

export class CreateUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async handle({
    name,
    email,
    password,
    company_id,
    isAdmin,
  }: ICreateUserDTO) {
    if (!name || !email || !password) {
      throw new ParameterRequiredError(
        'Name/email/password is required',
        422
      );
    }

    const user = await this.userRepository.create({
      name,
      email,
      password,
      company_id,
      isAdmin,
    });

    return user;
  }
}
