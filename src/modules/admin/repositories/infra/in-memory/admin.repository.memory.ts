import { ICreateAdminDTO } from '../../../dtos/icreate-admin.dtos';
import { Admin } from '../../../entities/admin.entity';
import { IAdminRepository } from '../../iadmin.repository';

export class AdminRepositoryInMemory implements IAdminRepository {
  admins: Admin[] = [];

  async create(data: ICreateAdminDTO): Promise<Admin> {
    const admin = Admin.create(data);
    this.admins.push(admin);
    return admin;
  }

  async findByAdminEmail(email: string): Promise<Admin | undefined> {
    const admin = this.admins.find((admin) => admin.email === email);

    return admin;
  }
}
