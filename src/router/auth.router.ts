import { Router } from 'express';
import { UserRepository } from '../repository/user.repository';
import { AuthUseCase } from '../usecase/auth.usecase';
import { AuthService } from '../service/auth_service';

const router = Router();
const userRepository = new UserRepository();
const authUseCase = new AuthUseCase(userRepository);
const authService = new AuthService(authUseCase);

router.post('/login', authService.login);
// router.post('/', authService.creteUser);

export default router;