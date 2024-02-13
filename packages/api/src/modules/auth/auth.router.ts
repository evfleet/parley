import { FastifyInstance } from "fastify";
import { ZodTypeProvider } from "fastify-type-provider-zod";

import authController from "./auth.controller.js";

export default async function (fastify: FastifyInstance) {
  fastify.withTypeProvider<ZodTypeProvider>().route({
    method: "POST",
    url: "/login",
    handler: authController.login,
  });

  fastify.withTypeProvider<ZodTypeProvider>().route({
    method: "POST",
    url: "/register",
    handler: authController.register,
  });
}
