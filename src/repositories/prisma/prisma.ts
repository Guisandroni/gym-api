import { Prisma, User } from "@prisma/client";
import { prisma } from "../../lib/prisma";
import { UsersRepository } from "../users-repository";

export class RepositoryPrismaUsers implements UsersRepository {
  async create(data: Prisma.UserCreateInput) {
    const user = await prisma.user.create({
      data,
    });
    return user;
  }
  async FindByEmail(email: string) {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    return user;
  }
}
