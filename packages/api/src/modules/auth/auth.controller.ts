import { FastifyReply, FastifyRequest } from "fastify";
import { StatusCodes } from "http-status-codes";
import { generateId } from "lucia";
import { Argon2id } from "oslo/password";

import { db } from "../../config/database.js";
import { users } from "../../database/schema.js";

const login = async (req: FastifyRequest, reply: FastifyReply) => {
  reply.code(StatusCodes.NOT_IMPLEMENTED).send("login");
};

const register = async (
  req: FastifyRequest<{ Body: { email: string; password: string } }>,
  reply: FastifyReply
) => {
  reply.code(StatusCodes.NOT_IMPLEMENTED).send("register");

  // implement zod validation

  try {
    const { email, password } = req.body;
    const hash = await new Argon2id().hash(password);
    const userId = generateId(15);

    const user = await db.insert(users).values({
      id: userId,
      email,
      hashed_password: hash,
    });

    reply.send(user);
  } catch (error) {
    console.error(error);
    reply.code(StatusCodes.BAD_REQUEST).send("Error registering");
  }
};

export default {
  login,
  register,
};
