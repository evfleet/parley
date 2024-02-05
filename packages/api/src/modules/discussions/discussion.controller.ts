import { FastifyReply, FastifyRequest } from "fastify";

import discussionRepository from "./discussion.repository";
import { DiscussionId } from "./discussion.schema";

const getDiscussion = async (
  req: FastifyRequest<{ Params: DiscussionId }>,
  reply: FastifyReply
) => {
  const { discussionId } = req.params;
  const res = await discussionRepository.getDiscussion(
    req.server,
    discussionId
  );

  reply.send({
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

  reply.send({
    result: res,
  });
};

export default {
  getDiscussion,
};
