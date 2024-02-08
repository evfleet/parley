import { FastifyReply, FastifyRequest } from "fastify";
import { StatusCodes } from "http-status-codes";

import tenantRepository from "./tenant.repository";
import { CreateTenant } from "./tenant.schema";

const createTenant = async (
  req: FastifyRequest<{ Body: CreateTenant }>,
  reply: FastifyReply
) => {
  try {
    const res = await tenantRepository.createTenant(req.server, req.body);

    console.log(res);

    reply.code(StatusCodes.NOT_IMPLEMENTED).send("create");
  } catch (err) {
    console.error(err);
    reply.code(StatusCodes.INTERNAL_SERVER_ERROR).send("error");
  }
};

export default {
  createTenant,
};
