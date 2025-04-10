import { Request, Response } from 'express';
import { UserUseCase } from '../usecase/user.usecase';
import {successResponse, errorResponse} from '../util/parse-response';
export class UserService{
    constructor(private userUseCase:UserUseCase){}

    getAllUsers = async (req: Request, res: Response) => {
        try {
            const users = await this.userUseCase.findAll();
            res.status(200).json(successResponse(users, 'Users fetched successfully'));
        } catch (error) {
            res.status(500).json(errorResponse('Failed to fetch users'));
        }
    }

    creteUser = async (req: Request, res: Response) => {
        try {
            const user = await this.userUseCase.create(req.body);
            res.status(201).json(successResponse(user, 'User created successfully'));
        } catch (error) {
            res.status(500).json(errorResponse('Failed to create user'));
        }
    }
}


