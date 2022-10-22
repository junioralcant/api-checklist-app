import { ICreateUserDTO } from '../dtos/icreate-user.dtos';
import { User } from '../entities/user.entity';

export interface IUserRepository {
  create(data: ICreateUserDTO): Promise<User>;

  findByUserEmail(email: string): Promise<User | undefined>;
}
