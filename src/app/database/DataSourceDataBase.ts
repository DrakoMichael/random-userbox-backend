import { DataSource } from "typeorm";
import TypeormConfig from "../config/config.database";
import chalk from "chalk";
import logSymbols from "log-symbols";

export class DataSourceDataBase {
  private datasource: DataSource;
  private TypeormConfig = TypeormConfig;

  constructor() {
    this.datasource = new DataSource(this.TypeormConfig as any);
  }

  private databaseConnect = async () => {
    try {
      await this.datasource.initialize();
      chalk.bgBlack.yellow(
        logSymbols.success,
        console.log(
          chalk.bgBlack.yellow(
            logSymbols.success,
            "Data Source has been initialized!"
          )
        )
      );
    } catch (err) {
      console.error(
        chalk.bgBlack.red(
          logSymbols.error,
          "Error during Data Source initialization: {err omitted}"
        )
      );
    }
  };

  public async getDataSource(): Promise<DataSource> {
    if (this.datasource.isInitialized) {
      return this.datasource;
    } else {
      this.databaseConnect();
      return this.datasource;
    }
  }
}
