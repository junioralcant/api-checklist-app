import { ICreateChecklistDTO } from '../../../../dtos/icreate-checklist.dtos';
import { Checklist } from '../../../../entities/checklist.entity';
import { IChecklistRepository } from '../../../ichecklist.repository';

export class ChecklistRepositoryInMemory
  implements IChecklistRepository
{
  checklists: Checklist[] = [];

  async create(data: ICreateChecklistDTO): Promise<Checklist> {
    const checklist = Checklist.create(data);
    this.checklists.push(checklist);
    return checklist;
  }
}
