import { FastifyInstance } from "fastify";

import auth from "./auth";
import discussions from "./discussions";

export default async function (fastify: FastifyInstance) {
  fastify.get("/", async (request, reply) => {
    return { message: "Hello from Root" };
  });

  fastify.register(auth, { prefix: "/auth" });
  fastify.register(discussions, { prefix: "/discussions" });
}
