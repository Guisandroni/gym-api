import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { RepositoryPrismaUsers } from "../../repositories/prisma/prisma";
import { AuthenticateUsersService } from "../../services/authenticate";
import { InvalideCredentialError } from "../../services/erros/Authenticate-Error";

export const AuthenticateUsers = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  //validar dados
  const validadedUser = z.object({
    email: z.string().email(),
    password: z.string(),
  });

  const {  email, password } = validadedUser.parse(request.body);
 //chama o caso de uso 
  try {
    const usersRepository =new RepositoryPrismaUsers()
    const authenticateUsersService = new AuthenticateUsersService(usersRepository)


    await authenticateUsersService.execute({
     email,password
    })
  } catch (error) {
    if(error instanceof InvalideCredentialError){
      return reply.status(409).send({message:error.message})

    }

    throw error
  }
  return reply.status(200).send()
};
