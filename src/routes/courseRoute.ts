import { Router } from "express";
import CourseController from "../controllers/courseController";
import upload from '../middlewares/uploadImageMiddleware'


const routes = Router()

routes.get('/', CourseController.getAllCourses)
routes.get('/:id', CourseController.getCourseById)
routes.post('/', upload.single('courseImage'), CourseController.addCourse)
routes.delete('/:id', CourseController.deleteCourse)
routes.put('/:id', CourseController.updateCourse)

const courseRoutes = routes

export default courseRoutes