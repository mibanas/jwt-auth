import jwt, { VerifyErrors, JwtPayload } from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

class AuthMiddleware {
  async checkToken(req: Request, res: Response, next: NextFunction) {
    try {
      const token: any = req.headers.authorization?.split(' ')[1];
      if (!token) {
        return res.status(401).json({ message: 'Unauthorized: Missing token' });
      }

      const secretKey: any = process.env.SECRET_KEY;
      if (!secretKey) {
        return res.status(500).json({ message: 'Internal Server Error: Secret key not defined' });
      }

      const checkToken = await jwt.verify(token, secretKey);
      if (typeof checkToken === 'string') {
        return res.status(401).json({ message: 'Unauthorized: Invalid token' }); 
      } else {
        next()
      }

    } catch (error:any) {
      console.error('Token verification failed:', error.message);
      return res.status(401).json({ message: 'Unauthorized: Invalid token' });
    }
  }
}

const authMiddleware = new AuthMiddleware();

export default authMiddleware;
