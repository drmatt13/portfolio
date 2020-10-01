const express = require("express");
const router = express.Router();

let html = [];
let css = [];
let js = [];

const fs = require("fs");
const apps = fs.readdirSync(__dirname + "/../public/apps");

const bufferToString = (data) => {
    return Buffer.from(data).toString();
}

apps.forEach((app, i) => {
    let dir = __dirname + "/../public/apps/" + app;
    let files = fs.readdirSync(dir);
    files.forEach((file, j) => {
        fs.readFile((dir + "/" + file), (err, data) => {
            if (err) {
                throw err; 
            }
            switch (file.split('.')[1]) {
                case 'html':
                    html.push(bufferToString(data));
                    break;
                case 'css':
                    css.push(bufferToString(data));
                    break;
                case 'js':
                    js.push(bufferToString(data));
                    break;
                default:
                    break;
            }
        });
    });
});

apps.forEach((app, i) => {
    let route = app.split('.')[0];
    route = route.replace(/ /g, "%20");
    router.get(`/${route}`, (req, res) => {
        res.render(__dirname + "/../views/portfolio/template", {
            title: app,
            appHtml: html[i],
            appCss: css[i],
            appJs: js[i]
        });
    });
});

router
    .route("/")
    .get((req, res) => {
        res.render(__dirname + "/../views/portfolio/portfolioHome", {data: apps});
    });

module.exports = router;