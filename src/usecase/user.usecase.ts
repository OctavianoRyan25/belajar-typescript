import { CreateUserDto, parseUserDto } from '../dto/user.dto';
import { User } from "@prisma/client";
import { UserRepository } from '../repository/user.repository';
export class UserUseCase{
    constructor(private userRepository: UserRepository) {}

    async findAll(): Promise<User[]> {
        try {
            return await this.userRepository.findAll();
        } catch (error: any) {
            throw new Error(`Error fetching users: ${error.message}`);
        }
    }

    async findById(id: number): Promise<User | null> {
        if (!id) {
            throw new Error("ID is required to find a user.");
        }
        const user = await this.userRepository.findById(id);
        if (!user) {
            throw new Error(`User with ID ${id} not found.`);
        }
        return user;
    }

    async create(user: CreateUserDto): Promise<User> {
        const parsedUser = parseUserDto(user);

        try {
            return await this.userRepository.create(parsedUser);
        }
        catch (error: any) {
            throw new Error(`Error creating user: ${error.message}`);
        }

        // return await this.userRepository.create(parsedUser);
    }

    async update(id: number, user: any):Promise<User> {
        return await this.userRepository.update(id, user);
    }

    async delete(id: number):Promise<User> {
        return await this.userRepository.delete(id);
    }
}