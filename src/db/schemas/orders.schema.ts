import { sql } from "drizzle-orm";
import { foreignKey } from "drizzle-orm/mysql-core";
import { sqliteTable, text, integer, decimal,SQLiteBoolean } from "drizzle-orm/sqlite-core";
import { products } from "./products.schema";
import { users } from "./users.schema";

export const orders = sqliteTable("orders", {
    id: text("id").primaryKey(), 
    userId: foreignKey(() => users, 'id').notNull(), // Foreign key to the 'users' table
    productId: foreignKey(() => products, 'id').notNull(), // Foreign key to the 'products' table 
    userName: text("userName"), // Consider redundancy vs. normalization
    productName: text("productName"), // Consider redundancy vs. normalization
    orderMrp: decimal("orderMrp"), 
    orderPrice: decimal("orderPrice"),
    discountCashbackAmount: decimal("discountCashbackAmount"),
    orderDate: text("orderDate").notNull().default(sql`CURRENT_TIMESTAMP`),
    expectedDeliveryDate: text("expectedDeliveryDate"),
    confirmedDeliveryDate: text("confirmedDeliveryDate"),
    paymentMethod: text("paymentMethod"), 
    shippingAddress: text("shippingAddress"),
    billingAddress: text("billingAddress"), 
    quantity: integer("quantity").notNull(), 
    invoiceLink: text("invoiceLink")
});
