import { FastifyInstance } from "fastify";
import { ZodTypeProvider } from "fastify-type-provider-zod";

import tenantController from "./tenant.controller";
import tenantSchemas from "./tenant.schema";

export default async function (fastify: FastifyInstance) {
  fastify.withTypeProvider<ZodTypeProvider>().route({
    method: "POST",
    url: "/",
    schema: {
      body: tenantSchemas.createTenantSchema,
    },
    handler: tenantController.createTenant,
  });
}
