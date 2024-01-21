import { config } from 'dotenv'
import { registerUser, loginUser } from './auth';
import { getAllCourses, getCourseById, addCourse, updateCourse, deleteCourse } from './course';

// env variable 
config()
const port = process.env.PORT || 3010
const version = process.env.BASE_URL


const apiDocumentation = {
    openapi: '3.0.1',
    info: {
      version: '1.3.0',
      title: 'My REST API - Documentation',
      description: 'Description of my API here',
      contact: {
        name: 'Mohamed SANABI',
        email: 'sanabi_mohamed@hotmail.fr',
        url: 'https://wwww.mohamedsanabi.com',
      },
    },
    servers: [
      {
        url: `http://localhost:${port}/${version}`,
        description: 'Local Server',
      },
      {
        url: 'https://api.mysite.com',
        description: 'Production Server',
      },
    ],
    tags: [
      {
        name: 'Authentification',
      },
      {
        name: 'Courses',
      },
    ],
    paths: {
        '/register': {
            post: registerUser,
        },
        '/login': {
            post : loginUser,
        },
        '/courses': {
            get: getAllCourses,
            post: addCourse,
        },
        '/courses/{id}': {
            get: getCourseById,
            put: updateCourse,
            delete: deleteCourse,
        },
    },
    
    components: {
        schemas: {
            Course: {
                type: 'object',
                properties: {
                    _id: { type: 'string' },
                    courseName: { type: 'string' },
                    courseImage: { type: 'string' },
                },
            },
            User: {
                type: 'object',
                properties: {
                    userName: { type: 'string' },
                    password: { type: 'string' },
                    completName: { type: 'string' },
                    email: { type: 'string' },
                    role: { type: 'string' },
                },
                required: ['userName', 'password', 'completName', 'email', 'role'],
            },

        },
        securitySchemes: {
            bearerAuth: {
                type: 'http',
                scheme: 'bearer',
                bearerFormat: 'JWT',
            },
        },
    },
};
  
  export { apiDocumentation };