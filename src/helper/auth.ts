import jwt from 'jsonwebtoken';
import { loginDTO } from '../dto/auth.dto';

const JWT_SECRET: string = process.env.JWT_SECRET || 'your_secret_key'; // <- pastikan string

export function generateToken(payload: any): string {
    return jwt.sign({
        _id : payload._id,
        email: payload.email,
    }, 
        JWT_SECRET, 
    { 
        algorithm: 'HS256', 
        expiresIn: 60*60
    }
    );
}

export function verifyToken(token: string): any {
    return jwt.verify(token, JWT_SECRET);
}
