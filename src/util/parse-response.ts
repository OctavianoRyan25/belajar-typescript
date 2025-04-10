import {ApiResponse} from '../res/response';
export const successResponse = <T>(data: T, message = "Success"): ApiResponse<T> => {
    return {
      success: true,
      message,
      data,
    };
  };
  
  export const errorResponse = <T>(error: string, message = "Error"): ApiResponse<T> => {
    return {
      success: false,
      message,
      error,
    };
  };