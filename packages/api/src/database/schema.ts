import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const users = pgTable("user", {
  id: text("id").primaryKey(),
  email: text("email").notNull().unique(),
  hashed_password: text("hashed_password").notNull(),
});

export const sessions = pgTable("session", {
  id: text("id").primaryKey(),
  userId: text("user_id")
    .notNull()
    .references(() => users.id),
  expiresAt: timestamp("expires_at", {
    withTimezone: true,
    mode: "date",
  }).notNull(),
});

// the following requirements:
// - users can sign up and create an account
// - users can create discussions
// - users can comment on discussions
// - users can reply to comments
// - users can like comments
// - users can report comments

// user belongs to a team which belongs to a tenant
export const tenants = pgTable("tenants", {
  id: serial("id"),
  name: text("name"),
  created_at: timestamp("created_at"),
  updated_at: timestamp("updated_at"),
});

/*
// tenant has many clients
// client has discussions
export const clients = pgTable("clients", {
  id: serial("id"),
  name: text("name"),
  tenant_id: serial("tenant_id"),
  created_at: timestamp("created_at"),
  updated_at: timestamp("updated_at"),
});

// client has a team
// team has many users
// users can have different roles in different teams
export const teams = pgTable("teams", {
  id: serial("id"),
  name: text("name"),
  tenant_id: serial("tenant_id"),
  created_at: timestamp("created_at"),
  updated_at: timestamp("updated_at"),
});

export const users = pgTable("users", {
  id: serial("id"),
  email: text("email"),
  password: text("password"),
  team_id: serial("team_id"),
  created_at: timestamp("created_at"),
  updated_at: timestamp("updated_at"),
});

// discussion belongs to a client
export const discussions = pgTable("discussions", {
  id: serial("id"),
  slug: text("slug"),
  tenant_id: serial("tenant_id"),
  created_at: timestamp("created_at"),
  updated_at: timestamp("updated_at"),
});

export const comments = pgTable("comments", {
  id: serial("id"),
  text: text("text"),
  anonymous: boolean("anonymous"),
  user_id: serial("user_id"),
  discussion_id: serial("discussion_id"),
  created_at: timestamp("created_at"),
  updated_at: timestamp("updated_at"),
});
*/
