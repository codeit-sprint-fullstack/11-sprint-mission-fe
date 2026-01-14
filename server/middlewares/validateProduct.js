import mongoose from 'mongoose';
import { BadRequestException } from '../errors/badRequestException.js';

export const validateProduct = (req, res, next) => {
  try {
      const productId = req.params.id || req.query.id;

      // id 검증 (PATCH / DELETE)
      if (req.method !== 'POST') {
        if (!productId) {
          throw new BadRequestException('상품 id가 필요합니다.');
        }

        if (!mongoose.Types.ObjectId.isValid(productId)) {
          throw new BadRequestException('유효하지 않은 상품 id입니다.');
        }
      }

      // body 검증
      if (!req.body || Object.keys(req.body).length === 0) {
        throw new BadRequestException('요청 본문이 비어 있습니다.');
      }

      const { name, description, price, tags } = req.body;

      // POST 필수값
      if (req.method === 'POST') {
        if (!name || !description || price === undefined) {
          throw new BadRequestException('name, description, price는 필수입니다.');
        }
      }

      // 타입 검증
      if (price !== undefined && (typeof price !== 'number' || price < 0)) {
        throw new BadRequestException('price는 0 이상의 숫자여야 합니다.');
      }

      if (tags !== undefined) {
        if (!Array.isArray(tags)) {
          throw new BadRequestException('tags는 배열이어야 합니다.');
        }
        if (!tags.every(tag => typeof tag === 'string')) {
          throw new BadRequestException('tags는 문자열 배열이어야 합니다.');
        }
      }
  next();
  } catch (error) {
    next(error);
    return;
  }
};