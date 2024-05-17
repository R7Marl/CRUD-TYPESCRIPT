import { Request, Response } from "express";
export const indexRoute = (req: Request, res: Response) => {
    res.send('hello world desde TypeScript & Express con controllers');
}