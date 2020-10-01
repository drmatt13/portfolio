const express = require("express");
const router = express.Router();

const fs = require("fs");
const routes = fs.readdirSync(__dirname + "/../public/scripts/notes");

routes.forEach((route, i) => {
    routes[i] = route.split('.')[0];
    route = routes[i].replace(/ /g, "%20");
    router.get(`/${route}`, (req, res) => {
        res.render(__dirname + "/../views/notes/notesPage", {'route': `${route}`});
    });
});

router
    .route("/")
    .get((req, res) => {
        res.render(__dirname + "/../views/notes/notesHome", {data: routes});
    });

module.exports = router;