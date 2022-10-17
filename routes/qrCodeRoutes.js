import express from "express";
import asyncHandler from "express-async-handler";

import { base64QRCode } from "../controllers/qrCodeController.js";

const router = express.Router();

router.get("/:data", asyncHandler(async (req, res) => {
    let qrCode = await base64QRCode(req.params.data);
    res.status(200).send(qrCode);
}));


export default router;