import { Request, Response } from 'express';
import { PostUseCase } from '../usecase/post.usecase';
import {successResponse, errorResponse} from '../util/parse-response';
export class PostService{
    constructor(private postUseCase:PostUseCase){}

    getAllPosts = async (req: Request, res: Response) => {
        try {
            const posts = await this.postUseCase.findAll();
            res.status(200).json(successResponse(posts, 'Posts fetched successfully'));
        } catch (error: any) {
            res.status(500).json(errorResponse('Failed to fetch posts', error.message, error.code));
        }
    }

    cretePost = async (req: Request, res: Response) => {
        try {
            const post = await this.postUseCase.create(req.body);
            res.status(201).json(successResponse(post, 'Post created successfully'));
        } catch (error: any) {
            res.status(500).json(errorResponse('Failed to create post', error.message, error.code));
        }
    }
}


