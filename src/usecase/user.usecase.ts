import { CreateUserDto } from '../dto/user.dto';
import { User } from '../model/user.model';
export class UserUseCase{
    constructor(private userRepository: any) {}

    async findAll(): Promise<User[]> {
        return await this.userRepository.findAll();
    }

    async findById(id: number): Promise<User | null> {
        return await this.userRepository.findById(id);
    }

    async create(user: CreateUserDto): Promise<User> {
        return await this.userRepository.create(user);
    }

    async update(id: number, user: any):Promise<User> {
        return await this.userRepository.update(id, user);
    }

    async delete(id: number):Promise<boolean> {
        return await this.userRepository.delete(id);
    }
}