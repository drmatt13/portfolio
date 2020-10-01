const express = require("express");
const router = express.Router();

// Load model schema object
const Store = require('../models/Store');

let storeData = require("../data/products.json");

let checked = true;

const fs = require("fs");
let pictures = [];

const updateStore = async () => {
    try {
        storeData = await Store.find();
        pictures = [];
        for (let [i, item] of storeData.entries()) {
            pictures.push(fs.readdirSync(__dirname + "/../public/shop/products/" + item.name));
    }
    checked = true;
    } catch(error) {
        console.log(error.red);
    }
}


if (!process.env.OFFLINE) {
    updateStore();
    checked = false;
}

// product routes ghetto

const createRoutes = () => {
    if (!checked) setTimeout(createRoutes, 100);
    if (checked) {
        for (let [i, item] of storeData.entries()) {
            pictures.push(fs.readdirSync(__dirname + "/../public/shop/products/" + item.name));

            router.get(`/${storeData[i].slug}`, async (req, res) => {
                if (!process.env.OFFLINE) {
                    updateStore();
                }
                res.render(__dirname + "/../views/shop/shopProduct", {storeData, index: i, "pictures": pictures[i]});
            });
        }
    }
}
createRoutes();

// template
router
    .route("/template")
    .get( async (req, res) => {
        if (!process.env.OFFLINE) {
            updateStore();
        }
        res.render(__dirname + "/../views/shop/shopTemplate", {storeData, index: 0, "pictures": pictures[0]});
    });

// home
router
    .route("/")
    .get( async (req, res) => {
        if (!process.env.OFFLINE) {
            updateStore();
        }
        res.render(__dirname + "/../views/shop/shopHome", {storeData});
    });

// checkout
router
    .route("/checkout")
    .get((req, res) => {
        res.render(__dirname + "/../views/shop/shopCheckout", {storeData});
    });

// api
router
    .route("/getStoreData")
    .get((req, res) => {
        res.send(JSON.stringify(storeData))
    });

module.exports = router;