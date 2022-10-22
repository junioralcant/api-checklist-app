import { randomUUID } from 'crypto';
import { CreateUserUseCase } from './create-user.usecase';
import { UserRepositoryInMemory } from '../../repositories/infra/implementations/in-memory/user.repository.memory';

let createUserUseCase: CreateUserUseCase;
let userRepositoryInMemory: UserRepositoryInMemory;

describe('Create user', () => {
  beforeEach(() => {
    userRepositoryInMemory = new UserRepositoryInMemory();
    createUserUseCase = new CreateUserUseCase(userRepositoryInMemory);
  });

  it('should be able create new user', async () => {
    const user = {
      name: 'John',
      email: 'john@example.com',
      password: '123',
      company_id: randomUUID(),
    };

    const userCreated = await createUserUseCase.execute(user);

    expect(userCreated).toHaveProperty('id');
  });

  it('should not be able create new user without name email and password', async () => {
    expect(async () => {
      const user = {
        name: 'John',
        email: 'john@example.com',
        password: '123',
        company_id: randomUUID(),
      };

      await createUserUseCase.execute(user);
      await createUserUseCase.execute(user);
    }).rejects.toBeInstanceOf(Error);
  });

  it('should not be able create new user with email existing', async () => {
    expect(async () => {
      const user = {
        name: '',
        email: '',
        password: '',
        company_id: randomUUID(),
      };

      await createUserUseCase.execute(user);
    }).rejects.toBeInstanceOf(Error);
  });
});
