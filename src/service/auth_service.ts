import { AuthUseCase } from "../usecase/auth.usecase";
import { errorResponse, successResponse } from "../util/parse-response";

export class AuthService {
    constructor(private authUseCase: AuthUseCase) {}

    login = async (req: any, res: any) => {
        try {
            const { email, password } = req.body;
            const token = await this.authUseCase.login(email, password);
            res.status(200).json(successResponse(token, "Login successful"));
        } catch (error: any) {
            res.status(500).json(errorResponse("Login failed", error.message, error.code));
        }
    }
}