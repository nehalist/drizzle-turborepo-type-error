import { pgTable, serial, text } from "drizzle-orm/pg-core";

export const products = pgTable("product", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
});
