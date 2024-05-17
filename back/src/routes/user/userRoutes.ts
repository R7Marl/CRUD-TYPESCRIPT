import { Router } from "express";
import { getUsers, getUsersById, loginUser,  registerUser} from "../../controllers/userControllers/userController"; 
import { registerMiddle, loginMiddle } from "../../middlewares";
const router = Router();
router.get('/', getUsers);
router.get('/:id', getUsersById);
router.post('/login', loginMiddle, loginUser);
router.post('/register', registerMiddle, registerUser);
export default router;