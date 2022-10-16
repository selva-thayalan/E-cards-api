import express from "express";

import { getMenu, getMenus, postMenu, updateMenu } from "../controllers/menuCardController.js";

const router = express.Router();

router.route('/').get(getMenus).post(postMenu);

router.route('/:id').put(updateMenu).get(getMenu);


export default router;