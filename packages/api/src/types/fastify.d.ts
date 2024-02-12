import { PgDatabase } from "drizzle-orm/node-postgres";
import { Lucia } from "lucia";

declare module "fastify" {
  export interface FastifyInstance {
    db: PgDatabase;
    auth: Lucia;
  }
}
