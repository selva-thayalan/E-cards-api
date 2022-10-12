import express from "express";

const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json([{ name: "Zubaitha", items: [{ name: "Dosa", price: 30 }, { name: "Idly", price: 10 }, { name: "Parotta", price: 15 }] }]);
});

export default router;