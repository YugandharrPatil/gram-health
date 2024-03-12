import { sql } from "drizzle-orm";
import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

export const reviews = sqliteTable("reviews", {
    id: text("id").primaryKey(),
    productId: text("productId").notNull(),  // Foreign key referencing the 'products' table
    reviewerName: text("reviewerName"),
    reviewTitle: text("reviewTitle"),
    rating: integer("rating").notNull(),
    reviewDescription: text("reviewDescription"),
    reviewDate: text("reviewDate").notNull().default(sql`CURRENT_TIMESTAMP`), 
    photos: text("photos"), // Consider storing an array of links.
    video: text("video")
});
