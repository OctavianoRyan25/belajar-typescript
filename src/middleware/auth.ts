import { Request, Response, NextFunction } from 'express';
import { verifyToken } from '../helper/auth';

export function authMiddleware(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers.authorization;
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
  
    const token = authHeader.split(' ')[1];
  
    try {
      const decoded = verifyToken(token);
    //   req.user = decoded; // kalau mau passing user info
      next();
    } catch (error) {
      return res.status(401).json({ message: 'Invalid token' });
    }
  }