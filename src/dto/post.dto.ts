// import { User } from "@prisma/client";
import { Prisma } from "@prisma/client";
export interface CreatePostDto {
    title: string;
    slug: string;
    content: string;
    published: boolean;
    authorId: number;
}

export interface UpdatePostDto {
    title?: string;
    slug?: string;
    content?: string;
    published?: boolean;
    authorId?: number;
}

export const parsePostDto = (post: CreatePostDto): Prisma.PostCreateInput => ({
    title: post.title,
    slug: post.slug,
    content: post.content,
    published: post.published,
    author: {
        connect: { id: post.authorId },
    },
});

export const parseUpdatePostDto = (user: UpdatePostDto): Prisma.PostUpdateInput => ({
    title: user.title,
    slug: user.slug,
    content: user.content,
    published: user.published,
    author: {
        connect: { id: user.authorId },
    },
});