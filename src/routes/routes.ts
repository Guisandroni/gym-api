import { FastifyInstance } from "fastify"
import { RegisterUser } from "./controllers/register-user"
import { AllUsers } from "./controllers/AllUsers"


export const appRoutes = async (app:FastifyInstance) =>{
    app.post('/',RegisterUser)
    app.get('/',AllUsers)
}