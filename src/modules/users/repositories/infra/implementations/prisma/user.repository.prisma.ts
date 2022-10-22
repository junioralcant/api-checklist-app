import { prismaClient } from '../../../../../../shared/infra/database/prisma.config';
import { ICreateUserDTO } from '../../../../dtos/icreate-user.dtos';
import { User } from '../../../../entities/user.entity';
import { IUserRepository } from '../../../iuser.repository';

export class UserRepository implements IUserRepository {
  async create({
    name,
    email,
    password,
    company_id,
    isAdmin,
  }: ICreateUserDTO): Promise<User> {
    const user = await prismaClient.user.create({
      data: {
        name,
        email,
        password,
        company_id,
        isAdmin,
      },
    });

    return user;
  }

  async findByUserEmail(email: string): Promise<User | undefined> {
    const user = await prismaClient.user.findFirst({
      where: {
        email: {
          equals: email,
          mode: 'insensitive',
        },
      },
    });

    return user || undefined;
  }
}
