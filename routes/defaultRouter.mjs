import express from "express";

import {
  getHome
} from "../controllers/defaultController.mjs";

const router = express.Router();

router.get("/", getHome);

export default router;