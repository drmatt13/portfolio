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
{'comment': `Math.random() returns a random number between 0 (included) and 1 (excluded)`},
{'comment': `0.0 - 0.99999999999999999`},
{'js': `\n`},
{'comment': `Math.floor(x) rounds a number downward to its nearest integer`},
{'comment': `Math.floor(9.9) -> returns 9`},
{'js': `\n`},
{'comment': `generate a random integer from 0 to 9`},
{'js': `Math.floor(Math.random() * 10);`},
{'js': `\n`},
{'comment': `generate a random integer from 0 to 10`},
{'js': `Math.floor(Math.random() * 11);`},
{'js': `\n`},
{'comment': `generate a random integer from 1 to 10`},
{'js': `Math.floor(Math.random() * 10) + 1;`},
{'js': `\n`},
{'comment': `generate a random integer from 1 to 100`},
{'js': `Math.floor(Math.random() * 100) + 1;`},
{'js': `\n`},
{'comment': `generate a random integer within range max excluded`},
{'js': `function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}`},
{'js': `\n`},
{'comment': `generate a random integer within range max included`},
{'js': `function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}`},
{'js': `\n`},
{'comment': `generate a random color "#000000" - "#FFFFFF"`},
{'js': `let randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);`},
{'js': `\n`},
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