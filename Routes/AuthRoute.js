import express from 'express';
import { loginUser, registerUser } from '../Controllers/AuthController.js';

const router = express.Router();

router.post('/register' , registerUser)
router.post('/login' , loginUser)

router.get("/" , (req , res)=>{
    return res.render("pages/hello")
})


export default router