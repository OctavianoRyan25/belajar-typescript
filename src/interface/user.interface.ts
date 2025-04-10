import { User, Prisma } from '@prisma/client';

export interface UserInterface {
    findAll(): Promise<User[]>;
    findById(id: number): Promise<User | null>;
    create(user: Prisma.UserCreateInput): Promise<User>;
    update(id: number, user: Prisma.UserCreateInput): Promise<User>;
    delete(id: number): Promise<User>;
}