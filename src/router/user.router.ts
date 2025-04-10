import { Router } from 'express';
import { UserService } from '../service/user-service';
import { UserUseCase } from '../usecase/user.usecase';
import { UserRepository } from '../repository/user.repository';

const router = Router();
const userRepository = new UserRepository();
const userUseCase = new UserUseCase(userRepository);
const userService = new UserService(userUseCase);

router.get('/', userService.getAllUsers);
router.post('/', userService.creteUser);

export default router;