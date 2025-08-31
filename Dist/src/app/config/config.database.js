"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const TypeormConfig = {
    type: "postgres",
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    synchronize: !["production", "staging"].includes(process.env.NODE_ENV)
        ? true
        : false,
    logger: !["production", "staging"].includes(process.env.NODE_ENV)
        ? "advanced-console"
        : undefined,
    logging: !["production", "staging"].includes(process.env.NODE_ENV)
        ? true
        : false,
    cli: {},
};
exports.default = TypeormConfig;
