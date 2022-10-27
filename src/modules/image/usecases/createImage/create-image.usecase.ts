import { ICreateImageDTO } from '../../dtos/icreate-image.dtos';
import { IImageRepository } from '../../repositories/iimage.repository';

export class CreateImageUseCase {
  constructor(private imageRepository: IImageRepository) {}

  async execute({ name, size, key, url }: ICreateImageDTO) {
    const image = await this.imageRepository.create({
      name,
      size,
      key,
      url,
    });

    return image;
  }
}
