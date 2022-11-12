import { ICreateChecklistDTO } from '../dtos/icreate-checklist.dtos';
import { Checklist } from '../entities/checklist.entity';

export interface IChecklistRepository {
  create(data: ICreateChecklistDTO): Promise<Checklist>;
}
