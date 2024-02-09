import { FastifyInstance } from "fastify";
import { ZodTypeProvider } from "fastify-type-provider-zod";
import { StatusCodes } from "http-status-codes";

export default async function (fastify: FastifyInstance) {
  fastify.withTypeProvider<ZodTypeProvider>().route({
    method: "POST",
    url: "/",
    handler: (request, reply) => {
      reply.code(StatusCodes.NOT_IMPLEMENTED).send("create");
    },
  });
}
