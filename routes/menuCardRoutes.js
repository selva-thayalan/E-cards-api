import express from "express";

import { getMenus, postMenu } from "../controllers/menuCardController.js";

const router = express.Router();

router.route('/').get(getMenus).post(postMenu);


export default router;