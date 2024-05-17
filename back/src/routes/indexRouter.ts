import { Router } from "express";
import userRoutes from "./user/userRoutes";
import appointmentsRoute from "./appointments/appointmentsRoute";
const router = Router();
router.use('/users', userRoutes);
router.use('/appointments', appointmentsRoute);
export default router;