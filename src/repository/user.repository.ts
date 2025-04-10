// import { User } from "../model/user.model";
import { PrismaClient, User } from '@prisma/client';
const prisma = new PrismaClient();

export class UserRepository {
    findAll(): Promise<User[]> {
        return prisma.user.findMany();
    }
    findById(id: number): Promise<User | null> {
        return prisma.user.findUnique({
            where: { id },
        });
    }
    create(user: User): Promise<User> {
        return prisma.user.create({
            data: user,
        });
    }
    update(id: number, user: User): Promise<User> {
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
