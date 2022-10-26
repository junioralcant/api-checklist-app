import { Request, Response } from 'express';
import { AuthenticateAdminUseCase } from './authenticate-user.usecase';

export class AuthenticateAdminController {
  async handle(request: Request, response: Response) {
    try {
      const { email, password } = request.body;

      const authenticateAdminUseCase = new AuthenticateAdminUseCase();

      const token = await authenticateAdminUseCase.execute({
        email,
        password,
      });

      return response.json(token);
    } catch (error: any) {
      return response.status(error.statusCode).json(error.message);
    }
  }
}
