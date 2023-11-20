import express from "express";
import { createPost, deletePost, getAllPost, getPost, updatePost } from "../controllers/post.js";

const router = express.Router();

// CRUD

// CREATE
router.post("/", createPost);

// READ ALL
router.get("/", getAllPost);

// READ SINGLE
router.get("/:id", getPost );

// UPDATE
router.put("/:id", updatePost );

// DELETE
router.delete("/:id", deletePost );

export default router;
