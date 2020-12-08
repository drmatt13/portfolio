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
{'js': `// Local storage is an Object for the Document's origin

// Retrieve entire local storage Object for the current page
myStorage = window.localStorage;

// Add item to local storage
localStorage.setItem('myCat', 'Tom');

// Retrieve value for given key
const cat = localStorage.getItem('myCat');

// Remove an item from the local storage Object
localStorage.removeItem('myCat');

// Clear local storage
localStorage.clear();`}
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
{'js': `// A page session lasts as long as the browser is open, and survives over page reloads and restores.

// Retrieve entire session storage Object for the current page
myStorage = window.sessionStorage;

// Save data to sessionStorage
sessionStorage.setItem('key', 'value');

// Get saved data from sessionStorage
let data = sessionStorage.getItem('key');

// Remove saved data from sessionStorage
sessionStorage.removeItem('key');

// Remove all saved data from sessionStorage
sessionStorage.clear();`}
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
{'js': `cookies!`}
        ],
        // output
        [],
        //render
        {'render': false}
    ],

];