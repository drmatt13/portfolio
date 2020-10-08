const express = require("express");
const router = express.Router();
const routes = [];
const apps = [];
const files = [];
const fs = require("fs");
const bufferToString = (data) => {
    return Buffer.from(data).toString();
}
const getData = async (i, j, route1, route2, file) => {
    const extension = file.split('.')[1];
    if (extension == 'html') {
        const data = await fs.promises.readFile(__dirname + `/../public/apps/${route1}/${route2}/` + file);
        files[i][j].html = bufferToString(data);
    } else if (extension == 'css') {
        const data = await fs.promises.readFile(__dirname + `/../public/apps/${route1}/${route2}/` + file);
        files[i][j].css = bufferToString(data);
    } else if (extension == 'js') {
        const data = await fs.promises.readFile(__dirname + `/../public/apps/${route1}/${route2}/` + file);
        files[i][j].js = bufferToString(data);
    } else {
        return false
    }
    return true;
}
fs.readdirSync(__dirname + "/../public/apps").forEach((route, i) => {
    routes.push(route);
    apps.push([]);
    files.push([]);
    fs.readdirSync(__dirname + `/../public/apps/${route}`).forEach((app, j) => {
        apps[i].push(app);
        files[i].push({});
        fs.readdirSync(__dirname + `/../public/apps/${route}/${app}`).forEach((file, k) => {
            getData(i, j, route, app, file)
                .then(data => {
                    // when last
                    if (true) {
                        // apps.forEach((app, i) => {
                        //     let route = app.split('.')[0];
                        //     route = route.replace(/ /g, "%20");
                        //     router.get(`/${route}`, (req, res) => {
                        //         res.render(__dirname + "/../views/portfolio/template", {
                        //             title: app,
                        //             appHtml: html[i],
                        //             appCss: css[i],
                        //             appJs: js[i]
                        //         });
                        //     });
                        // });
                        // router
                        //     .route("/")
                        //         .get((req, res) => {
                        //             res.render(__dirname + "/../views/portfolio/portfolioHome", {data: apps});
                        //         });
                    }
                });
        });
    });
});

module.exports = router;