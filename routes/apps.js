const express = require("express");
const router = express.Router();
const routes = [];
const apps = [];
const files = [];
const fs = require("fs");
const bufferToString = (data) => {
    return Buffer.from(data).toString();
}
const writeData = async (i, j, route, app, file) => {
    const extension = file.split('.')[1];
    if (extension == 'html') {
        const data = await fs.promises.readFile(__dirname + `/../public/apps/${route}/${app}/` + file);
        files[i][j].html = bufferToString(data);
    } else if (extension == 'css') {
        const data = await fs.promises.readFile(__dirname + `/../public/apps/${route}/${app}/` + file);
        files[i][j].css = bufferToString(data);
    } else if (extension == 'js') {
        const data = await fs.promises.readFile(__dirname + `/../public/apps/${route}/${app}/` + file);
        files[i][j].js = bufferToString(data);
    } else {
        promiseEndCount++;
        return false;
    }
    files[i][j].route = route;
    promiseEndCount++;
    return true;
}
let promiseStartCount = 0;
let promiseEndCount = 0;
fs.readdirSync(__dirname + "/../public/apps").forEach((route, i) => {
    routes.push(route);
    apps.push([]);
    files.push([]);
    fs.readdirSync(__dirname + `/../public/apps/${route}`).forEach((app, j) => {
        apps[i].push(app);
        files[i].push({});
        fs.readdirSync(__dirname + `/../public/apps/${route}/${app}`).forEach((file, k) => {
            promiseStartCount++;
            writeData(i, j, route, app, file)
                .then(data => {
                    if (promiseStartCount == promiseEndCount) {
                        apps.forEach((app, i) => {
                            app.forEach((route, j) => {
                                console.log(`${files[i][j].route}/${route.replace(/ /g, "-")}`);
                                router.get(`/${route.replace(/ /g, "-")}`, (req, res) => {
                                    res.render(__dirname + "/../views/apps/template", {
                                        'title': route,
                                        'route': files[i][j].route,
                                        'appHtml': files[i][j].html,
                                        'appCss': files[i][j].css,
                                        'appJs': files[i][j].js
                                    });
                                });
                            });
                        });
                        router
                            .route("/")
                                .get((req, res) => {
                                    res.render(__dirname + "/../views/apps/appsHome", {routes, apps});
                                });
                    }
                });
        });
    });
});

module.exports = router;
