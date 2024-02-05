import { FastifyInstance } from "fastify";

import auth from "./auth";
import discussions from "./discussions/discussion.router";

export default async function (fastify: FastifyInstance) {
  fastify.register(auth, { prefix: "/auth" });
  fastify.register(discussions, { prefix: "/discussions" });
}
