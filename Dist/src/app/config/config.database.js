"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const path_1 = __importDefault(require("path"));
const pathEntitiesDir = !["production", "staging"].includes(process.env.NODE_ENV)
    ? "src/models/*.ts"
    : "dist/models/*.js";
const pathMigrationDir = !["production", "staging"].includes(process.env.NODE_ENV)
    ? "src/database/migrations"
    : "dist/database/migrations";
const entitiesDir = path_1.default.resolve(process.cwd(), pathEntitiesDir);
const migrationsDir = path_1.default.resolve(process.cwd(), pathMigrationDir);
const TypeormConfig = {
    type: "sqlite",
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [entitiesDir],
    migrations: [migrationsDir],
    synchronize: !["production", "staging"].includes(process.env.NODE_ENV)
        ? true
        : false,
    logger: !["production", "staging"].includes(process.env.NODE_ENV)
        ? "advanced-console"
        : undefined,
    logging: !["production", "staging"].includes(process.env.NODE_ENV)
        ? true
        : false,
    cli: {
        entitiesDir: entitiesDir,
        migrationsDir: migrationsDir,
    },
};
exports.default = TypeormConfig;
