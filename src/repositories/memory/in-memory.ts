import { Prisma, User } from "@prisma/client";
import { UsersRepository } from "../users-repository";


export class inMemory implements UsersRepository{
    public items: User[]=[]
   async FindByEmail(email: string) {
        const user = this.items.find((item)=> item.email === email)
        if(!user){
            return null
        }
        return user
    }
  async  create(data: Prisma.UserCreateInput) {
            const user = {
              
                    id:'123',
                    name:data.name,
                    email:data.email,
                    password_hash:data.password_hash,
                    created_at: new Date()
                
            }
            this.items.push(user)
            return user
          
        
    }
}  
