import { Request, Response } from 'express';
import { IChecklistRepository } from '../../repositories/ichecklist.repository';
import { CreateChecklistUseCase } from './create-checklist.usecase';

export class CreateChecklistController {
  constructor(private checklistRepository: IChecklistRepository) {}

  async handle(request: Request, response: Response) {
    try {
      const { name, user_id } = request.body;

      const createChecklistUseCase = new CreateChecklistUseCase(
        this.checklistRepository
      );

      const checklist = await createChecklistUseCase.execute({
        name,
        user_id,
      });

      return response.json(checklist);
    } catch (error: any) {
      return response.status(error.statusCode).json(error.message);
    }
  }
}
