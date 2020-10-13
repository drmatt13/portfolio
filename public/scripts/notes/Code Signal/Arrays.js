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
{'js': `\n`},
{'comment': `first duplicate in an array`},
{'js': `const firstDuplicate = (a) => {
    let arr = {};
    for (let i=0; i<a.length; i++) {
        let c = a[i];
        if(arr[c] == undefined) {
            arr[c] = true;
        } else {
            return c;
        }
    }
    return -1;
}

console.log(
    firstDuplicate(
        [2, 1, 3, 5, 3, 2]
    )
);`},
{'js': `\n`}
    ],
    // output
    [
        {'output': `3`}
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
{'js': `\n`},
{'comment': `first not repeating character in a String`},
{'js': `const firstNotRepeatingCharacter = (s) => {
    let obj = new Object();
    for (let i=0; i<s.length; i++) {
        if (obj[s[i]] == undefined) {
            obj[s[i]] = 1;
        } else {
            obj[s[i]] += 1;
        }
    }
    for (let i=0; i<s.length; i++) {
        if (obj[s[i]] == 1) {
            return s[i];
        }
    }
    return "_";
}

console.log(
    firstNotRepeatingCharacter(
        "abacabad"
    )
);`},
{'js': `\n`}
    ],
    // output
    [
        {'output': `c`}
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
{'js': `\n`},
{'comment': `rotate X*X 2D Array`},
{'js': `const rotateImage = (a) => {

    b = [];
    for (let i=0; i<a.length; i++) {
        b.push([]);
    }

    for (let i=0; i<a.length; i++) {
        for (let j=a.length-1; j!=-1; j--) {
            b[i].push(a[j][i]);
        }
    }
    return b;
}

console.log(
    rotateImage(
        [[1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]]
    )
);`},
{'js': `\n`}
    ],
    // output
    [
{'output': `[[7, 4, 1],
 [8, 5, 2],
 [9, 6, 3]]`}
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
{'js': `\n`},
{'comment': `Check if 9x9 array [[x1, x2, ..., x9], [], ..., []]`},
{'comment': `sudoku is valid, return true or false`},
{'js': `\n`},
{'js': `const sudoku2 = (grid) => {`},
    {'comment':`    create empty object`},
    {'js': `    let obj = new Object();`},
    {'comment':`    check each horizontal row once for duplicates`},
    {'js': `    for (let y=0; y<grid.length; y++) {`},
        {'comment':`        reset dictionary before each horizontal parse`},
        {'js': `        obj = {};
        for (let x=0; x<grid.length; x++) {
            if (grid[y][x] != '.') {
                if (obj[\`\${grid[y][x]}\`] == true) {
                return false;
                } else {
                obj[\`\${grid[y][x]}\`] = true;
                }
            }
        }
    }`},
    {'comment':`    check each vertical row once for duplicates`},
    {'js': `    for (let x=0; x<grid.length; x++) {`},
        {'comment':`        reset dictionary before each vertical parse`},
        {'js': `        obj = {};
        for (let y=0; y<grid.length; y++) {
            if (grid[y][x] != '.') {
                if (obj[\`\${grid[y][x]}\`] == true) {
                    return false;
                } else {
                    obj[\`\${grid[y][x]}\`] = true;
                }
            }
        }
    }`},
    {'comment':`    check 9 sectors, each a unique 3x3 grid`},
    {'comment':`    0-2, 3-5, 6-8`},
    {'js': `    let row = 0, column = 0;
    for (let i=0; i<9; i++) {
        obj = {};
        for (let x=row*3; x<row*3+3; x++) {
            for (let y=column*3; y<column*3+3; y++) {
                if (grid[y][x] != '.') {
                    if (obj[\`\${grid[y][x]}\`] == true) {
                        return false;
                    } else {
                        obj[\`\${grid[y][x]}\`] = true;
                    }
                }
            }
        }`},
        {'comment':`        sector control`},
        {'js': `        if (row != 2) {
            row++;
        } else {
            row = 0;
            column++;
        }
    }
    return true;
}

console.log(
    sudoku2(
        [
            ['.',  1 ,  6 ,   '.', '.', '.',   '.', '.', '.'],
            ['.',  2 , '.',   '.', '.', '.',   '.', '.', '.'],
            ['.',  3 , '.',   '.', '.',  4 ,   '.',  5 , '.'],

            ['.', '.', '.',   '.', '.', '.',   '.',  4 , '.'],
            ['.', '.', '.',   '.', '.', '.',   '.', '.', '.'],
            ['.', '.', '.',   '.', '.', '.',   '.', '.', '.'],

            ['.', '.', '.',   '.', '.', '.',   '.', '.', '.'],
            ['.', '.', '.',   '.', '.', '.',   '.', '.', '.'],
            ['.', '.', '.',   '.', '.', '.',   '.', '.', '.']
        ]
    )
);`},
{'js': `\n`}
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
            [],
            // output
            [],
            //render
            {'render': true}
        ],

];