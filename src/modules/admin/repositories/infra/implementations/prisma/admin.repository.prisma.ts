import { prismaClient } from '../../../../../../shared/infra/database/prisma.config';
import { ICreateAdminDTO } from '../../../../dtos/icreate-admin.dtos';
import { Admin } from '../../../../entities/admin.entity';
import { IAdminRepository } from '../../../iadmin.repository';

export class AdminRepository implements IAdminRepository {
  async create({
    name,
    email,
    password,
  }: ICreateAdminDTO): Promise<Admin> {
    const admin = await prismaClient.admin.create({
      data: {
        name,
        email,
        password,
      },
    });

    return admin;
  }

  async findByAdminEmail(email: string): Promise<Admin | undefined> {
    const admin = await prismaClient.admin.findFirst({
      where: {
        email: {
          equals: email,
          mode: 'insensitive',
        },
      },
    });

    return admin || undefined;
  }
}
