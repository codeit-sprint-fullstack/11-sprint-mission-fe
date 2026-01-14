import express from 'express';
import { itemRouter } from './itmes';
import { searchRouter } from './search';

export const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'Hello Express!',
    timestamp: new Date().toISOString(),
  });
});

router.use('/items', itemRouter);
router.use('/search', searchRouter);
