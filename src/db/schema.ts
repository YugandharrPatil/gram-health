import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const items = sqliteTable("items", {
	id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
	name: text("name").notNull(),
	price: integer("price", { mode: "number" }).notNull(),
	quantity: integer("quantity", { mode: "number" }).notNull(),
});
