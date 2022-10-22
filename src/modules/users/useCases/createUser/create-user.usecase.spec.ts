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

    const userCreated = await createUserUseCase.handle(user);

    expect(userCreated).toHaveProperty('id');
  });
});
