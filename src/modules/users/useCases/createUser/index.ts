import { UserRepository } from '../../repositories/infra/implementations/prisma/user.repository.prisma';
import { CreateUserController } from './create-user.controller';

const userRepository = new UserRepository();
const createUserController = new CreateUserController(userRepository);

export { createUserController };
