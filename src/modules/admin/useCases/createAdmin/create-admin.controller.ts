import { Request, Response } from 'express';
import { IAdminRepository } from '../../repositories/iadmin.repository';
import { CreateAdminUseCase } from './create-admin.usecase';

export class CreateAdminController {
  constructor(private adminRepository: IAdminRepository) {}

  async handle(request: Request, response: Response) {
    try {
      const { name, email, password } = request.body;

      const createAdminUseCase = new CreateAdminUseCase(
        this.adminRepository
      );

      const admin = await createAdminUseCase.execute({
        name,
        email,
        password,
      });

      return response.json(admin);
    } catch (error: any) {
      return response.status(error.statusCode).json(error.message);
    }
  }
}
