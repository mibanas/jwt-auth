import { Schema, model } from 'mongoose'

const courseSchema = new Schema({
    courseName : { 
        type: String, 
        required: true,
        unique: true
    },
    courseImage : { 
        type: String, 
        required: false,
    }
})

const courseModel = model('Courses', courseSchema)

export default courseModel