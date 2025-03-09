import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { RepositoryPrismaUsers } from "../../repositories/prisma/prisma";
import { RegisterUserService } from "../../services/register-user";
import { UserAlreadyExist } from "../../services/erros/user-exist";

export const RegisterUser = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  //validar dados
  const validadedUser = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string(),
  });

  const { name, email, password } = validadedUser.parse(request.body);
 //chama o caso de uso 
  try {
    const usersRepository =new RepositoryPrismaUsers()
    const registerUserService = new RegisterUserService(usersRepository)


    await registerUserService.execute({
        name,email,password
    })
  } catch (error) {
    if(error instanceof UserAlreadyExist){
      return reply.status(409).send({message:error.message})

    }

    throw error
  }
  return reply.status(201).send()
};
