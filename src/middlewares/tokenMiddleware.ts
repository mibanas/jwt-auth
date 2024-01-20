import jwt, { VerifyErrors, JwtPayload } from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

class AuthMiddleware {
	async checkToken(req: Request, res: Response, next: NextFunction) {
		try {
			const token: any = req.headers.authorization?.split(' ')[1];
			if (!token) {
				return res.status(401).json({ 
					success : false,
					message: 'Unauthorized: Missing token' 
				});
			}

			const secretKey: any = process.env.SECRET_KEY;
			if (!secretKey) {
				return res.status(500).json({ 
					sucess : false,
					message: 'Internal Server Error: Secret key not defined' 
				});
			}

			const checkToken = await jwt.verify(token, secretKey);
			const decoded = jwt.decode(token, { complete: true });
			const payload : any = decoded!.payload
			
			if (typeof checkToken === 'string') {
				return res.status(401).json({
					success : false,
					message: 'Unauthorized: Invalid token' 
				}); 
			} else {
				if (payload.role === 'Administrator' || payload.role === 'Responsible') {
					next()
				}
				else {
					return res.status(401).json({ 
						success : false,
						message: 'You dont have the eligibility to access to these fonctionality !' 
					});
				}
			}

		} catch (error:any) {
			console.error('Token verification failed:', error.message);
			return res.status(401).json({ 
				success : false,
				message: 'Unauthorized: Invalid token' 
			});
		}
	}
}

const authMiddleware = new AuthMiddleware();

export default authMiddleware;
