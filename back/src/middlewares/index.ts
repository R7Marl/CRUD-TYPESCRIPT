import { Request, Response , NextFunction } from 'express';
import { UserCheck } from '../interfaces/interfaces';
export const registerMiddle = (req: Request, res: Response, next: NextFunction) => {
    const { name, email, birthdate, nDni, username, password } : UserCheck = req.body;
    const required: UserCheck = {name, email, birthdate, nDni, username, password };
    const alert: string[] = [];
    for(const i in required) {
        if (!required[i as keyof UserCheck]) {
            alert.push(i);
          }
    }
    if(alert.length > 0 ) {
        return res.status(400).send(`Faltan los siguientes campos: ${alert.join(', ')}`);
    }
    next();
}
export const loginMiddle = (req: Request, res: Response, next: NextFunction) => {
    const { username, password } = req.body;
    if(!username) {
        return res.status(400).send("Faltan los siguientes campos: username");
    } else if(!password) {
        return res.status(400).send("Faltan los siguientes campos: password");
    }
    next();
}
export const turnCreateMiddle = (req: Request, res: Response, next: NextFunction) => {
    const { fecha, hora, userId } = req.body;
    if(!fecha) {
        return res.status(400).send("Faltan los siguientes campos: fecha");
    } else if(!hora) {
        return res.status(400).send("Faltan los siguientes campos: hora");
    } else if(!userId) {
        return res.status(400).send("Faltan los siguientes campos: userId");
    }
    next();
}