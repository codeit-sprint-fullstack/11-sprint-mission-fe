import { success } from 'zod';
import { HttpException } from '../errors/httpException';

export const errorHandler = (error, req, res, _next) => {
  console.error('error message', error);
  if (error instanceof HttpException) {
    return res.status(error.statusCode).json({
      success: false,
      message: error.message,
    });
  }

  return res.status(500).json({
    success: false,
    message: 'Internal Server Error',
  });
};
