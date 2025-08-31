import { Router } from "express";

export class RouteMain {
  private router: Router;

  constructor() {
    this.router = Router() as Router;
  }

  main(): Router {
    this.router.get("/", (_req, res) => {
      res.send("Hello, from main!");
    });

    return this.router;
  }
}

export default new RouteMain().main();
