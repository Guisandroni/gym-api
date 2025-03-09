import { Prisma, User } from "@prisma/client"

export interface UsersRepository{
    create (data: Prisma.UserCreateInput) : Promise<User>
    FindByEmail (email:string) : Promise<User | null>

}