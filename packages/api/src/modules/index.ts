import { FastifyInstance } from "fastify";

import auth from "./auth/auth.router.js";

export default async function (fastify: FastifyInstance) {
  fastify.register(auth, { prefix: "/auth" });
}
