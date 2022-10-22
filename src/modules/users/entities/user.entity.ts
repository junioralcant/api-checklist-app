import { randomUUID } from 'crypto';

interface IUserProps {
  name: string;
  email: string;
  password: string;
  company_id: string;
  isAdmin?: boolean;
}

export class User {
  id: string;
  name: string;
  email: string;
  password: string;
  company_id: string;
  isAdmin? = false;

  private constructor(props: IUserProps) {
    this.name = props.name;
    this.email = props.email;
    this.password = props.password;
    this.company_id = props.company_id;
    this.id = randomUUID();

    if (props.isAdmin) this.isAdmin = props.isAdmin;
  }

  static create(props: IUserProps) {
    const user = new User(props);
    return user;
  }
}
