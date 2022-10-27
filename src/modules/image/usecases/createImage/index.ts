import { ImageRepository } from '../../repositories/infra/implementations/prisma/image.repository.prisma';
import { CreateImageController } from './create-image.controller';

const imageRepository = new ImageRepository();
const createImageController = new CreateImageController(
  imageRepository
);

export { createImageController };
