// import { User } from "@prisma/client";
import { Prisma } from "@prisma/client";
export interface CreateUserDto {
    name: string;
    email: string;
    password: string;
}

export interface UpdateUserDto {
    name?: string;
    email?: string;
    password?: string;
}

export const parseUserDto = (user: CreateUserDto): Prisma.UserCreateInput => ({
    name: user.name,
    email: user.email,
    password: user.password,
});

export const parseUpdateUserDto = (user: UpdateUserDto): Prisma.UserUpdateInput => ({
    name: user.name,
    email: user.email,
    password: user.password,
});