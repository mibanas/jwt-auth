import userModel from "../models/userModel"
import { Request, Response } from "express"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

class userController {
    async register(req: Request, res: Response): Promise<void> {
        try {
            const { username, password } = req.body;
            // Vérifier si l'utilisateur existe déjà
            const existingUser = await userModel.findOne({ username });
        
            if (existingUser) {
                res.status(400).json({ message: 'Username already exists.' });
                return;
            }
        
            // Hash du mot de passe
            const hashedPassword = await bcrypt.hash(password, 10);
        
            // Création de l'utilisateur dans la base de données
            const newUser = await userModel.create({
                username,
                password: hashedPassword,
            });
        
            res.status(201).json({ message: 'Registration successful.', user: newUser });
            } catch (error) {
                res.status(500).json({ message: 'Internal server error.' });
            }
      }

      
      async login(req: Request, res: Response): Promise<void> {
    //     try {
    //         const user = await userModel.findOne({ username })

    //         if (user) {
    //           const storedPassword = user.password || ''; // Assurez-vous que storedPassword est une chaîne
            
    //           if (password && typeof storedPassword === 'string') {
    //             const passwordMatch = await bcrypt.compare(password, storedPassword);
            
    //             if (passwordMatch) {
    //               // Le mot de passe correspond, vous pouvez générer le token JWT ici
    //             } else {
    //               res.status(401).json({ message: 'Invalid username or password.' })
    //             }
    //           } else {
    //             res.status(401).json({ message: 'Invalid username or password.' })
    //           }
    //         } else {
    //           res.status(401).json({ message: 'Invalid username or password.' })
    //         }
        
    //         // Générer le token JWT
    //         const token = jwt.sign({ username: user.userName }, 'your_secret_key', { expiresIn: '1h' })
        
    //         res.status(200).json({ message: 'Login successful.', token })
    //     } catch (error) {
    //          res.status(500).json({ message: 'Internal server error.' })
    //     }
      }
}

const userControllers = new userController

export default userControllers