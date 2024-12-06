import { Request, Response, NextFunction } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';

export default function checkRoles(requiredRoles: string[]) {
  return (req: Request & { user?: JwtPayload }, res: Response, next: NextFunction): void => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      res.status(401).send('Unauthorized');
      return; 
    }

    const token = authHeader.split(' ')[1];
    const decoded = jwt.decode(token);
    if (!decoded || typeof decoded === 'string') {
      res.status(400).send('Invalid token');
      return;
    }

    const userRoles = (decoded as JwtPayload).realm_access?.roles || [];
    const hasRequiredRole = requiredRoles.some((role) => userRoles.includes(role));

    if (!hasRequiredRole) {
      res.status(403).send('Forbidden: Insufficient Role');
      return; 
    }

    req.user = decoded as JwtPayload;
    next(); 
  };
}
