import bcrypt = require("bcrypt");

const saltRounds = 8;

export const hashPass = async (password: string): Promise<string> => {
    const salt = await bcrypt.genSalt(saltRounds);
    try {
        return await bcrypt.hash(password, salt);
    } catch (error: any) {
        throw new Error(`Error hashing password: ${error.message}`);
    }
}

export const comparePass = async (password: string, hash: string): Promise<boolean> => {
    try {
        return await bcrypt.compare(password, hash);
    } catch (error: any) {
        throw new Error(`Error comparing password: ${error.message}`);
    }
}