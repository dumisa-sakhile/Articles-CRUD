import express from "express";

import { getHome, getNew } from "../controllers/defaultController.mjs";

const router = express.Router();

router.get("/", getHome);
router.get("/articles/new", getNew);

export default router;