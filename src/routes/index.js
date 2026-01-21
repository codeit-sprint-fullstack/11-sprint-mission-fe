import expres from 'express';
import { postRouter } from './posts.js';

export const router = expres.Router();

router.use('/posts', postRouter);
