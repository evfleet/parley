import { sql } from "drizzle-orm";
import { FastifyInstance } from "fastify";

const createDiscussion = async (fastify: FastifyInstance, params: any) => {
  return "createDiscussion";
};

const getDiscussion = async (fastify: FastifyInstance, params: any) => {
  const res = await fastify.db.execute(sql`SELECT NOW()`);

  return res.rows;
};

const getDiscussionComments = async (fastify: FastifyInstance, params: any) => {
  const res = await fastify.db.execute(sql`SELECT NOW()`);

  return res.rows;
};

export default {
  createDiscussion,
  getDiscussion,
  getDiscussionComments,
};
