import { Router } from 'express';
import { createUserController } from '../../../../modules/users/useCases/createUser';

const userRouter = Router();

userRouter.post('/user', (request, response) => {
  createUserController.handle(request, response);
});

export { userRouter };
