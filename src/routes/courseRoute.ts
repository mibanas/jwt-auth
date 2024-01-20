import { Router } from "express";
import CourseController from "../controllers/courseController";
import upload from '../middlewares/uploadImageMiddleware'
import courseDataValidator from "../middlewares/courseMiddleware";
import checkToken from "../middlewares/tokenMiddleware";


const routes = Router()

routes.get('/', CourseController.getAllCourses)
routes.get('/:id', CourseController.getCourseById)
routes.post('/',  [ checkToken.checkToken, upload.single('courseImage') ,courseDataValidator ], CourseController.addCourse)
routes.delete('/:id', checkToken.checkToken, CourseController.deleteCourse)
routes.put('/:id', checkToken.checkToken, CourseController.updateCourse)

const courseRoutes = routes

export default courseRoutes 