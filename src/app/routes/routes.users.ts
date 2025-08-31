import { Router } from "express";
import { UserModel } from "../models/user_model";
import User from "../interfaces/interface.user";

export class RouteUsers implements User {
  private router: Router;
  id: string;
  name: string;
  email: string;
  age: number;

  constructor() {
    this.router = Router() as Router;
    this.id = "";
    this.name = "";
    this.email = "";
    this.age = 0;
  }

  main(): Router {
    this.router.get("/", (_req, res) => {
      const user: User = new UserModel({
        id: "1",
        name: "John Doe",
        email: "john@example.com",
        age: 30,
      });
      res.send(user);
    });

    return this.router;
  }
}

export default new RouteUsers().main();
