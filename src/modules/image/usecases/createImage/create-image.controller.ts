import { Request, Response } from 'express';
import { IImageRepository } from '../../repositories/iimage.repository';
import { CreateImageUseCase } from './create-image.usecase';

export class CreateImageController {
  constructor(private imageRepository: IImageRepository) {}

  async handle(request: Request, response: Response) {
    try {
      const { name, size, key, url } = request.body;

      const createImageUseCase = new CreateImageUseCase(
        this.imageRepository
      );

      const image = await createImageUseCase.execute({
        name,
        size,
        key,
        url,
      });

      return response.json(image);
    } catch (error: any) {
      return response.status(error.statusCode).json(error.message);
    }
  }
}
