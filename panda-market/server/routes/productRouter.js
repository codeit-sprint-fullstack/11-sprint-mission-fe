import express from 'express';
import Product from '../models/Product.js';
import asyncHandler from '../utils/anyncHandler.js';
import { NotFoundException } from '../utils/AppError.js';
import { validatorCreateProduct } from '../middleware/validator.middleware.js';

const router = express.Router();

// 1. 목록 조회
router.get(
  '/',
  asyncHandler(async (req, res) => {
    // 주문서 읽기
    const page = Number(req.query.page) || 1;
    const pageSize = Number(req.query.pageSize) || 10;
    const orderBy = req.query.orderBy || 'recent';
    const keyword = req.query.keyword || '';

    // 검색 조건
    const searchOption = {
      $or: [
        { name: new RegExp(keyword, 'i') },
        { description: new RegExp(keyword, 'i') },
      ],
    };
    // 정렬 조건
    const sortOtion = orderBy === 'recent' ? { createdAt: -1 } : {};

    // 창고에서 가져오기
    const list = await Product.find(searchOption)
      .sort(sortOption)
      .skip((page - 1) * pageSize)
      .limit(pageSize);

    // 전체 물건 체크
    const totalCount = await Product.countDocuments(searchOption);

    // 결과 리스폰스
    res.send({ list, totalCount });
  })
);

// 2. 상품 등록
router.post(
  '/',
  validatorCreateProduct,
  asyncHandler(async (req, res) => {
    const newProduct = await Product.create(req.body);

    res.status(201).send(newProduct);
  })
);

// 3. 상세 조회
router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);

    if (!product) {
      throw new NotFoundException('상품을 찾을 수 없습니다.');
    }
    res.send(product);
  })
);

// 4. 수정
router.patch(
  '/:id',
  asyncHandler(async (req, res) => {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!product) {
      throw new NotFoundException('수정할 상품이 없습니다.');
    }
    res.send(product);
  })
);

// 5. 삭제
router.delete(
  '/:id',
  asyncHandler(async (req, res) => {
    const product = await Product.findByIdAndDelete(req.params.id);

    if (!product) {
      throw new NotFoundException('삭제할 상품이 없습니다.');
    }
    res.sendStatus(204); // 204 = 내용없음
  })
);

export default router;
