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
{'js': `// create array
let array1 = [5];
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
{'js': `// convert string or iterable item into an array
let string = 'string';
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
{'js': `// pop(), push(i), shift(), unshift(i)

// remove last item from array
// array.pop()

// add new index and push item to array
// array.push(item)

// remove first item from array
// array.shift()

// shift array right and push item to index 0
// array.unshift(item)`}
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
{'js': `// spread operator [...array]
  
let array1 = ['item1', 'item2', 'item3'];
let array2 = ['item4', 'item5', 'item6'];
let array3 = [array1, ...array2];

const f = (a, b, c, d, e, f) => {};
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
{'js': `// array.splice(startIndex, deleteCount, item1, item2, ...)
// deleteCount, shifts items at "index, index + 1, ..."
  
let array1 = [0, 1, 2, 3, 4];
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
{'js': `// parsing array

let array = [1, 2, 4, 8, 16, 32, 64];

// iterate through array items
// i = 1, 2, 4, 8, 16, 32, 64
for (let i of array) {

}

// iterate through array indexes
// i = 0, 1, 2, 3, 4, 5, 6
for (let i in array) {

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
{'js': `// array.includes
// array.map
// array.filter`}
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