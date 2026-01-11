import express from 'express';
import { validateProduct } from '../middlewares/validateProduct.js';
import { BadRequestException } from '../errors/badRequestException.js';
import { NotFoundException } from '../errors/notFoundException.js';
import { Product } from '../models/product.model.js';
import { ConflictException } from '../errors/conflictException.js';

export const productRouter = express.Router();


//GET /products - 모든 product 조회
// productRouter.get('/', async (req, res, next) => {
//   try {
//     const products = await Product.find();
//     res.json({ success: true, data: products, count: products.length });
//   } catch (error) {
//     next(error);
//   }
// });

productRouter.get('/', async (req, res, next) => {
  try {
    // 1️⃣ 클라이언트에서 전달된 query 읽기
    const { orderBy = 'recent', page = 1, pageSize = 10, keyword = '' } = req.query;

    // 2️⃣ 필터링 - name 또는 tags에 keyword 포함
    const filter = keyword
      ? { $or: [
          { name: { $regex: keyword, $options: 'i' } },
          { tags: { $regex: keyword, $options: 'i' } }
        ]}
      : {};

    // 3️⃣ 정렬
    const sortOption = orderBy === 'recent' 
      ? { createdAt: -1 } // 최신순
      : orderBy === 'favorite'
      ? { favoriteCount: -1 } // 인기순(필드 추가 필요)
      : { createdAt: -1 };

    // 4️⃣ 페이징 계산
    const pageNumber = parseInt(page, 10) || 1;
    const limit = parseInt(pageSize, 10) || 10;
    const skip = (pageNumber - 1) * limit;

    // 5️⃣ DB 조회
    const [totalCount, products] = await Promise.all([
      Product.countDocuments(filter),
      Product.find(filter)
        .sort(sortOption)
        .skip(skip)
        .limit(limit)
    ]);

    // 6️⃣ 응답
    res.json({
      success: true,
      data: products,
      totalCount,
      page: pageNumber,
      pageSize: limit
    });
  } catch (error) {
    next(error);
  }
});




// GET /products/:id - 특정 product 조회
  productRouter.get('/:id', async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) throw new NotFoundException('상품을 찾을 수 없습니다.');
    res.json({ success: true, data: product });
  } catch (error) {
    next(error);
  }
});

// POST /products - 새 product 생성
productRouter.post('/', validateProduct, async (req, res, next) => {
  try {

    const { name, description, price, tags } = req.body;
    // const existingUser = await Product.findOne({ email });
    // if (existingUser) {
    //   throw new ConflictException('중복된 이메일입니다.');
    // }

    const newProduct = new Product({ name, description,price, tags  });
    await newProduct.save();
    res.status(201).json({
      success: true,
      data: newProduct,
      message: '등록하신 상품이 등록되었습니다',
    });
  } catch (error) {
    next(error);
  }
});

// PUT /products/:id - 상픔 정보 업데이트
productRouter.patch('/:id', validateProduct, async (req, res, next) => {
  try {
    const { name, description, price, tags } = req.body;
    const { id: productId } = req.params;

    // const existingUser = await Product.findOne({ email, _id: { $ne: userId } });
    // if (existingUser) {
    //   throw new ConflictException('중복된 이메일입니다.');
    // }

    const updateProduct = await Product.findByIdAndUpdate(
      productId,
      { name, description, price, tags },
      { new: true }
    );

    console.log(updateProduct);
    if (!updateProduct) {
      throw new NotFoundException('등록하신 상품을 찾을 수 없습니다.');
    }

    res.json({
      success: true,
      data: updateProduct,
      message: '상품정보가 수정되었습니다',
    });
  } catch (error) {
    next(error);
  }
});

// DELETE /products/:id - 상품 삭제
productRouter.delete('/:id', async (req, res, next) => {
  try {
    const deleteProduct = await Product.findByIdAndDelete(req.params.id);
    if (!deleteProduct) {
      throw new NotFoundException('상품을 찾을 수 없습니다.');
    }

    res.json({ success: true, message: '상품이 삭제되었습니다' });
  } catch (error) {
    next(error);
  }
});

