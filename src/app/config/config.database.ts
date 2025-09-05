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
  database: "./src/app/database/database.sqlite",
  entities: [entitiesDir],
  migrations: [migrationsDir],
  synchronize: !["production", "staging"].includes(
    process.env.NODE_ENV as string
  )
    ? true
    : false,
  logger: false,
  logging: false,
  cli: {
    entitiesDir: entitiesDir,
    migrationsDir: migrationsDir,
  },
};

export default TypeormConfig;
