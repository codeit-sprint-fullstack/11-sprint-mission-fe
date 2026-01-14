import express from 'express';

export const itemRouter = express.Router();

itemRouter.get('/', (req, res) => {
  res.json({ items: [] });
});

itemRouter.post('/items', (req, res) => {
  const { name, email } = req.body;
  res.json({ message: '상품 생성됨', name, email });
});

itemRouter.patch('/items/:id', (req, res) => {
  res.json({ message: `상품 ${req.params.id} 업데이트` });
});

itemRouter.delete('/items/:id', (req, res) => {
  res.json({ message: `상품 ${req.params.id} 삭제` });
});

itemRouter.get('/:itemId/posts/:postId', (req, res) => {
  const { itemId, postId } = req.params;
  res.json({ itemId, postId });
});
