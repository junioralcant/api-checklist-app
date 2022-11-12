import { sign } from 'jsonwebtoken';
import { IPasswordCrypto } from '../../../../shared/infra/crypto/ipassword.crypto';
import { prismaClient } from '../../../../shared/infra/database/prisma.config';
import { CustomError } from '../../../../shared/infra/error/custom.error';

interface IAuthenicateUser {
  email: string;
  password: string;
}

export class AuthenticateUserUsecase {
  constructor(private passwordCrypto: IPasswordCrypto) {}

  async execute({ email, password }: IAuthenicateUser) {
    const user = await prismaClient.user.findFirst({
      where: {
        email: {
          equals: email,
          mode: 'insensitive',
        },
      },
    });

    if (!user) {
      throw new CustomError('E-mail or password invalid!', 401);
    }

    const passwordMatch = await this.passwordCrypto.compare(
      password,
      user.password
    );

    if (!passwordMatch) {
      throw new CustomError('E-mail or password invalid!', 401);
    }

    const userId = user.id;

    const token = sign(
      { email, userId },
      'bc7177981f37d2e86e6f23d1a82bf437',
      {
        subject: userId,
        expiresIn: '7d',
      }
    );

    return { token };
  }
}
