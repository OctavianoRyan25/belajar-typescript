import { User, Post, Prisma } from '@prisma/client';

export interface PostInterface {
    findAll(): Promise<Post[]>;
    findById(id: number): Promise<Post | null>;
    create(post: Prisma.PostCreateInput): Promise<Post>;
    update(id: number, post: Prisma.PostCreateInput): Promise<Post>;
    delete(id: number): Promise<Post>;
}