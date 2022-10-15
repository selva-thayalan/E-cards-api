import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import Color from "colors";

import { connectDB } from "./config/db.js";
import { errorHandler } from "./middleware/errorHandler.js";
import menuCards from "./routes/menuCardRoutes.js";

dotenv.config();

const PORT = process.env.PORT || 5000;

connectDB();
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/menuCards',menuCards);

app.use(errorHandler);

app.get('/',(req, res) => {
    res.send("Hai! It's the home path of the E-cards API...");
});

app.get('/dummy',(req, res) => {
    res.status(200).json({message: "Hai! It's the home path of the E-cards API..."});
});

app.listen(PORT, (req, res) => {
    console.log(`Server is running on port: ${PORT}...`);
});