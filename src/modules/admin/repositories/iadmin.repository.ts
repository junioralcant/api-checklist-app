import { Admin } from '../entities/admin.entity';
import { ICreateAdminDTO } from '../dtos/icreate-admin.dtos';

export interface IAdminRepository {
  create(data: ICreateAdminDTO): Promise<Admin>;

  findByAdminEmail(email: string): Promise<Admin | undefined>;
}
