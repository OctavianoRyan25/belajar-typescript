import { PrismaClient, User, Prisma, Post } from '@prisma/client';
import { PostInterface } from '../interface/post.interface';
const prisma = new PrismaClient();

export class PostRepository implements PostInterface {
    findAll(): Promise<Post[]> {
        return prisma.post.findMany();
    }
    findById(id: number): Promise<Post | null> {
        return prisma.post.findUnique({
            where: { id },
        });
    }
    create(post: Prisma.PostCreateInput): Promise<Post> {
        return prisma.post.create({
            data: post,
        });
    }
    update(id: number, post: Prisma.UserUpdateInput): Promise<Post> {
        return prisma.post.update({
            where: { id },
            data: post,
        });
    }
    delete(id: number): Promise<Post> {
        return prisma.post.delete({
            where: { id },
        });
    }
}
