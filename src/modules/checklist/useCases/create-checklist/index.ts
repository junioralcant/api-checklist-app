import { ChecklistRepository } from '../../repositories/infra/implementations/prisma/checklist.repository.prisma';
import { CreateChecklistController } from './create-checklist.controller';

const checklistRepository = new ChecklistRepository();
const createChecklistController = new CreateChecklistController(
  checklistRepository
);

export { createChecklistController };
