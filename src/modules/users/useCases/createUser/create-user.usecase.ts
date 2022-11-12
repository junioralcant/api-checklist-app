import { IPasswordCrypto } from '../../../../shared/infra/crypto/ipassword.crypto';
import { CustomError } from '../../../../shared/infra/error/custom.error';
import { ParameterRequiredError } from '../../../../shared/infra/error/parameter-requered.error';
import { ICreateUserDTO } from '../../dtos/icreate-user.dtos';
import { IUserRepository } from '../../repositories/iuser.repository';

export class CreateUserUseCase {
  constructor(
    private userRepository: IUserRepository,
    private passwordCrypto: IPasswordCrypto
  ) {}

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
      throw new CustomError(
        'User already exists',
        400,
        'USER_EXISTS_ERROR'
      );
    }

    const hashPassword = await this.passwordCrypto.hash(password);

    const user = await this.userRepository.create({
      name,
      email,
      password: hashPassword,
      company_id,
      isAdmin,
    });

    return user;
  }
}
