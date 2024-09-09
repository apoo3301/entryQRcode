import { Sub } from "@radix-ui/react-navigation-menu";
import { create } from "domain";
import { sql, SQL } from "drizzle-orm";
import {
  boolean,
  timestamp,
  pgTable,
  text,
  primaryKey,
  integer,
  pgEnum,
  type AnyPgColumn,
  uniqueIndex,
  json,
  uuid,
  serial,
} from "drizzle-orm/pg-core";

// custom lower function
export function lower(email: AnyPgColumn): SQL {
  return sql`lower(${email})`;
}

export const customers = pgTable("customers", {
  id: uuid("id").primaryKey().defaultRandom(),
  email: text("email").notNull().unique(),
  fullname: text("fullname").notNull().unique(),
  duree: integer("duree").notNull(),
  createdAt: timestamp("createdAt").notNull().defaultNow(),
})
