import { FastifyInstance } from "fastify";

import discussions from "./discussions/discussion.router.js";
import tenants from "./tenants/tenant.router.js";

export default async function (fastify: FastifyInstance) {
  fastify.register(discussions, { prefix: "/discussions" });
  fastify.register(tenants, { prefix: "/tenants" });
}
