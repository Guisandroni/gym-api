import { FastifyInstance } from "fastify"
import { RegisterUser } from "./controllers/register-user"
import { AllUsers } from "./controllers/AllUsers"
import { AuthenticateUsers } from "./controllers/authenticate"


export const appRoutes = async (app:FastifyInstance) =>{
    app.post('/users',RegisterUser)
    app.post('/sessions',AuthenticateUsers)
    app.get('/',AllUsers)
}