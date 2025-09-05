import { DataSource } from "typeorm";
import TypeormConfig from "../config/config.database";

export class DataSourceDataBase {
  private datasource: DataSource;
  private TypeormConfig = TypeormConfig;

  constructor() {
    this.datasource = new DataSource(this.TypeormConfig as any);
  }

  private databaseConnect = async () => {
    try {
      await this.datasource.initialize();
      console.log("Data Source has been initialized!");
    } catch (err) {
      console.error("Error during Data Source initialization: {err omitted}");
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
