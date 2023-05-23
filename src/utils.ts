import { DataSource } from "typeorm";
import { Countries } from "./entities/Countries";

const datasource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: 5432,
  username: "postgres",
  password: "supersecret",
  database: "postgres",
  synchronize: true,
  entities: [Countries],
  logging: ["query", "error"],
});

export default datasource;
