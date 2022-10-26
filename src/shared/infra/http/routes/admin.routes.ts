import { Router } from 'express';
import { authenticateAdminContoller } from '../../../../modules/account/authenticateAdmin/useCases';
import { createAdminController } from '../../../../modules/admin/useCases/createAdmin';

const adminRouter = Router();

adminRouter.post('/admins', (request, response) => {
  createAdminController.handle(request, response);
});

adminRouter.post('/admins/authenticate', (request, response) => {
  authenticateAdminContoller.handle(request, response);
});

export { adminRouter };
