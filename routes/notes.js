const express = require("express");
const router = express.Router();

const fs = require("fs");
const routes = [];
const notes = [];
fs.readdirSync(__dirname + "/../public/scripts/notes").forEach((route, i) => {
    routes.push(route);
    notes.push([]);
    fs.readdirSync(__dirname + `/../public/scripts/notes/${route}`).forEach(note => {
        note = note.split('.')[0];
        notes[i].push(note);
        router.get(`/${route.replace(/ /g, "-")}/${note.replace(/ /g, "-")}`, (req, res) => {
            res.render(__dirname + "/../views/notes/notesPage", {'index': i, routes, note});
        });
    });
});

router
    .route("/")
        .get((req, res) => {
            res.render(__dirname + "/../views/notes/notesHome", {'routes': routes, 'notes': notes});
        });

module.exports = router;