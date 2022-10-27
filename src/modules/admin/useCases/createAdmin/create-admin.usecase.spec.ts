import { AdminRepositoryInMemory } from '../../repositories/infra/implementations/in-memory/admin.repository.memory';
import { CreateAdminUseCase } from './create-admin.usecase';

let adminRepositoryInMemory: AdminRepositoryInMemory;
let createAdminUseCase: CreateAdminUseCase;

describe('Create admin', () => {
  beforeEach(() => {
    adminRepositoryInMemory = new AdminRepositoryInMemory();
    createAdminUseCase = new CreateAdminUseCase(
      adminRepositoryInMemory
    );
  });

  it('should be able to create a new admin', async () => {
    const admin = {
      name: 'John',
      email: 'john@example.com',
      password: '1234',
    };

    const adminCreated = await createAdminUseCase.execute(admin);

    expect(adminCreated).toHaveProperty('id');
  });

  it('should not be able to create a new admin with email existing', async () => {
    await expect(async () => {
      const admin = {
        name: 'John',
        email: 'john@example.com',
        password: '1234',
      };

      await createAdminUseCase.execute(admin);

      await createAdminUseCase.execute(admin);
    }).rejects.toBeInstanceOf(Error);
  });

  it('should not be able to create a new admin without name email and password', async () => {
    await expect(async () => {
      const admin = {
        name: '',
        email: 'john@example.com',
        password: '1234',
      };

      await createAdminUseCase.execute(admin);
    }).rejects.toBeInstanceOf(Error);
  });
});
