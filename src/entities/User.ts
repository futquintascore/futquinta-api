export class User {
  id?: number;
  email: string;
  password: string;
  constructor({ password, email }: User) {
    this.email = email;
    this.password = password;
  }
}
