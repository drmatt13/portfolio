// color && / || size
// descriptionSmall

    // {
    //     "name": "shirt1",
    //     "price": 100.00,
    //     "product": "shirt",
    //     "shirt": {
    //         "s": 10,
    //         "m": 10,
    //         "l": 10,
    //         "xl": 10,
    //         "xxl": 10
    //     },
    //     "descriptionSmall": "test small description",
    //     "descriptionLarge": "test large description"
    // },
    // {
    //     "name": "leggings5",
    //     "price": 1000.45,
    //     "product": "leggings",
    //     "pants": {
    //         "s": 6,
    //         "m": 5,
    //         "l": 9,
    //         "xl": 2,
    //         "xxl": 6
    //     },
    //     "descriptionSmall": "test small description",
    //     "descriptionLarge": "test large description"
    // },
    // {
    //     "name": "item3",
    //     "price": 77.14,
    //     "product": "item",
    //     "item": 99,
    //     "descriptionSmall": "test small description",
    //     "descriptionLarge": "test large description"
    // },

const storeData = {
    "Fruity Pebbles": {
        "price": '10.00',
        "sizeList": true,
        "size": {
            "s": 10,
            "m": 10,
            "l": 10,
            "xl": 10,
            "xxl": 10
        },
        "color": false,
        "descriptionLarge": "One variety, created by breeders Alien Genetics, was marketed as Fruity Pebbles OG, an April 2012 limited edition. Packs of these special Fruity Pebbles OG seeds sold for $1,000-$1,500 each. The mother, a cross of Green Ribbon and Granddaddy Purps, was bred with a strain crossed from Tahoe OG and Alien Kush."
    },
    "Girl Scout Cookies": {
        "price": '90.00',
        "sizeList": false,
        "color": false,
        "inventory": 0,
        "descriptionLarge": "By crossing two super popular strains, the underground breeding collective Cookie Family (or Cookie Fam) has been able to elevate THC levels to a whopping average of 25% to 28% and boast CBD and CBN contents to 1% as well. If that wasn’t enough to entice you, then the flavor and aroma will definitely draw you in. At first opening of the bag the sweet, earthy aromas hit your nose and only grow sweeter as you break apart the buds."
    },
    "Hindu Kush": {
        "price": '30.00',
        "sizeList": false,
        "color": false,
        "inventory": 99,
        "descriptionLarge": "One of the original landrace strains that precipitated the popularization of cannabis throughout the world, Hindu Kush is a potent pure indica. It is indigenous to the Hindu Kush mountain chain that forms the border between Pakistan and Afghanistan."
    },
    "Purple Dream": {
        "price": '40.00',
        "sizeList": true,
        "size": {
            "s": 0,
            "m": 0,
            "l": 0,
            "xl": 0,
            "xxl": 0
        },
        "color": false,
            "xl": 0,
            "descriptionLarge": "A California medical scene cut that is a classic, Purple Dream is thought to have come from the Mendo Purps line. It's a slow-vegging plant that almost always turns a deep shade of purple by the time it's finished. It's the purple plant of choice for many, as it's known for being more potent and flavorful than many of the others. Green Crack has a classically indica bud structure, with dense buds that are more small and clustered than chunky. The leaves are pale green to yellow, although the pigments in some phenotypes can cause some leaves to be streaked with purple when plants are exposed to cold during the growing process. Rust-colored pistils stand out against the colorful flowers. The buds are also coated in milky-white trichomes, giving them a sticky texture and a glistening appearance."
    },
    "Green Crack": {
        "price": '90.00',
        "sizeList": false,
        "color": false,
        "inventory": 0,
        "descriptionLarge": "Green Crack has a classically indica bud structure, with dense buds that are more small and clustered than chunky. The leaves are pale green to yellow, although the pigments in some phenotypes can cause some leaves to be streaked with purple when plants are exposed to cold during the growing process. Rust-colored pistils stand out against the colorful flowers. The buds are also coated in milky-white trichomes, giving them a sticky texture and a glistening appearance."
    }
};

const storeData2 = [
    {
        "name": "Fruity Pebbles",
        "price": 10.00,
        "product": "item",
        "item": 40,
        "descriptionSmall": "test small description",
        "descriptionLarge": "One variety, created by breeders Alien Genetics, was marketed as Fruity Pebbles OG, an April 2012 limited edition. Packs of these special Fruity Pebbles OG seeds sold for $1,000-$1,500 each. The mother, a cross of Green Ribbon and Granddaddy Purps, was bred with a strain crossed from Tahoe OG and Alien Kush."
    },
    {
        "name": "Girl Scout Cookies",
        "price": 10.00,
        "product": "item",
        "item": 60,
        "descriptionSmall": "test small description",
        "descriptionLarge": "By crossing two super popular strains, the underground breeding collective Cookie Family (or Cookie Fam) has been able to elevate THC levels to a whopping average of 25% to 28% and boast CBD and CBN contents to 1% as well. If that wasn’t enough to entice you, then the flavor and aroma will definitely draw you in. At first opening of the bag the sweet, earthy aromas hit your nose and only grow sweeter as you break apart the buds."
    },
    {
        "name": "Hindu Kush",
        "price": 30.00,
        "product": "item",
        "item": 25,
        "descriptionSmall": "test small description",
        "descriptionLarge": "One of the original landrace strains that precipitated the popularization of cannabis throughout the world, Hindu Kush is a potent pure indica. It is indigenous to the Hindu Kush mountain chain that forms the border between Pakistan and Afghanistan."
    },
    {
        "name": "Purple Dream",
        "price": 25.00,
        "product": "item",
        "item": 9,
        "descriptionSmall": "test small description",
        "descriptionLarge": "A California medical scene cut that is a classic, Purple Dream is thought to have come from the Mendo Purps line. It's a slow-vegging plant that almost always turns a deep shade of purple by the time it's finished. It's the purple plant of choice for many, as it's known for being more potent and flavorful than many of the others. Green Crack has a classically indica bud structure, with dense buds that are more small and clustered than chunky. The leaves are pale green to yellow, although the pigments in some phenotypes can cause some leaves to be streaked with purple when plants are exposed to cold during the growing process. Rust-colored pistils stand out against the colorful flowers. The buds are also coated in milky-white trichomes, giving them a sticky texture and a glistening appearance."
    },
    {
        "name": "Green Crack",
        "price": 60.00,
        "product": "item",
        "item": 3,
        "descriptionSmall": "test small description",
        "descriptionLarge": "Green Crack has a classically indica bud structure, with dense buds that are more small and clustered than chunky. The leaves are pale green to yellow, although the pigments in some phenotypes can cause some leaves to be streaked with purple when plants are exposed to cold during the growing process. Rust-colored pistils stand out against the colorful flowers. The buds are also coated in milky-white trichomes, giving them a sticky texture and a glistening appearance."
    }
];

const express = require("express");
const router = express.Router();

// get mongoose
// const mongoose = require('mongoose');

// Load model schema object
const Store = require('../models/Store');

const fs = require("fs");
let picturesArray = [];
let outOfStock = [];

Object.keys(storeData).forEach((item, i) => {
    picturesArray.push(fs.readdirSync(__dirname + "/../public/shop/products/" + item));
    let quantity = 0;
    if (storeData[item].sizeList == true) {
        for (let key of Object.keys(storeData[item].size)) {
            quantity += storeData[item].size[key];
        }
    } else {
        quantity += storeData[item].inventory;
    }
    if (quantity == 0) {
        outOfStock.push(true);
    } else {
        outOfStock.push(false);
    }
    // slugify below
    let route = item.replace(/ /g, "%20");
    router.get(`/${route}`, (req, res) => {
        res.render(__dirname + "/../views/shopProduct", {storeData, index: i, pictures: picturesArray[i], soldOut: outOfStock[i]});
    });
});

router
    .route("/")
    .get( async (req, res) => {
        const data = await Store.find();
        console.log(data);
        res.render(__dirname + "/../views/shopHome", {storeData, soldOut: outOfStock});
    });

router
    .route("/checkout")
    .get((req, res) => {
        res.render(__dirname + "/../views/shopCheckout", {storeData});
    });

module.exports = router;