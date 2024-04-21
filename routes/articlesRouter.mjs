import express from "express";

import {
  addArticles,
  getArticles,
  updateArticle,
  deleteArticle,
} from "../controllers/articlesController.mjs";

const router = express.Router();

router.post("/", addArticles);
router.get("/articles", getArticles);
router.patch("/articles/:id", updateArticle);
router.delete("/articles/:id", deleteArticle);

export default router;
