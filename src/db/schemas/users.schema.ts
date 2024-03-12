import { sql } from "drizzle-orm";
import { sqliteTable, text } from "drizzle-orm/sqlite-core"; 

export const users = sqliteTable("users", {
    id: text("id").primaryKey(), // Unique ID (Consider an auto-incrementing integer or UUID as well)
    name: text("name").notNull(),
    phoneNumber: text("phoneNumber").unique(), // We'll address hashing below
    emailId: text("emailId").notNull().unique(), 
    profilePhotoLink: text("profilePhotoLink"),
    password: text("password"),  // We'll address hashing below
    lastLocation: text("lastLocation"), // Assuming plain text storage for simplicity or latitude and longitude

    // Payment and Address Information (You might split these into separate schemas)
    savedPaymentInfo: text("savedPaymentInfo"),
    defaultShippingAddress: text("defaultShippingAddress"), 
    defaultBillingAddress: text("defaultBillingAddress"),
    createdAt: text("createdAt").notNull().default(sql`CURRENT_TIMESTAMP`) 
});
