import express from "express";
import {createPost , getPosts} from "../controllers/postController"

const router = express.Router();

router.route('/')
      .get(getPosts)
      .post(createPost);

export default router       

    
