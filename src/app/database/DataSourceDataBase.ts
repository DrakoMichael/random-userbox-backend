import { DataSource } from "typeorm";

export class DataSourceDataBase {
  private datasource: DataSource;

  constructor() {
    this.datasource = new DataSource({
      type: "sqlite",
      database: "./src/app/database/database.sqlite",
    });
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
