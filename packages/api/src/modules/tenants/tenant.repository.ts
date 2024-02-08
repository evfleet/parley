import { FastifyInstance } from "fastify";

import { tenants } from "../../database/schema";
import { CreateTenant } from "./tenant.schema";

const createTenant = async (fastify: FastifyInstance, params: CreateTenant) => {
  return fastify.db.insert(tenants).values(params);
};

export default {
  createTenant,
};
