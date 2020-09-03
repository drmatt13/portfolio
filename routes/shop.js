// import in from fetch()
const storeData = {
    "item 1": {
        "price": '10.00',
        "sizeList": true,
        "size": {
            "s": 10,
            "m": 10,
            "l": 10,
            "xl": 10,
            "xxl": 10
        },
        "descriptionSmall": "test text",
        "descriptionLarge": "test text test text"
    },
    "item XXXXX": {
        "price": '90.00',
        "sizeList": false,
        "inventory": 0,
        "descriptionSmall": "test text",
        "descriptionLarge": "test text test text"
    },
    "item3": {
        "price": '30.00',
        "sizeList": false,
        "inventory": 99,
        "descriptionSmall": "test text",
        "descriptionLarge": "test text test text"
    },
    "item4": {
        "price": '40.00',
        "sizeList": true,
        "size": {
            "s": 10,
            "m": 0,
            "l": 0,
            "xl": 10,
            "xxl": 0
        },
        "descriptionSmall": "test text",
        "descriptionLarge": "test text test text"
    },
    "item5": {
        "price": '90.00',
        "sizeList": false,
        "inventory": 0,
        "descriptionSmall": "test text",
        "descriptionLarge": "test text test text"
    }
};

const express = require("express");
const router = express.Router();

Object.keys(storeData).forEach((item, i) => {
    let route = item.replace(/ /g, "%20");
    router.get(`/${route}`, (req, res) => {
        res.render(__dirname + "/../views/shopProduct", {storeData, index: i});
    });
});

router
    .route("/")
    .get((req, res) => {
        res.render(__dirname + "/../views/shopHome", {storeData});
    });

module.exports = router;