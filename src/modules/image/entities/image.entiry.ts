import { randomUUID } from 'crypto';

interface IImageProps {
  name: string;
  size: number;
  key: string;
  url: string;
}

export class Image {
  id: string;
  name: string;
  size: number;
  key: string;
  url: string;

  private constructor(props: IImageProps) {
    this.name = props.name;
    this.size = props.size;
    this.key = props.key;
    this.url = props.url;
    this.id = randomUUID();
  }

  static create(props: IImageProps) {
    const image = new Image(props);
    return image;
  }
}
