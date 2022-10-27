import { PasswordBcrypt } from '../../../../shared/infra/crypto/password.bcrypt';
import { AuthenticateUserController } from './authenticate-user.controller';

const passwordBcrypt = new PasswordBcrypt();
const authenticateUserController = new AuthenticateUserController(
  passwordBcrypt
);

export { authenticateUserController };
