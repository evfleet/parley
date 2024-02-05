import { NodePgDatabase } from "drizzle-orm/node-postgres";

declare module "fastify" {
  export interface FastifyInstance {
    db: NodePgDatabase;
  }
}
