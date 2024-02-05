import { drizzle } from "drizzle-orm/node-postgres";
import { FastifyInstance } from "fastify";
import plugin from "fastify-plugin";
import { Client } from "pg";

export default plugin(async function (fastify: FastifyInstance) {
  const client = new Client({ connectionString: process.env.POSTGRES_URL });
  await client.connect();

  fastify.decorate("db", drizzle(client));
});
