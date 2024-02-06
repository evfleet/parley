import { FastifyInstance } from "fastify";
import { ZodTypeProvider } from "fastify-type-provider-zod";

import discussionController from "./discussion.controller";
import discussionSchemas from "./discussion.schema";

export default async function (fastify: FastifyInstance) {
  // Add tag to all routes
  fastify.addHook("onRoute", (routeOptions) => {
    if (routeOptions.schema) {
      routeOptions.schema = {
        ...routeOptions.schema,
        tags: [...(routeOptions.schema.tags || []), "Discussions"],
      };
    } else {
      routeOptions.schema = { tags: ["Discussions"] };
    }
  });

  fastify.withTypeProvider<ZodTypeProvider>().route({
    method: "GET",
    url: "/:discussionId",
    schema: {
      params: discussionSchemas.discussionIdSchema,
    },
    handler: discussionController.getDiscussion,
  });

  fastify.withTypeProvider<ZodTypeProvider>().route({
    method: "GET",
    url: "/:discussionId/comments",
    handler: (request, reply) => {},
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
