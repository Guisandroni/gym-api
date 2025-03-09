import { compare } from "bcryptjs";
import { UsersRepository } from "../repositories/users-repository";
import { User } from "@prisma/client";
import { InvalideCredentialError } from "./erros/Authenticate-Error";

interface paramsAuthenticateService {
  email: string;
  password: string;
}
interface AuthenticateCaseResponse {
  user: User;
}
//usando inversao de dependencia

export class AuthenticateUsersService {
  constructor(private usersRepository: UsersRepository) {}

  async execute({
    email,
    password,
  }: paramsAuthenticateService): Promise<AuthenticateCaseResponse> {
    const user = await this.usersRepository.FindByEmail(email);

    if (!user) {
      throw new InvalideCredentialError();
    }

    const thisPasswordToEqual = await compare(password, user.password_hash);

    if (!thisPasswordToEqual) {
      throw new InvalideCredentialError();
    }

    return { user };
  }
}
