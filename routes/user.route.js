import { Router } from 'express';
import registerValidation, { loginValidation } from '../middlewares/validation.middleware.js';
import { registerUser, loginUser, getAllUser, getUser, deleteUser, updateUser } from '../controller/user.controller.js';

const userRouter = Router();

userRouter.post('/register', registerValidation, registerUser);

userRouter.post('/login', loginValidation, loginUser);

userRouter.get('/', getAllUser);

userRouter.get('/:id', getUser);

userRouter.delete('/:id', deleteUser);

userRouter.patch('/:id', updateUser);

export default userRouter;
