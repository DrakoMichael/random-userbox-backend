import User from "../interfaces/interface.user";

export class UserModel implements User {
  id!: string;
  name!: string;
  email!: string;
  age!: number;

  constructor(data: User) {
    Object.assign(this, data);
  }

  //corrigir
  static fromAPI(data: any[]): User[] {
    return data.flatMap((item: any) =>
      (item.results || []).map(
        (user: any) =>
          new UserModel({
            id: user.login?.uuid ?? "",
            name: user.name?.first ?? "",
            email: user.email ?? "",
            age: user.dob?.age ?? 0,
          })
      )
    );
  }

  toJSON(): User {
    return { ...this };
  }
}
