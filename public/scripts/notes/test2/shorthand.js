// replace `${i}` --> \`   \$   {i}   \`

const array = [

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
        {'render': true}
    ],

    // card ----------------------------------------------------- >
    [
//html
[],
//css
[],
//js
[
    {'comment': `if statement`},
{'js': `let x = 10;
let answer = null;

if (x > 10) {
    answer = "greater than 10";
} else {
    answer =  "less than 10";
}
console.log(answer)`}
],
// output
[
    {'output': `greater than 10`}
],
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
        {'comment': `ternary operator`},
    {'js': `
let x = 11;
let answer = x >= 10 ? "greater than 10" : "less than 10";
    `},
{'comment': `multiple comparasions
let answer = x > 10 ? "greater than 10" : x < 5 ? "less than 5" : "between 5 and 10";`},
{'js': `
console.log(answer);`}
    ],
    // output
    [
        {'output': `greater than 10`}
    ],
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
        {'comment': `short-circuit evaluation shorthand`},
    {'js': `if (variable1 !== null || variable1 !== undefined || variable1 !== '') {
    let variable2 = variable1;
}
    `},
    {'comment': `const variable2 = variable1  || 'new';`}
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
        {'comment': `for loops`},
    {'js': `for (let i=0; i<x.length; i++) {
    x[i];
}
    `},
    {'comment': `shorthand for loop`},
    {'js': `for (let i of x) {
    i;
}
    `},
    {'comment': `obj for loop`},
    {'js': `const obj = {key1: 'value1', key2: 'value2', key3: 'value3'};

for (let key in obj) {
    console.log(key);
}`},
    ],
    // output
    [
        {'output': `value1`},
        {'output': `value2`},
        {'output': `value3`},
    ],
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
{'comment': `loop through an objects keys`},
{'js': `const obj = {key1: 'value1', key2: 'value2', key3: 'value3'};`},
{'js': '\n'},
{'comment': `store keys in an array`},
{'js': `let keys = Object.keys(obj);`},
{'js': '\n'},
{'comment': `keys = [key1, key2, key3]`},
{'js': `for (let i=0; i< keys.length; i++) {
    console.log(keys[i])
}`},
{'js': '\n'},
{'comment': `shorthand
for (let i of keys) {
    console.log(i);
}`},
    ],
    // output
    [
        {'output': `key1`},
        {'output': `key2`},
        {'output': `key3`},
    ],
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
{'comment': `default parameter values`},
{'js': `\n`},
{'comment': `longhand`},
{'js': `function volume(l, w, h) {
    if (w === undefined)
        w = 3;
    if (h === undefined)
        h = 4;
    return l * w * h;
}`},
{'js': `\n`},
{'comment': `shorthand`},
{'js': `volume = (l, w = 3, h = 4 ) => (l * w * h);
volume(2);`},
    ],
    // output
    [
        {'output': `24`}
    ],
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
{'comment': `template literals`},
{'js': `\n`},
{'comment': `longhand`},
{'js': `const welcome = 'You have logged in as ' + first + ' ' + last + '.';`},
{'js': `\n`},
{'comment': `shorthand`},
{'js': `const welcome = \`You have logged in as \${first} \${last}\`;`},
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
{'comment': `spread operator`},
{'js': `\n`},
{'comment': `longhand`},
{'js': `\n`},
{'comment': `joining arrays`},
{'js': `const odd = [1, 3, 5];
const nums = [2 ,4 , 6].concat(odd);`},
{'js': `\n`},
{'comment': `cloning arrays`},
{'js': `const arr = [1, 2, 3, 4];
const arr2 = arr.slice();`},
{'js': `\n`},
{'comment': `shorthand`},
{'js': `\n`},
{'comment': `joining arrays`},
{'js': `const odd = [1, 3, 5 ];
const nums = [2 ,4 , 6, ...odd];`},
{'js': `\n`},
{'comment': `cloning arrays`},
{'js': `const arr = [1, 2, 3, 4];
const arr2 = [...arr];`},
{'js': `\n`},
{'js': `console.log(nums);
console.log(arr2)`},
        ],
        // output
        [
            {'output': '[2, 4, 6, 1, 3, 5]'},
            {'output': '[1, 2, 3, 4]'},
        ],
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
        {'render': true}
    ],

];