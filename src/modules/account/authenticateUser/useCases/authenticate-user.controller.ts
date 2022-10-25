import { Request, Response } from 'express';
import { AuthenticateUserUsecase } from './authenticate-user.usecase';

export class AuthenticateUserController {
  async handle(request: Request, response: Response) {
    try {
      const { email, password } = request.body;

      const authenticateUserUseCase = new AuthenticateUserUsecase();

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
