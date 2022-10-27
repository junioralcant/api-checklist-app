import { Request, Response } from 'express';
import { IPasswordCrypto } from '../../../../shared/infra/crypto/ipassword.crypto';
import { AuthenticateUserUsecase } from './authenticate-user.usecase';

export class AuthenticateUserController {
  constructor(private passwordCrypto: IPasswordCrypto) {}
  async handle(request: Request, response: Response) {
    try {
      const { email, password } = request.body;

      const authenticateUserUseCase = new AuthenticateUserUsecase(
        this.passwordCrypto
      );

      const token = await authenticateUserUseCase.execute({
        email,
        password,
      });

      return response.json(token);
    } catch (error: any) {
      return response.status(error.statusCode).json(error.message);
    }
  }
}
