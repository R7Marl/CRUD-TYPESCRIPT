import { NextFunction, Request, Response } from "express"
type Function1 = (req: Request, res: Response, next: NextFunction) => Promise<void>
export const catchAsync = (controller: Function1) => {
    return (req: Request, res: Response, next: NextFunction) => {
        controller(req, res, next).catch(next)
    }
}