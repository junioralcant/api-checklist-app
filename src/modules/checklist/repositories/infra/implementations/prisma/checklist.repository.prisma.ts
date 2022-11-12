import { prismaClient } from '../../../../../../shared/infra/database/prisma.config';
import { ICreateChecklistDTO } from '../../../../dtos/icreate-checklist.dtos';
import { IChecklistRepository } from '../../../ichecklist.repository';
import { Checklist } from '../../../../entities/checklist.entity';

export class ChecklistRepository implements IChecklistRepository {
  async create({
    name,
    user_id,
  }: ICreateChecklistDTO): Promise<Checklist> {
    const checklist = await prismaClient.checklist.create({
      data: {
        name,
        user_id,
      },
    });

    return checklist;
  }
}
