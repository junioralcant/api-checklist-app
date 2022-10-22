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
}
