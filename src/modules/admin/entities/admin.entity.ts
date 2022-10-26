import { randomUUID } from 'crypto';

interface IAdminProps {
  name: string;
  email: string;
  password: string;
}

export class Admin {
  id: string;
  name: string;
  email: string;
  password: string;

  private constructor(props: IAdminProps) {
    this.name = props.name;
    this.email = props.email;
    this.password = props.password;
    this.id = randomUUID();
  }

  static create(props: IAdminProps) {
    const admin = new Admin(props);
    return admin;
  }
}
