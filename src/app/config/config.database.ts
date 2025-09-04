import "dotenv/config";
import path from "path";

const pathEntitiesDir = !["production", "staging"].includes(
  process.env.NODE_ENV as string
)
  ? "src/models/*.ts"
  : "dist/models/*.js";
const pathMigrationDir = !["production", "staging"].includes(
  process.env.NODE_ENV as string
)
  ? "src/database/migrations"
  : "dist/database/migrations";

const entitiesDir: string = path.resolve(process.cwd(), pathEntitiesDir);
const migrationsDir: string = path.resolve(process.cwd(), pathMigrationDir);

const TypeormConfig = {
  type: "sqlite",
  host: process.env.DB_HOST as string,
  port: parseInt(process.env.DB_PORT as string),
  username: process.env.DB_USER as string,
  password: process.env.DB_PASSWORD as string,
  database: process.env.DB_NAME as string,
  entities: [entitiesDir],
  migrations: [migrationsDir],
  synchronize: !["production", "staging"].includes(
    process.env.NODE_ENV as string
  )
    ? true
    : false,
  logger: !["production", "staging"].includes(process.env.NODE_ENV as string)
    ? "advanced-console"
    : undefined,
  logging: !["production", "staging"].includes(process.env.NODE_ENV as string)
    ? true
    : false,
  cli: {
    entitiesDir: entitiesDir,
    migrationsDir: migrationsDir,
  },
};

export default TypeormConfig;
