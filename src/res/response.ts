export interface ApiResponse<T> {
    success: boolean;
    message: string;
    data?: T;
    error?: string;
    error_code?: number;
}