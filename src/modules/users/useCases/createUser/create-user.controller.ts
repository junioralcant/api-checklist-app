import { Request, Response } from 'express';
import { IUserRepository } from '../../repositories/iuser.repository';
import { CreateUserUseCase } from './create-user.usecase';

export class CreateUserController {
  constructor(private userRepository: IUserRepository) {}

  async handle(request: Request, response: Response) {
    try {
      const { name, email, password, company_id, isAdmin } =
        request.body;

      const createUserUseCase = new CreateUserUseCase(
        this.userRepository
      );

      const user = await createUserUseCase.execute({
        name,
        email,
        password,
        company_id,
        isAdmin,
      });

      return response.json(user);
    } catch (error: any) {
      return response.status(error.statusCode).json(error.message);
    }
  }
}
