import bcrypt from 'bcryptjs';
import { IPasswordCrypto } from './ipassword.crypto';

export class PasswordBcrypt implements IPasswordCrypto {
  hash(password: string): Promise<string> {
    return bcrypt.hash(password, 10);
  }

  compare(
    password: string,
    passwordEncrypt: string
  ): Promise<boolean> {
    return bcrypt.compare(password, passwordEncrypt);
  }
}
