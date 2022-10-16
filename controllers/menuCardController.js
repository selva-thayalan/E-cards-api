import asyncHandler from "express-async-handler";

import MenuCard from "../models/menuCardModel.js";


const getMenus = asyncHandler(async (req, res) => {
    const menuCards = await MenuCard.find();
    res.json(menuCards);
});

const postMenu = asyncHandler(async (req, res) => {
    let {name, items} = req.body;
    const menuCard = await MenuCard.create({name, items})
    console.log(`A new menu has added for: ${name}`);
    res.status(200).json(menuCard);
});


export {
    getMenus,
    postMenu
};