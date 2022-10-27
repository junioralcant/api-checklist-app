import { prismaClient } from '../../../../../../shared/infra/database/prisma.config';
import { ICreateImageDTO } from '../../../../dtos/icreate-image.dtos';
import { Image } from '../../../../entities/image.entiry';
import { IImageRepository } from '../../../iimage.repository';

export class ImageRepository implements IImageRepository {
  async create({
    name,
    size,
    key,
    url,
  }: ICreateImageDTO): Promise<Image> {
    const image = await prismaClient.image.create({
      data: {
        name,
        size,
        key,
        url,
      },
    });

    return image;
  }
}
