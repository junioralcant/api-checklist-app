import { AdminRepository } from '../../repositories/infra/implementations/prisma/admin.repository.prisma';
import { CreateAdminController } from './create-admin.controller';

const adminRepository = new AdminRepository();
const createAdminController = new CreateAdminController(
  adminRepository
);

export { createAdminController };
