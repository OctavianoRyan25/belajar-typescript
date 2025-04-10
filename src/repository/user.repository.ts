// import { User } from "../model/user.model";
import { PrismaClient, User, Prisma } from '@prisma/client';
import { UserInterface } from "../interface/user.interface";
const prisma = new PrismaClient();

export class UserRepository implements UserInterface {
    findAll(): Promise<User[]> {
        return prisma.user.findMany();
    }
    findById(id: number): Promise<User | null> {
        return prisma.user.findUnique({
            where: { id },
        });
    }
    create(user: Prisma.UserCreateInput): Promise<User> {
        return prisma.user.create({
            data: user,
        });
    }
    update(id: number, user: Prisma.UserUpdateInput): Promise<User> {
        return prisma.user.update({
            where: { id },
            data: user,
        });
    }
    delete(id: number): Promise<User> {
        return prisma.user.delete({
            where: { id },
        });
    }
}
