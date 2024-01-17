import { Router } from "express";
import userControllers from "../controllers/userController";

const routes = Router()

routes.get('/', userControllers.login)
routes.post('/', userControllers.register)


const courseRoutes = routes

export default courseRoutes