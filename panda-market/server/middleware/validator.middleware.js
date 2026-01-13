import { AppError, BadRequestException } from '../utils/AppError';

export function validatorCreateProduct(req, res, next) {
  const { name, description, price } = req.body;

  try {
    if (!name || name.trim() === '') {
      throw new BadRequestException('상품 이름은 필수입니다.');
    }

    if (!description || description.trim().length <= 10) {
      throw new BadRequestException('상품 설명은 10글자 이상이어야 합니다.');
    }

    if (!price || price <= 1) {
      throw new BadRequestException('가격은 1원보다 커야 합니다.');
    }

    next();
  } catch (error) {
    next(error);
  }
}
