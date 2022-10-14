const menuCards = [{ name: "Zubaitha", items: [{ name: "Dosa", price: 30 }, { name: "Idly", price: 10 }, { name: "Parotta", price: 15 }] }];

const getMenus = (req, res) => {
    res.json(menuCards);
};

const postMenu = (req, res) => {
    console.log(`A new menu has added for: ${req.body.name}`);
    menuCards.push(req.body);
    res.status(200).json(req.body);
};


export {
    getMenus,
    postMenu
};