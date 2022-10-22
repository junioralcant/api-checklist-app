import { ICreateUserDTO } from '../../../../dtos/icreate-user.dtos';
import { User } from '../../../../entities/user.entity';
import { IUserRepository } from '../../../iuser.repository';

export class UserRepositoryInMemory implements IUserRepository {
  users: User[] = [];

  async create(data: ICreateUserDTO): Promise<User> {
    const user = User.create(data);
    this.users.push(user);
    return user;
  }

  async findByUserEmail(email: string): Promise<User | undefined> {
    const user = this.users.find((user) => user.email === email);
    return user;
  }
}
