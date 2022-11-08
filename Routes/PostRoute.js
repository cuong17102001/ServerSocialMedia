import express from 'express'
import { createPost, deletePost, getPost, getTimelinePosts, likePost, updatePost } from '../Controllers/PostController.js';
const router = express.Router();

router.post('/' , createPost)
router.get('/:id' , getPost)
router.put('/:id' , updatePost)
router.delete('/:id' , deletePost)
router.get('/:id/timeline' , getTimelinePosts)
router.put('/:id/like' , likePost)

export default router