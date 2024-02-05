import { sql } from "drizzle-orm";
import { FastifyInstance } from "fastify";

export default async function (fastify: FastifyInstance) {
  fastify.get("/", async (request, reply) => {
    const res = await fastify.db.execute(sql`SELECT NOW()`);

    return {
      message: "Test database",
      result: res,
    };
  });

  fastify.route<{
    Params: { id: string };
  }>({
    method: "GET",
    url: "/:id",
    handler: async (request, reply) => {
      const { id } = request.params;

      return {
        message: `Hello from discussion ${id}`,
      };
    },
  });

  fastify.route<{
    Params: { id: string };
  }>({
    method: "GET",
    url: "/:id/comments",
    handler: async (request, reply) => {
      const { id } = request.params;

      return {
        message: `Hello from discussion ${id} comments`,
      };
    },
  });

  fastify.route<{
    Params: { discussionId: string; commentId: string };
  }>({
    method: "GET",
    url: "/:discussionId/comments/:commentId",
    handler: async (request, reply) => {
      const { discussionId, commentId } = request.params;

      return {
        message: `Hello from iscussion ${discussionId} comment ${commentId}`,
      };
    },
  });
}
