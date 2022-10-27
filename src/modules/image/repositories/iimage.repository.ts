import { ICreateImageDTO } from '../dtos/icreate-image.dtos';
import { Image } from '../entities/image.entiry';

export interface IImageRepository {
  create(data: ICreateImageDTO): Promise<Image>;
}
