import { sql } from "drizzle-orm";
import { sqliteTable, text, integer, decimal } from "drizzle-orm/sqlite-core";

export const products = sqliteTable("products", {
    id: text("id").primaryKey(),
    name: text("name").notNull(),
    description: text("description"),
    mrp: decimal("mrp"),
    currentPrice: decimal("currentPrice"),
    isReturnable: integer("isReturnable"), // Use 0 or 1 to represent Boolean-like data
    isReplaceable: integer("isReplaceable"),
    deliveredBy: text("deliveredBy"), 
    brandName: text("brandName"),
    photos: text("photos"), // Consider storing an array of links if multiple photos 
    video: text("video"),
    color: text("color"),
    quantity: integer("quantity").notNull().default(0), 
    category: text("category"),
    subCategory: text("subCategory"),
    type: text("type"), // Enum is a good fit here if you have a predefined list of types

    // Foreign Keys (if you normalize further)
    reviewId: foreignKey(() => products, 'id').notNull(), // Reference to the 'review' table 
    sellerId: text("sellerId") // Reference to the 'seller' table 
});
