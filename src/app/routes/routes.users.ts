import { Router, Request, Response } from "express";
import { UserModel } from "../models/user_model";
import User from "../interfaces/interface.user";
import randomFetch from "../public/public.randomFetch";

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
    this.router.get("/", async (_req, res) => {
      const data = await randomFetch.fetchRandomUser();
      res.send(UserModel.fromAPI([data]));
    });

    this.router.get("/:qtd", async (req: Request, res: Response) => {
      if (req.params.qtd) {
        const qtd = Number(req.params.qtd);
        const data = await randomFetch.fetchManyRandomUser(qtd);
        res.send(data);
      } else {
        res.status(400).json({ error: "Bad Request" });
      }
    });

    return this.router;
  }
}

export default new RouteUsers().main();
