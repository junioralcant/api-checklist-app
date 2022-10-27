import { ImageRepositoryInMemory } from '../../repositories/infra/implementations/in-memory/image.repository.memory';
import { CreateImageUseCase } from './create-image.usecase';

let imageRepositoryInMemory: ImageRepositoryInMemory;
let createImageUseCase: CreateImageUseCase;

describe('Create image', () => {
  beforeEach(() => {
    imageRepositoryInMemory = new ImageRepositoryInMemory();
    createImageUseCase = new CreateImageUseCase(
      imageRepositoryInMemory
    );
  });

  it('should be able create new image', async () => {
    const image = {
      name: 'image-b5e1b07d-b744-406a-b231-7433265c1c47.jpg',
      size: 45821,
      key: '7eaa672b456ba9801ec5a2283f466a1e-image-b5e1b07d-b744-406a-b231-7433265c1c47.jpg',
      url: 'https://toligado.s3.amazonaws.com/7eaa672b456ba9801ec5a2283f466a1e-image-b5e1b07d-b744-406a-b231-7433265c1c47.jpg',
    };

    const imageCreated = await createImageUseCase.execute(image);

    expect(imageCreated).toHaveProperty('id');
  });
});
