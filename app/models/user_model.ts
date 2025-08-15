import User from "../interfaces/user_interface";

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
