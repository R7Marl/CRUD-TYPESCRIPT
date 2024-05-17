import { Request, Response } from "express";
import { catchAsync } from "../../util/catchAsync";
import { getAllAppoitments, getAppoitmentById, createAppoitment, cancelAppoitment } from "../../services/turnService";
export const getAppoitments = catchAsync(async(req: Request, res: Response) => {
    const id = parseInt(req.params.id, 10);
    const appoitments = await getAllAppoitments(id);
    res.status(200).send(appoitments);
})
export const getAppoitment = catchAsync(async(req: Request, res: Response) => {
    const id = parseInt(req.params.id, 10);
    const appoitment = await getAppoitmentById(id);
    res.status(200).send(appoitment);
})
export const scheduleAppoitment = catchAsync(async(req: Request, res: Response) => {
    const { userId, fecha, hora } = req.body;
    const newAppoitment = await createAppoitment(fecha, hora, parseInt(userId, 10));
    res.status(200).send(newAppoitment);
})
export const cancelAppoitmentController = catchAsync(async(req: Request, res: Response) => {
    const id = parseInt(req.params.id, 10);
    const userId = parseInt(req.params.userId, 10);
    const appoitment = await cancelAppoitment(id);
    res.status(200).send(await getAllAppoitments(userId));
})