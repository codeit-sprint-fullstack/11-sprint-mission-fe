import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import productRouter from './routes/productRouter.js';
import errorHanlder from './middleware/errorHandler.middleware';

dotenv.config(); // 비밀번호 가져오기

const app = express();

// 기본 규칙
app.use(cors());
app.use(express.json());

// 몽고DB 연결
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('DB 연결 성공!'))
  .catch((err) => console.log('DB 연결 실패..', err));

app.use('/products', productRouter);

app.use(errorHanlder);

app.listen(process.env.PORT || 3000, () => {
  console.log('판다마켓 서버가 3000번 포트에서 열림');
});
