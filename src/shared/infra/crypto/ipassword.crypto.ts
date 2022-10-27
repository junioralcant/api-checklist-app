export interface IPasswordCrypto {
  hash(password: string): Promise<string>;

  compare(
    password: string,
    passwordEncrypt: string
  ): Promise<boolean>;
}
