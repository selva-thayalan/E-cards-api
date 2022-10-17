import express from "express";

import { deleteMenu, getMenu, getMenus, postMenu, updateMenu } from "../controllers/menuCardController.js";

const router = express.Router();

router.route('/').get(getMenus).post(postMenu);

router.route('/:id').put(updateMenu).get(getMenu).delete(deleteMenu);


export default router;