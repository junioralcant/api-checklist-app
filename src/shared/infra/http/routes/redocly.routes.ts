import { Router } from 'express';

const redoclyRouter = Router();

redoclyRouter.get('/swagger', (request, response) => {
  return response.sendFile(process.cwd() + '/swagger.json');
});

redoclyRouter.get('/docs', (request, response) => {
  return response.sendFile(process.cwd() + '/index.html');
});

export { redoclyRouter };
