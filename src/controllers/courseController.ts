import courseModel from "../models/courseModel"
import { Request, Response } from "express"



class CourseController {
  async getAllCourses(req: Request, res: Response): Promise<any> {
    try {
        const allCourses = await courseModel.find()

        if (allCourses.length === 0) {
            return res.status(404).json({
                success: true,
                message: 'No courses found. Please add new courses.'
            })
        }

        return res.status(200).json({
            success: true,
            data: allCourses
        })
        } catch (error: any) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
        }
  }

  async getCourseById(req: Request, res: Response): Promise<any> {
    try {
        const course = await courseModel.findById(req.params.id)

        if (course) {
            return res.status(200).json({
                success: true,
                data: course
            })
        } else {
            return res.status(404).json({
                success: false,
                message: 'Course not found.'
            })
        }
        } catch (error: any) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
        }
  }

  async addCourse(req: Request, res: Response): Promise<any> {
    try {
        const { courseName } = req.body
        const file = req.file

        const check_Duplicate = await courseModel.find({
            courseName : courseName
        })        

        if (check_Duplicate.length !== 0) {
            return res.status(404).json({
                success: true,
                message: 'Courses already in database. Please add new courses.'
            })
        }

        const savedCourse = await courseModel.create({
            courseName,
            courseImage : file?.filename
        })

        return res.status(201).json({
            success: true,
            data: savedCourse
        })
    } catch (error: any) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
  }

  async updateCourse(req: Request, res: Response): Promise<any> {
    try {
      const updatedCourse = await courseModel.findByIdAndUpdate(
        req.params.id,
        { courseName: req.body.courseName },
        { new: true }
      )

      if (updatedCourse) {
        return res.status(200).json({
            success: true,
            data: updatedCourse
        })
      } else {
        return res.status(404).json({
            success: false,
            message: 'Course not found.'
        })
      }
    } catch (error: any) {
        return res.status(500).json({
            success: false,
            message: error.message
      })
    }
  }

  async deleteCourse(req: Request, res: Response): Promise<any> {
    try {
        const deletedCourse = await courseModel.findByIdAndDelete(req.params.id)

        if (deletedCourse) {
            return res.status(200).json({
                success: true,
                message: 'Course deleted successfully.',
                datadeleted : deletedCourse
            })
        } else {
            return res.status(404).json({
                success: false,
                message: 'Course not found.'
            })
        }
        } catch (error: any) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
  }
}

const CourseControllers = new CourseController
export default CourseControllers
