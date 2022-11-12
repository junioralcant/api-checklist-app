import { randomUUID } from 'crypto';

interface ICheckListProps {
  name: string;
  user_id: string;
}

export class Checklist {
  id: string;
  name: string;
  user_id: string;

  private constructor(props: ICheckListProps) {
    this.name = props.name;
    this.user_id = props.user_id;
    this.id = randomUUID();
  }

  static create(props: ICheckListProps) {
    const checklist = new Checklist(props);

    return checklist;
  }
}
