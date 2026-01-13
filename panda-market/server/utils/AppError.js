export class AppError extends Error {
  constructor(message, status) {
    super(message);
    this.status = status;
  }
}

// 400 error
export class BadRequestException extends AppError {
  constructor(message) {
    super(message || '잘못된 요청입니다.', 400);
  }
}

// 404 error
export class NotFoundException extends AppError {
  constructor(message) {
    super(message || '리소스를 찾을 수 없습니다.', 404);
  }
}
