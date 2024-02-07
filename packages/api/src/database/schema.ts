import { boolean, pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

// the following requirements:
// - users can sign up and create an account
// - users can create discussions
// - users can comment on discussions
// - users can reply to comments
// - users can like comments
// - users can report comments

// user belongs to a team which belongs to a tenant
export const tenant = pgTable("tenant", {
  id: serial("id"),
  name: text("name"),
  created_at: timestamp("created_at"),
  updated_at: timestamp("updated_at"),
});

export const team = pgTable("team", {
  id: serial("id"),
  name: text("name"),
  tenant_id: serial("tenant_id"),
  created_at: timestamp("created_at"),
  updated_at: timestamp("updated_at"),
});

// each user has a role in a team, can have different roles in different teams
export const user = pgTable("user", {
  id: serial("id"),
  email: text("email"),
  password: text("password"),
  team_id: serial("team_id"),
  created_at: timestamp("created_at"),
  updated_at: timestamp("updated_at"),
});

export const discussion = pgTable("discussion", {
  id: serial("id"),
  slug: text("slug"),
  tenant_id: serial("tenant_id"),
  created_at: timestamp("created_at"),
  updated_at: timestamp("updated_at"),
});

export const comment = pgTable("comment", {
  id: serial("id"),
  text: text("text"),
  anonymous: boolean("anonymous"),
  user_id: serial("user_id"),
  discussion_id: serial("discussion_id"),
  created_at: timestamp("created_at"),
  updated_at: timestamp("updated_at"),
});
