import { FastifyInstance } from "fastify";

import { tenants } from "../../database/schema";

const createTenant = async (
  fastify: FastifyInstance,
  params: typeof tenants.$inferInsert
) => {
  return fastify.db.insert(tenants).values(params);
};

export default {
  createTenant,
};
