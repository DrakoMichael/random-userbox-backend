import express, { Express, Response, Request } from "express";
import http, { Server } from "http";
import "dotenv/config";
import gracefulShutdown from "http-graceful-shutdown";
import RouteMain from "./app/routes/routes.main";
import RouteUsers from "./app/routes/routes.users";

export class App {
  /*
   * @descricao app é a instância do express
   * @observação o server é a instância do http
   */
  private app: Express;
  private server: Server;
  private version: string;
  private env: string;
  private port: number;
  //private pathEntitiesDir: string;
  //private pathMigrationDir: string;

  constructor() {
    this.app = express();
    this.server = http.createServer(this.app);
    this.version = "/api/v1";
    //this.pathEntitiesDir = "src/models/*.ts";
    //this.pathMigrationDir = "src/database/migrations";
    this.env = process.env.NODE_ENV as string;
    this.port = +(process.env.PORT ?? 3000);
  }

  // private connection(): Promise<typeorm.Connection> {
  //   // inicia a instância da conexão com o banco usando TypeORM
  // }

  private async middleware(): Promise<void> {
    /*
     * @descricao define os middlewares da aplicação
     */
    this.app.use(express.json());
  }

  private async route(): Promise<void> {
    /*
     * @descricao define as rotas da aplicação
     */
    this.app.use(`${this.version}/main`, RouteMain);
    this.app.use(`${this.version}/users`, RouteUsers);
  }

  private async run(): Promise<void> {
    /**
     * @connection - aguardar a conexão com o banco com TypeORM - não implementado
     */
    // const connection: typeorm.Connection = await this.connection();
    const serverInfo: string = `Server is running on port: ${this.port}`;
    if (this.env != "production") {
      this.server.listen(this.port, () => console.log(serverInfo));
    } else {
      // graceful-shutdown: intercepta sinais de encerramento (SIGINT/SIGTERM),
      // basicamente co CRTL+C ou encerramento do processo,
      // para de aceitar novas conexões, espera requisições ativas terminarem
      // e executa rotinas de limpeza (ex: fechar DB, filas, etc.) antes de
      // finalizar o processo do Node de forma segura.
      gracefulShutdown(
        this.server.listen(this.port, () => console.log(serverInfo)),
        {
          development: false,
          forceExit: true,
          timeout: 60000,
          onShutdown: async function (): Promise<void> {
            //await connection.close();
            console.log("Server gracefully shutdown");
          },
        }
      );
    }
  }

  public async main(): Promise<void> {
    await this.middleware();
    // await this.config()
    await this.route();
    // await this.globalRoute() - deletado - opcional
    await this.run();
  }

  // se quiser retornar o app para testes
  // public async mainTest(): Promise<Express> {
  //   // await this.middleware()
  //   // await this.config()
  //   // await this.route()
  //   // return this.app
  // }
}

/**
 * @descricao Método auto-executável para iniciar a aplicação
 * @observação esse método sera executado quando chamado app.ts/js
 * só executa se o ambiente for diferente de teste - definido no .env
 */

(async function () {
  if (process.env.NODE_ENV != "test") await new App().main();
})();
