import { Router } from 'express';
import { createChecklistController } from '../../../../modules/checklist/useCases/create-checklist';

const checklistRouter = Router();

checklistRouter.post('/checklists', (request, response) => {
  createChecklistController.handle(request, response);
});

export { checklistRouter };
