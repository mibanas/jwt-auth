import userModel from "../models/userModel"
import { Request, Response } from "express"
import bcrypt from 'bcrypt'
import jwt, { SignOptions } from 'jsonwebtoken'
import { json } from "stream/consumers";

class userController {
    async register(req: Request, res: Response) {
        
        try {
            const { username, password, completName, email, role } = req.body;
            const existingUser = await userModel.findOne({ email });        
            if (existingUser) {
                return res.status(400).json({ 
                    message: 'Username already exists.' 
                })
            }
            
            const hashedPassword = await bcrypt.hash(password, 10);
            
            const newUser = await userModel.create({
                username,
                password: hashedPassword,
                email,
                completName,
                role
            })
            
            res.status(201).json({ 
                message: 'Registration successful.', 
                user: newUser 
            })

        } catch (error: any) {
            res.status(500).json({ 
                message: 'Internal server error.' ,
                error : error.message
            })
        }
    }

      
    async login(req: Request, res: Response) {
        const { email, password } = req.body;
      
        try {
            const user = await userModel.findOne({ email: email })
      
            if (!user) {
                return res.status(404).json({
                success: false,
                message: "Email already exist or password is wrong!",
                })
            }
      
            const passwordMatch = await bcrypt.compare(password, user.password!)
        
            if (passwordMatch) {
                
                const secret: any = process.env.SECRET_KEY
                const payload = {
                    name: user.email
                }
                const options: SignOptions = {
                    expiresIn: '1h',
                    algorithm: 'HS256',
                }
                
                const token = jwt.sign(payload, secret, options)
        
            return res.status(200).json({
                success: true,
                message: "User is authenticated",
                user: user.userName, 
                token,
            })
          }
      
          res.status(400).json({
            success: false,
            message: "Email already exist or password is wrong!",
          })
        } catch (error) {
            console.error(error);
            res.status(500).json({
                success: false,
                message: "Internal Server Error",
          })
        }
    }
}

const userControllers = new userController

export default userControllers