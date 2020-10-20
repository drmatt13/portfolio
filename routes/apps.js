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

// fs.watch(__dirname + "/../public/apps", "utf8", (event, filename) => {
//     console.log(__dirname + "/../public/apps", filename, event);
// });

// [{route: link, name: name}, {route: link, name: name}]
const appLinks = [];
let prev = 'apps';
let next = 'apps';

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
                        apps.forEach((folder, i) => {
                            folder.forEach((app, j) => {
                                let appRoute = files[i][j].route + "/" + app;
                                if (['1', '2', '3', '4', '5', '6', '7', '8', '9'].includes(app.charAt(0))) {
                                    app = app.slice(app.indexOf(" ") + 1);
                                    apps[i][j] = app;
                                }
                                router.get(`/${files[i][j].route.replace(/ /g, "-")}/${app.replace(/ /g, "-")}`, (req, res) => {
                                    res.render(__dirname + "/../views/apps/template", {
                                        'title': app,
                                        'route': files[i][j].route,
                                        'appHtml': files[i][j].html,
                                        'appCss': files[i][j].css,
                                        'appJs': files[i][j].js,
                                        'appRoute': appRoute,
                                        'appLinks': appLinks
                                    });
                                });
                            });
                        });
                        console.log(routes);
                        console.log(apps);
                        router
                            .route("/")
                                .get((req, res) => {
                                    res.render(__dirname + "/../views/apps/appsHome", {routes, apps});
                                });
                        console.log("/apps loaded".cyan.bold.underline);
                    }
                });
        });
    });
});

module.exports = router;
