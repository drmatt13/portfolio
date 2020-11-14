// replace `${i}` --> \`   \$   {i}   \`

let array = [

    // card ----------------------------------------------------- >
    [
        //html
        [],
        //css
        [],
        //js
        [
{'comment': `create array`},
{'js': `let array1 = [5];
let array2 = new Array(5);

console.log(array1);
console.log(array2);`}
        ],
        // output
        [
{'output': `[5]
['', '', '', '', '' ]`}
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
        {'comment': `convert string or iterable item into an array`},
{'js': `let string = 'string';
let arrayListItems = Array.from(string);

console.log(arrayListItems);`}
    ],
    // output
    [
        {'output': `["s", "t", "r", "i", "n", "g"]`}
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
        {'comment': `pop(), push(i), shift(), unshift(i)`},
        {'js': `\n`},
        {'comment': `remove last item from array`},
        {'comment': `array.pop()`},
        {'js': `\n`},
        {'comment': `add new index and push item to array`},
        {'comment': `array.push(item)`},
        {'js': `\n`},
        {'comment': `remove first item from array`},
        {'comment': `array.shift()`},
        {'js': `\n`},
        {'comment': `shift array right and push item to index 0`},
        {'comment': `array.unshift(item)`}
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
{'comment': `spread operator [...array]`},
{'js': `\n`},
{'js': `let array1 = ['item1', 'item2', 'item3'];
let array2 = ['item4', 'item5', 'item6'];
let array3 = [array1, ...array2];`},
{'js': `\n`},
{'js': `const f = (a, b, c, d, e, f) => {};
f(...array3);

console.log(array3)`},
    ],
    // output
    [
{'output': `['item1', 'item2', 'item3', 'item4', 'item5', 'item6']`}
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
{'comment': `array.splice(startIndex, deleteCount, item1, item2, ...)`},
{'comment': `deleteCount, shifts items at "index, index + 1, ..."`},
{'js': `\n`},
{'js': `let array1 = [0, 1, 2, 3, 4];
let array2 = [5, 6, 7, 8, 9];

array2 = array1.splice(2, 2, ...array2);

console.log(array1);
console.log(array2);`}
        ],
        // output
        [
{'output': `[0, 1, 5, 6, 7, 8, 9, 4]`},
{'output': `[2, 3]`}
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
{'comment': `parsing array`},
{'js': `\n`},
{'js': `let array = [1, 2, 4, 8, 16, 32, 64];`},
{'js': `\n`},
{'comment': `iterate through array items`},
{'comment': `i = 1, 2, 4, 8, 16, 32, 64`},
{'js': `for (let i of array) {

}`},
{'js': `\n`},
{'comment': `iterate through array indexes`},
{'comment': `i = 0, 1, 2, 3, 4, 5, 6`},
{'js': `for (let i in array) {

}`}
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
{'comment': `array.includes`},
{'comment': `array.map`},
{'comment': `array.filter`}
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
    ],

];