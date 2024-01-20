import { Router } from "express";
import userControllers from "../controllers/userController";

const routes = Router()

routes.post('/register', userControllers.register)
routes.post('/login', userControllers.login)


const userRoutes = routes

export default userRoutes