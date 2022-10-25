import { Router } from 'express';
import { authenticateUserController } from '../../../../modules/account/authenticateUser/useCases';
import { createUserController } from '../../../../modules/users/useCases/createUser';

const userRouter = Router();

userRouter.post('/user', (request, response) => {
  createUserController.handle(request, response);
});

userRouter.post('/user/authenticate', (request, response) => {
  authenticateUserController.handle(request, response);
});

export { userRouter };
