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
            {'html': `\n`},
            {'comment': `Create HTML form`},
            {'html': `\n`},
{'html': `<h2>HTML Form</h2>
<form action="/route" method="POST">
    <label for="fname">First name:</label>
    <input type="text" id="fname" name="fname"><br><br>
    <label for="lname">Last name:</label>
    <input type="text" id="lname" name="lname"><br><br>
    <input type="submit" value="Submit">
</form>`},
{'html': `\n`}
        ],
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