import { CreatePostDto, parsePostDto, parseUpdatePostDto } from '../dto/post.dto';
import { Post } from "@prisma/client";
import { PostRepository } from '../repository/post.repository';
import { slugify } from '../util/parse-response';
export class PostUseCase{
    constructor(private postRepository: PostRepository) {}

    async findAll(): Promise<Post[]> {
        try {
            return await this.postRepository.findAll();
        } catch (error: any) {
            throw new Error(`Error fetching posts: ${error.message}`);
        }
    }

    async findById(id: number): Promise<Post | null> {
        if (!id) {
            throw new Error("ID is required to find a user.");
        }
        const post = await this.postRepository.findById(id);
        if (!post) {
            throw new Error(`Post with ID ${id} not found.`);
        }
        return post;
    }

    async create(post: CreatePostDto): Promise<Post> {
        const parsedPost = parsePostDto(post);
        parsedPost.slug = slugify(post.title);
        try {
            return await this.postRepository.create(parsedPost);
        }
        catch (error: any) {
            throw new Error(`Error creating post: ${error.message}`);
        }

        // return await this.postRepository.create(parsedUser);
    }

    async update(id: number, post: any):Promise<Post> {
        return await this.postRepository.update(id, post);
    }

    async delete(id: number):Promise<Post> {
        return await this.postRepository.delete(id);
    }
}