import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { prismaClient } from '../../../../shared/infra/database/prisma.config';
import { ParameterRequiredError } from '../../../../shared/infra/error/parameter-requered.error';

interface IAuthenicateUser {
  email: string;
  password: string;
}

export class AuthenticateUserUsecase {
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
      throw new ParameterRequiredError(
        'E-mail or password invalid!',
        401
      );
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new ParameterRequiredError(
        'E-mail or password invalid!',
        401
      );
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
