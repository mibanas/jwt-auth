import express from 'express'
import { config } from 'dotenv';
import path from 'path';

// Import Routes 
import courseRoutes from './routes/courseRoute';

const app = express()

// middlewares app
app.use(express.json())

//  middleware for static file
app.use('/images', express.static(path.join(__dirname, '../public/images')));

// env variables
config()
const version = process.env.BASE_URL

// Route Management
app.use(`/${version}/courses`, courseRoutes)

export default app