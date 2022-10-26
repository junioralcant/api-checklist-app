import { Router } from 'express';
import { createAdminController } from '../../../../modules/admin/useCases/createAdmin';

const adminRouter = Router();

adminRouter.post('/admins', (request, response) => {
  createAdminController.handle(request, response);
});

export { adminRouter };
