import express from 'express'
import { createPost, deletePost, getPost, getTimelinePosts, updatePost } from '../Controllers/PostController.js';
const router = express.Router();

router.post('/' , createPost)
router.get('/:id' , getPost)
router.put('/:id' , updatePost)
router.delete('/:id' , deletePost)
router.get('/:id/timeline' , getTimelinePosts)

export default router