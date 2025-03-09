import { FastifyReply, FastifyRequest } from "fastify";

import { z } from "zod";
import { prisma } from "../../lib/prisma";

export const AllUsers = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  


 const allUsers = await prisma.user.findMany()

  return {allUsers}
};
