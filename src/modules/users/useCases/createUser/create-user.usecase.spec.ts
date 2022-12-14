import { randomUUID } from 'crypto';
import { CreateUserUseCase } from './create-user.usecase';
import { UserRepositoryInMemory } from '../../repositories/infra/implementations/in-memory/user.repository.memory';
import { PasswordBcrypt } from '../../../../shared/infra/crypto/password.bcrypt';

let createUserUseCase: CreateUserUseCase;
let passwordBcrypt: PasswordBcrypt;
let userRepositoryInMemory: UserRepositoryInMemory;

describe('Create user', () => {
  beforeEach(() => {
    userRepositoryInMemory = new UserRepositoryInMemory();
    passwordBcrypt = new PasswordBcrypt();
    createUserUseCase = new CreateUserUseCase(
      userRepositoryInMemory,
      passwordBcrypt
    );
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
    await expect(async () => {
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
    await expect(async () => {
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
