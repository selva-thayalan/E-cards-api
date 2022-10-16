import asyncHandler from "express-async-handler";

import MenuCard from "../models/menuCardModel.js";

const getMenu = asyncHandler(async (req, res) => {
    let id = req.params.id;
    const menuCard = await MenuCard.findById(id);
    if(!menuCard){
        console.log(`Trying to get a menu that doesn't exist in the DB for the id: ${id}`.red);
        res.status(404);
        throw new Error("Menu not found!");
    }
    res.json(menuCard);   
});

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

const updateMenu = asyncHandler(async (req, res) => {
    let id = req.params.id;
    console.log(`Menu updating for id: ${id}`);
    const menuCard = await MenuCard.findByIdAndUpdate(id, req.body);
    if(!menuCard){
        console.log(`Trying to update a menu that doesn't exist in the DB for the id: ${id}`.red);
        res.status(501);
        throw new Error("Menu not found to update!");
    }
    res.json(menuCard);    
});

export {
    getMenu,
    getMenus,
    postMenu,
    updateMenu
};