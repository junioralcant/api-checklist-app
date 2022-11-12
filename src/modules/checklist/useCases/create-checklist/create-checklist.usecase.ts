import { ICreateChecklistDTO } from '../../dtos/icreate-checklist.dtos';
import { IChecklistRepository } from '../../repositories/ichecklist.repository';

export class CreateChecklistUseCase {
  constructor(private checklistRepository: IChecklistRepository) {}

  async execute({ name, user_id }: ICreateChecklistDTO) {
    const checklist = await this.checklistRepository.create({
      name,
      user_id,
    });

    return checklist;
  }
}
