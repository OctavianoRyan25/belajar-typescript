import { UserRepository } from '../repository/user.repository';
import { CreateUserDto, parseUserDto } from '../dto/user.dto';
import { User } from "@prisma/client";
import { hashPass, comparePass } from '../helper/hash';
import { generateToken } from '../helper/auth';

export class AuthUseCase {
    constructor(private userRepository: UserRepository) {}

    async register(user: CreateUserDto): Promise<User> {
        const parsedUser = parseUserDto(user);

        try {
            parsedUser.password = await hashPass(user.password);
            return await this.userRepository.create(parsedUser);
        } catch (error: any) {
            throw new Error(`Error creating user: ${error.message}`);
        }
    }

    async login(email: string, password: string): Promise<string> {
        const user = await this.userRepository.getByEmail(email);
        if (!user) {
            throw new Error("User not found");
        }
        
        if (!user.password){
            throw new Error("Password not set for this user");
        }

        const isPasswordValid = await comparePass(password, user.password);
        if (!isPasswordValid) {
            throw new Error("Invalid password");
        }

        const payload = {
            _id: user.id,
            email: user.email,
        };

        const token = generateToken(payload);
        return token;
    }
}