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
