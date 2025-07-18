import express from 'express';
import { getPosts, createPost } from '../controllers/postController.js';

const router = express.Router();

// Health check route
router.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK', message: 'Backend is healthy 🚀' });
});

// Post routes
router.get('/', getPosts);
router.post('/', createPost);

export default router;
