// replace `${i}` --> \`\${i}\`

const array = [

    // card ----------------------------------------------------- >
    [
        //html
        [],
        //css
        [],
        //js
        [
{'comment': `setTimeout(callback, milliseconds)`},
{'js': `setTimeout(() => {`},
{'comment': `    execute contents in 1s`},
{'js': `}, 1000);`},
{'js': `\n`},
{'comment': `clear timeout - set the timeout to a variable`},
{'js': `let t = setTimeout(function, ms);
clearTimeout(t);`}
        ],
        // output
        [],
        //render
        {'render': false}
    ],

    // card ----------------------------------------------------- >
    [
        //html
        [],
        //css
        [],
        //js
        [
            {'comment': `github`},
            {'js': `git init`},
            {'js': `git add .`},
            {'js': `git status`},
            {'js': `git commit -m "version"`},
            {'js': `git push -u origin master`}
        ],
        // output
        [],
        //render
        {'render': false}
    ],

    // card ----------------------------------------------------- >
    [
        //html
        [],
        //css
        [],
        //js
        [
//put into output
{'comment': `package.json`},
{'js': `{
    "name": "appName",
    "version": "1.0.0",
    "description": "description",
    "main": "server.js",
    "scripts": {
        "start": "node server.js",
        "dev": "nodemon server.js VARIBLE=true"
        "offline": "cross-env OFFLINE=true node server.js"
    },
    "author": "author",
    "license": "ISC",
    "dependencies": {
        "express": "^1.0.0",
        "dependency": "version",
        // ...
    }
}`},
        ],
        // output
        [],
        //render
        {'render': false}
    ],

    // card ----------------------------------------------------- >

    // Node js Dependencies

    [
        //html
        [],
        //css
        [],
        //js
        [
            {}
        ],
        // output
        [],
        //render
        {'render': false}
    ],

    // card ----------------------------------------------------- >

    [
        //html
        [],
        //css
        [],
        //js
        [],
        // output
        [],
        //render
        {'render': false}
    ]

];