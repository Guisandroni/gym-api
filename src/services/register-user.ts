import { hash } from "bcryptjs";
import { prisma } from "../lib/prisma";
import { error } from "node:console";
import { RepositoryPrismaUsers } from "../repositories/prisma/prisma";
import { UsersRepository } from "../repositories/users-repository";
import { UserAlreadyExist } from "./erros/user-exist";
import { User } from "@prisma/client";

interface paramsRegisterService{
    name:string,
    email:string,
    password:string
}
interface RegisterUserRepository{
  user:User
}
//usando inversao de dependencia

export class RegisterUserService {
  constructor (private usersRepository: UsersRepository) {Promise<RegisterUserRepository>} 

 async execute ({name,email,password}:paramsRegisterService)  {
    //parametro para criar a hash da senha
    const password_hash = await hash(password,6)
    //procura por emails no db
    const userDoubleEmail = await this.usersRepository.FindByEmail(email)
    //mesmo email retorna erro
    if(userDoubleEmail){
      throw new UserAlreadyExist //passando erro
    }

    // const  repositoryPrismaUsers = new RepositoryPrismaUsers()
    //cria usuario, senha ja passa na hash
    const user = await this.usersRepository.create({
      name,email,password_hash
    })

    return {user}
}
}