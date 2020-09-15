const express = require("express");
const router = express.Router();

// Load model schema object
const Store = require('../models/Store');

let storeData = require("../data/products.json");

const fs = require("fs");
let pictures = [];

const updateStore = async () => {
    storeData = await Store.find();
    pictures = [];
    for (let [i, item] of storeData.entries()) {
        pictures.push(fs.readdirSync(__dirname + "/../public/shop/products/" + item.name));
    }
    console.log(storeData);
}

if (!process.env.OFFLINE) {
    updateStore();
}

for (let [i, item] of storeData.entries()) {
    pictures.push(fs.readdirSync(__dirname + "/../public/shop/products/" + item.name));
    router.get(`/${storeData[i].slug}`, async (req, res) => {
        if (!process.env.OFFLINE) {
            updateStore();
        }
        res.render(__dirname + "/../views/shopProduct", {storeData, index: i, "pictures": pictures[i], soldOut: true});
    });
}

router
    .route("/")
    .get( async (req, res) => {
        if (!process.env.OFFLINE) {
            updateStore();
        }
        res.render(__dirname + "/../views/shopHome", {storeData});
    });

router
    .route("/checkout")
    .get((req, res) => {
        res.render(__dirname + "/../views/shopCheckout", {storeData});
    });

module.exports = router;