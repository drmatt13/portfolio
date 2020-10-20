const express = require("express");
const router = express.Router();

const fs = require("fs");
const routes = [];
const noteRoutes = [];
const notes = [];
fs.readdirSync(__dirname + "/../public/scripts/notes").forEach((route, i) => {
    routes.push(route);
    noteRoutes.push([]);
    notes.push([]);
    let directory = fs.readdirSync(__dirname + `/../public/scripts/notes/${route}`);


    


    directory.forEach(note => {
        let noteRoute;
        noteDeconstruct = note.split('.');
        if (['1', '2', '3', '4', '5', '6', '7', '8', '9'].includes(noteDeconstruct[0].charAt(0))) {
            noteRoute = noteDeconstruct[1].trim();
            note = noteDeconstruct[0].concat("." + noteDeconstruct[1]);
        } else {
            noteRoute = noteDeconstruct[0];
            note = note.split('.')[0];
        }
        console.log(note);
        noteRoutes[i].push(noteRoute);
        notes[i].push(note);
        router.get(`/${route.replace(/ /g, "-")}/${noteRoute.replace(/ /g, "-")}`, (req, res) => {
            res.render(__dirname + "/../views/notes/notesPage", {'index': i, routes, note});
        });
    });
});
router
    .route("/")
        .get((req, res) => {
            res.render(__dirname + "/../views/notes/notesHome", {routes, noteRoutes, notes});
        });
console.log("/notes loaded".cyan.bold.underline);

module.exports = router;