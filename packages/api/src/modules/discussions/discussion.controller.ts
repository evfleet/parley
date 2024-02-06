import { FastifyReply, FastifyRequest } from "fastify";
import { StatusCodes } from "http-status-codes";

import discussionRepository from "./discussion.repository";
import { DiscussionId } from "./discussion.schema";

const createDiscussion = async (req: FastifyRequest, reply: FastifyReply) => {
  const res = await discussionRepository.createDiscussion(req.server, req.body);

  reply.code(StatusCodes.NOT_IMPLEMENTED).send({
    result: res,
  });
};

const getDiscussion = async (
  req: FastifyRequest<{ Params: DiscussionId }>,
  reply: FastifyReply
) => {
  const { discussionId } = req.params;
  const res = await discussionRepository.getDiscussion(
    req.server,
    discussionId
  );

  reply.code(StatusCodes.NOT_IMPLEMENTED).send({
    result: res,
  });
};

const getDiscussionComments = async (
  req: FastifyRequest<{ Params: DiscussionId }>,
  reply: FastifyReply
) => {
  const { discussionId } = req.params;
  const res = await discussionRepository.getDiscussionComments(
    req.server,
    discussionId
  );

  reply.code(StatusCodes.NOT_IMPLEMENTED).send({
    result: res,
  });
};

export default {
  createDiscussion,
  getDiscussion,
};
