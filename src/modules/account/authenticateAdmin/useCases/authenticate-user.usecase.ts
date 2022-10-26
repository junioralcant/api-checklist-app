import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { prismaClient } from '../../../../shared/infra/database/prisma.config';
import { ParameterRequiredError } from '../../../../shared/infra/error/parameter-requered.error';

interface IAuthenticateAdmin {
  email: string;
  password: string;
}

export class AuthenticateAdminUseCase {
  async execute({ email, password }: IAuthenticateAdmin) {
    const admin = await prismaClient.admin.findFirst({
      where: {
        email: {
          equals: email,
          mode: 'insensitive',
        },
      },
    });

    if (!admin) {
      throw new ParameterRequiredError(
        'E-mail or password invalid!',
        401
      );
    }

    const passwordMatch = await compare(password, admin.password);

    if (!passwordMatch) {
      throw new ParameterRequiredError(
        'E-mail or password invalid!',
        401
      );
    }

    const adminId = admin.id;

    const token = sign(
      { email, adminId },
      'bc7177981f37d2e86e6f23d1a82bf437',
      {
        subject: adminId,
        expiresIn: '7d',
      }
    );

    return { token };
  }
}
