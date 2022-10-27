import { ICreateImageDTO } from '../../../../dtos/icreate-image.dtos';
import { Image } from '../../../../entities/image.entiry';
import { IImageRepository } from '../../../iimage.repository';

export class ImageRepositoryInMemory implements IImageRepository {
  images: Image[] = [];

  async create(data: ICreateImageDTO): Promise<Image> {
    const image = Image.create(data);
    this.images.push(image);
    return image;
  }
}
