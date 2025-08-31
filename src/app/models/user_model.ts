import User from "../interfaces/interface.user";

export class UserModel implements User {
  id!: string;
  name!: string;
  email!: string;
  age!: number;

  constructor(data: User) {
    Object.assign(this, data);
  }

  toJSON(): User {
    return { ...this };
  }
}
