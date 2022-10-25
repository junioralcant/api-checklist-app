import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

interface IPayload {
  sub: string;
}

export async function ensureAuthenticateUser(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    return response.status(401).json({
      message: 'Token missing',
    });
  }

  const [, token] = authHeader.split(' ');

  try {
    const { sub } = verify(
      token,
      'bc7177981f37d2e86e6f23d1a82bf437'
    ) as IPayload;

    request.id_user = sub;

    return next();
  } catch (error) {
    return response.status(401).json({
      message: 'Invalid Token!',
    });
  }
}
