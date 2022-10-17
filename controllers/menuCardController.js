import asyncHandler from "express-async-handler";

import MenuCard from "../models/menuCardModel.js";
import { base64QRCode } from "../controllers/qrCodeController.js"

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
    let qrCode = await base64QRCode(menuCard.id);//For now it will generate the QR code for the id only later we need to concat  the entire URL to link the menu viewing site.
    res.status(200).json({qrCode, data: menuCard});
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

const deleteMenu = asyncHandler(async (req, res) => {
    let id = req.params.id;
    console.log(`Deleting the menu for id: ${id}`);
    const menuCard = await MenuCard.findById(id);
    if(!menuCard){
        console.log(`Trying to delete a menu that doesn't exist in the DB for the id: ${id}`.red);
        res.status(501);
        throw new Error("Menu not found to delete!");
    }
    menuCard.remove();
    res.status(200).json({id});
});

export {
    getMenu,
    getMenus,
    postMenu,
    updateMenu,
    deleteMenu
};