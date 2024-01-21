import express from 'express'
import { config } from 'dotenv'
import path from 'path'
import morgan from 'morgan'
import swaggerUi from "swagger-ui-express";
import { apiDocumentation } from './docs/apidoc';

// Import Routes 
import courseRoutes from './routes/courseRoute'
import userRoutes from './routes/userRoute'


const app = express()
app.use(express.json())

// middlewares app
app.use(express.urlencoded({ extended: false }))
app.use(morgan('dev'))

//  middleware for static file
app.use('/images', express.static(path.join(__dirname, '../public/images')));

// env variables
config()
const version = process.env.BASE_URL

// swagger documentations 
app.use('/documentation', swaggerUi.serve, swaggerUi.setup(apiDocumentation));


// Route Management
app.use(`/${version}/courses`, courseRoutes)
app.use(`/${version}/auth`, userRoutes)

// Handle 404 errors
app.use((req, res, next) => {
    res.status(404).send('Not Found');
})

export default app