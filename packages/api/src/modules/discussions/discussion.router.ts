import { FastifyInstance } from "fastify";
import { ZodTypeProvider } from "fastify-type-provider-zod";
import { StatusCodes } from "http-status-codes";

import discussionController from "./discussion.controller";
import discussionSchemas from "./discussion.schema";

export default async function (fastify: FastifyInstance) {
  // Add discussion tag to all routes
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
    method: "POST",
    url: "/",
    schema: {
      body: discussionSchemas.createDiscussionSchema,
    },
    handler: discussionController.createDiscussion,
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
    method: "PUT",
    url: "/:discussionId",
    schema: {
      params: discussionSchemas.discussionIdSchema,
    },
    handler: (request, reply) => {
      reply.code(StatusCodes.NOT_IMPLEMENTED).send("update");
    },
  });

  fastify.withTypeProvider<ZodTypeProvider>().route({
    method: "DELETE",
    url: "/:discussionId",
    schema: {
      params: discussionSchemas.discussionIdSchema,
    },
    handler: (request, reply) => {
      reply.code(StatusCodes.NOT_IMPLEMENTED).send("delete");
    },
  });

  fastify.withTypeProvider<ZodTypeProvider>().route({
    method: "GET",
    url: "/:discussionId/comments",
    handler: (request, reply) => {
      reply.code(StatusCodes.NOT_IMPLEMENTED).send("get comments");
    },
  });

  fastify.withTypeProvider<ZodTypeProvider>().route({
    method: "POST",
    url: "/:discussionId/comments",
    handler: (request, reply) => {
      reply.code(StatusCodes.NOT_IMPLEMENTED).send("create comment");
    },
  });

  fastify.withTypeProvider<ZodTypeProvider>().route({
    method: "GET",
    url: "/:discussionId/comments/:commentId",
    handler: (request, reply) => {
      reply.code(StatusCodes.NOT_IMPLEMENTED).send("get comment");
    },
  });

  fastify.withTypeProvider<ZodTypeProvider>().route({
    method: "PUT",
    url: "/:discussionId/comments/:commentId",
    handler: (request, reply) => {
      reply.code(StatusCodes.NOT_IMPLEMENTED).send("update comment");
    },
  });

  fastify.withTypeProvider<ZodTypeProvider>().route({
    method: "DELETE",
    url: "/:discussionId/comments/:commentId",
    handler: (request, reply) => {
      reply.code(StatusCodes.NOT_IMPLEMENTED).send("delete comment");
    },
  });
}
