import express from "express";

import { getMenus, postMenu, updateMenu } from "../controllers/menuCardController.js";

const router = express.Router();

router.route('/').get(getMenus).post(postMenu);

router.route('/:id').put(updateMenu);


export default router;