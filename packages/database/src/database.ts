import * as dotenv from "dotenv";
import { drizzle, PostgresJsDatabase } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema";

dotenv.config();

declare global {
  var db: PostgresJsDatabase<typeof schema> | undefined;
}

let database: PostgresJsDatabase<typeof schema>;

export const client = postgres(`${process.env.DATABASE_URL}`);

if (process.env.NODE_ENV === "production") {
  database = drizzle(client, {schema});
} else {
  if (!global.db) {
    global.db = drizzle(client, {schema});
  }

  database = global.db;
}

export { database };
