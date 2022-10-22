import { ParameterRequiredError } from '../../../../shared/infra/error/parameter-requered.error';
import { ICreateUserDTO } from '../../dtos/icreate-user.dtos';
import { IUserRepository } from '../../repositories/iuser.repository';

export class CreateUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute({
    name,
    email,
    password,
    company_id,
    isAdmin,
  }: ICreateUserDTO) {
    if (!name || !email || !password) {
      throw new ParameterRequiredError(
        'Name/email/password is required.',
        422
      );
    }

    const userExits = await this.userRepository.findByUserEmail(
      email
    );

    if (userExits) {
      throw new ParameterRequiredError('E-mail already exits.', 409);
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
