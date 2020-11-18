// replace `${i}` --> \`\${i}\`

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
        [{'comment': `custom text highlight color`}],
        //css
        [
            {'css': `body {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.class::selection {`},
            {'comment': `
background-color: #xxxxxx;
color: #xxxxxx;
`},
{'css': `}`}
        ],
        //js
        [
{'js': `// generate x divs with unique classes
let x = 100;
for (let i=0; i<x; i++) {
    let div = document.createElement('div');
    div.classList.add(\`style\${i}\`);
    div.innerHTML = 'highlight me';
    document.body.appendChild(div);
}
// generate x unique style tags
let style = document.createElement('style');
for (let i=0; i<x; i++) {
    let c1 = Math.floor(Math.random() * (255 - 0)) + 0;
    let c2 = Math.floor(Math.random() * (255 - 0)) + 0;
    let c3 = Math.floor(Math.random() * (255 - 0)) + 0;
    style.innerHTML += \`.style\${i}::selection {
        background-color: rgb(\${c1}, \${c2}, \${c3});
    }\`
}
document.body.appendChild(style);`}
        ],
        // output
        [],
        //render
        {'render': true}
    ],

    // card ----------------------------------------------------- >
    [
        //html
        [
            {'comment': `Custom scroll bars`}
        ],
        //css
        [
            {'css': `/* width */
::-webkit-scrollbar {
    width: 10px;
    height: 10px;
}

/* Track */
::-webkit-scrollbar-track {
    background: #4b4b4b;
}

/* Handle */
::-webkit-scrollbar-thumb {
    background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
    background: #999;
}

::-webkit-scrollbar-corner {
    background: #4b4b4b;
}`}
        ],
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
        [
            {'comment': `media query max-width and max-height 
updates css when screen size changes`}
        ],
        //css
        [
            {'css': `@media screen and (max-width: 1200px) {
    .class {
        
    }
}`}
        ],
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
            [
                {'comment': `media query keyframes`},
                {'html': `<div></div>`}
            ],
            //css
            [
                {'css': `div {
    width: 100px;
    height: 100px;
    background-color: red;
    animation: example 5s linear infinite;
}

@keyframes example {
    0%   {background-color: red;}
    20%  {background-color: yellow;}
    40%  {background-color: blue;}
    60% {background-color: green;}
    80% {background-color: purple;}
    100% {background-color: red;}
}`}
            ],
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
        {'comment': `convert object to string`},
        {'js': `const json = '{'result':true, 'count':42}';`},
        {'js': `console.log(json);`}
    ],
    // output
    [
        {'output': `'{'result':true, 'count':42}'`}
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
        {'comment': `convert string to json`},
        {'js': `const obj = JSON.parse(json);`},
        {'js': `console.log(obj.result);`}
    ],
    // output
    [
        {'output': `true`}
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
        {'comment': `store obj in local storage`},
        {'comment': `JSON.stringify() converts js object into a string`},
        {'js': `window.localStorage.setItem('key1', JSON.stringify(obj));`},
        {'comment': `retrieve data from local storage`},
        {'comment': `returns null if key does not exist`},
        {'js': `let data = window.localStorage.getItem('key2');`},
        {'js': `console.log(data);`}
    ],
    // output
    [
        {'output': `'null'`}
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
    {'comment': `async function to get receive data`},
    {'js': `async function receive() {`},
    {'js': `  await fetch('url')`},
    {'js': `  .then(res => res.json())`},
    {'js': `  .then(data => {`},
    {'js': `    console.log(JSON.stringify(data))`},
    {'js': `  });`},
    {'js': `  .catch(error => {`},
    {'js': `  console.log(error)`},
    {'js': `  });`},
    {'js': `}`},
    {'js': `receive();`}
],
// output
[
    {'output': `'json data formatted back into string'`}
],
//render
{'render': false}
],

// card ----------------------------------------------------- >
[
//html
[
    {'html': `<div>hello</div>`}
],
//css
[
    {'css': 
`div {
color: white;
height: 100px;
width 100%;
background-color: 0f0;
padding: 10px;
font-size: large;
}
`
}
],
//js
[],
//output
[],
//render
{'render': true}
],

// card ----------------------------------------------------- >
[
//html
[
{'html': `<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
`}
],
//css
[
{'css': `body {
display: flex;
flex-wrap: wrap;
}

div {
height: 50px;
width: 50px;
margin: 10px;
background-color: red;
}`
}
],
//js
[],
//output
[
{'output': `iframe test`}
],
//render
{'render': true}
],

// card ----------------------------------------------------- >
[
//html
[
{'html': `<div></div>`}
],
//css
[
{'css': `div {
height: 50px;
width: 50px;
background-color: blue;
}`
}
],
//js
[],
//output
[
{'output': `iframe test`}
],
//render
{'render': true}
],

// card ----------------------------------------------------- >
[
//html
[
{'html': `<div></div>`}
],
//css
[
{'css': `div {
height: 50px;
width: 50px;
background-color: green;
}`
}
],
//js
[],
//output
[
{'output': `iframe test`}
],
//render
{'render': true}
],

// card ----------------------------------------------------- >
[
//html
[
{'html': `<div></div>`}
],
//css
[
{'css': `div {
height: 50px;
width: 50px;
background-color: red;
}`
}
],
//js
[],
//output
[
{'output': `iframe test`}
],
//render
{'render': true}
],

// card ----------------------------------------------------- >
[
//html
[
{'html': `<div></div>`},
{'comment': `---------------------------------------------------------------------------------------
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*`}
],
//css
[
{'css': `div {
height: 50px;
width: 50px;
background-color: blue;
}`
}
],
//js
[],
//output
[
{'output': `iframe test`}
],
//render
{'render': true}
],

// card ----------------------------------------------------- >
[
//html
[
{'html': `<div></div>`}
],
//css
[
{'css': `div {
height: 50px;
width: 50px;
background-color: green;
}`
}
],
//js
[],
//output
[
{'output': `iframe test`}
],
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
        [],
        // output
        [],
        //render
        {'render': true}
    ],

];