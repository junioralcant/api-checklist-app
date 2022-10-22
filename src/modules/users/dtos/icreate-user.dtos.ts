export interface ICreateUserDTO {
  name: string;
  email: string;
  password: string;
  company_id: string;
  isAdmin?: boolean;
}
