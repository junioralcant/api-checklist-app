import { PasswordBcrypt } from '../../../../shared/infra/crypto/password.bcrypt';
import { UserRepository } from '../../repositories/infra/implementations/prisma/user.repository.prisma';
import { CreateUserController } from './create-user.controller';

const userRepository = new UserRepository();
const passwordBcrypt = new PasswordBcrypt();
const createUserController = new CreateUserController(
  userRepository,
  passwordBcrypt
);

export { createUserController };
