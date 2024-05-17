import { Router } from "express";
import { getAppoitments, getAppoitment, cancelAppoitmentController, scheduleAppoitment } from "../../controllers/turnControllers/turnControllers";
const router = Router();
router.get('/:id', getAppoitments);
router.get('/:id', getAppoitment);
router.post('/create', scheduleAppoitment);
router.put('/cancel/:id', cancelAppoitmentController);
export default router;