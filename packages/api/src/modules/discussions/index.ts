import { sql } from "drizzle-orm";
import { FastifyInstance } from "fastify";

export default async function (fastify: FastifyInstance) {
  fastify.get("/", async (request, reply) => {
    const res = await fastify.db.execute(sql`SELECT NOW()`);

    return {
      message: "Hello from Discussions",
      result: res,
    };
  });
}
