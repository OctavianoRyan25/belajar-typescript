import { Router } from 'express';
import { PostRepository } from '../repository/post.repository';
import { PostUseCase } from '../usecase/post.usecase';
import { PostService } from '../service/post-service';

const router = Router();
const postRepository = new PostRepository();
const postUseCase = new PostUseCase(postRepository);
const postService = new PostService(postUseCase);

router.get('/', postService.getAllPosts);
router.post('/', postService.cretePost);

export default router;