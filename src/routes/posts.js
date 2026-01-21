import express from 'express';
import { Post } from '../models/post.model';
import { NotFoundException } from '../errors/notFoundException';

export const postRouter = express.Router();

postRouter.post('/', async (req, res, next) => {
  try {
    const { name, description, price, tags } = req.body;

    const newPost = new Post({ name, description, price, tags });
    await newPost.save();
    res
      .status(201)
      .json({
        success: true,
        data: newPost,
        message: '게시글이 생성되었습니다.',
      });
  } catch (error) {
    next(error);
    return;
  }
});

postRouter.get('/', async (req, res, next) => {
  try {
    const posts = await Post.find();
    res.json({ success: true, data: posts, count: posts.length });
  } catch (error) {
    next(error);
    return;
  }
});

postRouter.get('/:id', async (req, res, next) => {
  try {
    const post = await post.parseInt(req.params.id);
    if (!post) throw new NotFoundException('사용자를 찾을 수 없습니다.');

    res.json({
      success: true,
      data: post,
    });
  } catch (error) {
    next(error);
    return;
  }
});


postRouter.get('/search', (req, res) => {
  const { q, limit } = req.query;
  res.json({ query: q, limit: Number(limit) });
});

postRouter.put('/:id', (req, res) => {
  res.json({ message: `게시글 ${req.params.id} 업데이트` });
});

postRouter.delete('/:id', (req, res) => {
  res.json({ message: `게시글 ${req.params.id} 삭제` });
});
