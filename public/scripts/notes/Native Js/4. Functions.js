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
{'js': `/


/
/class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
class ReverseStack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    value() {
        if (this.first) return this.first.val;
        else return null;
        
    }
    push(value) {
        let newNode = new Node(value);
        if (!this.first) {
            this.first = newNode;
            this.last = this.first;
        } else {
            let temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }
        return ++this.size;
    }
    pop() {
        if (!this.first) return null;
        let temp = this.first;
        if (this.first == this.last) {
            this.last == null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.val;
    }
    update(val) {
        if (!this.first) this.push(val);
        else this.first.val = \`\${val}\` + this.first.val;
        return this;
    }
}
let cache = new ReverseStack();
const updateCache = (s) => {
    let char;
    let newString = true;
    for (let i=s.length-1; i>=0; i--) {
        char = s.pop();
        if (specialChars[char]) {
            cache.push(char);
            newString = true;
        } else {
            if (newString) {
                cache.push(char);
                newString = false;
            }
            else {
                if (!isNaN(char)) {
                    cache.push(char);
                    newString = true;
                } else {
                    cache.update(char);
                }
            }
        }
    }
}
window.htmlentities = {
    /***@param {String} str **/
    encode : (str) => {
        let buf = [];
        for (let i=str.length-1;i>=0;i--) {
            buf.unshift(['&#', str[i].charCodeAt(), ';'].join(''));
        }
        return buf.join('');
    },
};
const specialChars = {"\\n": true, "-": true, "+": true, "=": true, "'": true,  '"': true, ';': true,'/': true,'?': true,'<': true,'>': true,',': true,'.': true,'[': true,']': true,'{': true,'}': true,'(': true,')': true,'*': true,'&': true,'^': true,'%': true,'\$': true,'#': true,'@': true,'!': true,'|': true,'~': true,'\`': true, ' ': true,'\\': true};
let prevString = null;
let switchSelector = 0;
let quotationChar = null;
let isComment = false;
const jsProcessWord = (s, n, x) => {
    let span = document.createElement('span');
    span.innerHTML = htmlentities.encode(s);
    if (quotationChar != null) {
        span.classList.add("mysqlQuotations");
        if (quotationChar == s) quotationChar = null;
    } else {
        console.log(s);
        if (['"', "'", "\`"].includes(s)) {
            quotationChar = s;
            span.classList.add("mysqlQuotations");
        } else {
            if (isComment) {
                if (n == '\\n') isComment = false;
                switchSelector = 7;
            }
            else if (s == '/') {
                if (n == '/') {
                    isComment = true;
                    switchSelector = 7;
                }
            }
            else if (jsLightBlue.includes(s)) switchSelector = 1;
            else if (n == '(') switchSelector = 2;
            else if (jsRed.includes(s)) switchSelector = 3;
            else if (jsPurple.includes(s)) switchSelector = 4;
            else if (['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'true', 'false'].includes(s)) switchSelector = 5;
            else if (s.charAt(0) == s.charAt(0).toUpperCase() && ![prevString, n].includes('.')) switchSelector = 6;
            switch (switchSelector) {
                case 0:
                    break;
                // light blue
                case 1:
                    span.classList.add("light-blue");
                    if (!['new', 'undefined', '|', '{', '}', '!', ',', '*', '+', '=', '-', '>', '<', '/', ';'].includes(s)) span.classList.add("italic");
                    break;
                // dark blue
                case 2:
                    span.classList.add("dark-blue");
                    break;
                // red
                case 3:
                    span.classList.add("mysqlParentheses");
                    break;
                // purple
                case 4:
                    span.classList.add("purple");
                    break;
                // orange - numbers
                case 5:
                    span.classList.add("mysqlNumber");
                    break;
                // yellow
                case 6:
                    span.classList.add("mysqlDatatype");
                    break;
                // comment
                case 7:
                    span.classList.add("comment");
                    break;
                // white
                default:
                    break;
            }
        }
    }
    x.appendChild(span);
    prevString = s;
    switchSelector = 0;
}
const mysqlProcessWord = (s, x) => {
    if (mysqlKeywords.includes(s.toUpperCase())) {
        x.innerHTML += '<span class="mysqlKeyword">' + htmlentities.encode(s) + '</span>';
    } else if (mysqlDatatypes.includes(s.toUpperCase())) {
        x.innerHTML += '<span class="mysqlDatatype">' + htmlentities.encode(s) + '</span>';
    } else {
        s = Array.from(s);
        for (let c of s) {
            if (quotationChar != null) {
                x.innerHTML += '<span class="mysqlQuotations">' + c + '</span>';
                if (c == quotationChar) quotationChar = null;
            } else if (['"', "'", "\`"].includes(c)) {
                x.innerHTML += '<span class="mysqlQuotations">' + c + '</span>';
                quotationChar = c;
            } else if (mysqlNumbers.includes(c) && mysqlNumbers.includes(s[0])) x.innerHTML += '<span class="mysqlNumber">' + c + '</span>';
            else if (c == ')') x.innerHTML += '<span class="mysqlParentheses">' + c + '</span>';
            else if (c == ';') x.innerHTML += '<span class="mysqlKeyword">' + c + '</span>';
            else x.innerHTML += htmlentities.encode(c);
        }
    }
}
let htmlCode = [];
let cssCode = [];
let scriptCode = [];
let count = 0;
let commentGap = 0;
let commentGapString = '';
let pre;
let string;
let code = '';
let scriptCount = 0;
for (i in array) {
    count = 0;
    code = '';
    let card = document.createElement('div');
    card.classList.add('card');
    let html = document.createElement('div');
    html.classList.add('code');
    pre = document.createElement('pre');
    pre.classList.add('tag');
    pre.innerHTML = htmlentities.encode('<html>');
    html.appendChild(pre);
    for (j in array[i][0]) {
        pre = document.createElement('pre');
        if (array[i][0][j].comment) {
            pre.classList.add('comment');
            commentGap = array[i][0][j].comment.length - array[i][0][j].comment.trim().length;
            for (let k=0; k<commentGap; k++) commentGapString += ' ';
            pre.innerHTML = htmlentities.encode(commentGapString + '<!-- ' + array[i][0][j].comment.trim() + ' -->');
            commentGapString = '';
            string = '';
        } else {
            string = array[i][0][j].html;
            pre.innerHTML = htmlentities.encode(string);
        }
        code += string;
        html.appendChild(pre);
        count++;
    }
    pre = document.createElement('pre');
    pre.classList.add('tag');
    pre.innerHTML = htmlentities.encode('</html>');
    html.appendChild(pre);
    if (count != 0) card.appendChild(html);
    htmlCode.push(code);
    code = '';
    count = 0;
    let css = document.createElement('div');
    css.classList.add('code');
    pre = document.createElement('pre');
    pre.classList.add('tag');
    pre.innerHTML = htmlentities.encode('<style>');
    css.appendChild(pre);
    for (j in array[i][1]) {
        pre = document.createElement('pre');
        if (array[i][1][j].comment) {
            pre.classList.add('comment');
            commentGap = array[i][1][j].comment.length - array[i][1][j].comment.trim().length;
            for (let k=0; k<commentGap; k++) commentGapString += ' ';
            pre.innerHTML = htmlentities.encode(commentGapString + '/* ' + array[i][1][j].comment.trim() + ' */');
            commentGapString = '';
            string = '';
        } else {
            string = array[i][1][j].css;
            pre.innerHTML = htmlentities.encode(string);
        }
        code += string;
        css.appendChild(pre);
        count++;
    }
    pre = document.createElement('pre');
    pre.classList.add('tag');
    pre.innerHTML = htmlentities.encode('</style>');
    css.appendChild(pre);
    if (count != 0) card.appendChild(css);
    cssCode.push(code);
    code = '';
    count = 0;
    let js = document.createElement('div');
    js.classList.add('code');
    pre = document.createElement('pre');
    pre.classList.add('tag');
    pre.innerHTML = htmlentities.encode('<script>');
    js.appendChild(pre);
    for (j in array[i][2]) {
        pre = document.createElement('pre');
        if (array[i][2][j].comment) {
            pre.classList.add('comment');
            commentGap = array[i][2][j].comment.length - array[i][2][j].comment.trim().length;
            for (let k=0; k<commentGap; k++) commentGapString += ' ';
            pre.innerHTML = htmlentities.encode(commentGapString + '// ' + array[i][2][j].comment.trim());
            commentGapString = '';
        } else if (array[i][2][j].js) {
            let jsCode = array[i][2][j].js.split('');
            updateCache(jsCode);
            while (cache.first) {
                jsProcessWord(cache.pop(), cache.value(), pre);
            }
        } else {
            string = '';
            for (let line of array[i][2][j].mysql.split('\\n')) {
                scriptCount = line.split(" ").length-1;
                for (let [k, word] of line.split(/(\s+)/).entries()) {
                    lastChar = null;
                    if ([";", ",", ")"].includes(word.slice(-1))) {
                        lastChar = word.slice(-1);
                        word = word.substring(0, word.length-1);
                    }
                    let temp = word.split('(');
                    if (temp.length != 1) {
                        scriptCount = 0;
                        for (piece of temp) {
                            mysqlProcessWord(piece, pre);
                            if (scriptCount != temp.length-1) pre.innerHTML += '<span class="mysqlParentheses">(</span>';
                            scriptCount++;
                        }
                    } else {
                        if (k == scriptCount) mysqlProcessWord(word, pre);
                        else mysqlProcessWord(word, pre);
                    }
                    if (lastChar != null) mysqlProcessWord(lastChar, pre);
                }
                pre.innerHTML += '\\n';
            }
        }
        code += string;
        js.appendChild(pre);
        count++;
    }
    pre = document.createElement('pre');
    pre.classList.add('tag');
    pre.innerHTML = htmlentities.encode('</script>');
    js.appendChild(pre);
    if (count != 0) card.appendChild(js);
    scriptCode.push(code);
    code = '';
    count = 0;
    let output = document.createElement('div');
    output.classList.add('output');
    for (j in array[i][3]) {
        pre = document.createElement('pre');
        if (array[i][3][j].comment) {
            pre.classList.add('comment');
            pre.innerHTML = array[i][3][j].comment;
        } else if (array[i][3][j].input) {
            pre.classList.add('input');
            pre.innerHTML = array[i][3][j].input;
        } else {
            pre.classList.add('output');
            pre.innerHTML = array[i][3][j].output;
        }
        output.appendChild(pre);
        count++;
    }
    if (count != 0) card.appendChild(output);
    count = 0;
    if (card.childElementCount == 0) card.style.display = "none";
    document.body.appendChild(card);
    let button;
    if (array[i][4].render) {
        buttonContainer = document.createElement('div');
        buttonContainer.classList.add('button-container');
        button = document.createElement('div');
        button.classList.add('button');
        button.innerHTML = 'render';
        buttonContainer.appendChild(button);
        card.appendChild(buttonContainer);
        if (card.offsetHeight != 400) button.classList.add('x-space1');
        else button.classList.add('x-space2');
        if (card.offsetHeight != 400) button.classList.add('x-space1');
    }
}
const cards = document.querySelectorAll('.card');
let bottomCard = 0;
for (let i=cards.length-1; i>0; i--) {
    if (cards[i].style.display != "none" && i > bottomCard) {
        cards[i].classList.add('lastCard');
        bottomCard = i;
    };
};
let buttons = document.querySelectorAll('.button');
let buttonPointer = [];
const modifyButtonYspace = (i) => {
    let y1 = document.querySelectorAll('.card')[i].clientHeight;
    let y2 = document.querySelectorAll('.card')[i].scrollHeight;
    if (buttons[buttonPointer[i]]) {
        if (y1 >= 400 || y1 >= y2) {
            buttons[buttonPointer[i]].classList.add('y-space');
        } else {
            buttons[buttonPointer[i]].classList.remove('y-space');
        }
    }
}
for (let i=0; i<array.length; i++) {
    if (array[i][4].render) {
        buttonPointer.push(count)
        modifyButtonYspace(count);
        buttons[count].addEventListener('click', () => {buildApp(i)});
        count++;
    } else buttonPointer.push(null);
}
const buttonSizeUpdate = () => {for (i in array) modifyButtonYspace(i)};
window.addEventListener('resize', buttonSizeUpdate);
buttonSizeUpdate();
const buildApp = (i) => {
    if (document.querySelector('.app-container') != null) document.querySelector('.app-container').remove();
    let appContainer = document.createElement('div');
    appContainer.classList.add('app-container');
    let background = document.createElement('div');
    background.classList.add('background');
    background.addEventListener('click', () => {appContainer.remove();document.body.style.overflow = 'auto';});
    appContainer.appendChild(background);
    let iframe = document.createElement('iframe');
    iframe.classList.add('iframe');
    let html = '<body>'+\`<style>\`+cssCode[i]+\`</style>\`+htmlCode[i]+\`<script>\`+scriptCode[i]+\`</script>\`+'</body>';
    iframe.src = 'data:text/html;charset=utf-8,' + encodeURI(html);
    appContainer.appendChild(iframe);
    document.body.style.overflow = 'hidden';
    document.body.appendChild(appContainer);
    console.log(html);
}`}
        ],
        // output
        [],
        //render
        {'render': false}
    ],

    //     // card ----------------------------------------------------- >
    //     [
    //         //html
    //         [],
    //         //css
    //         [],
    //         //js
    //         [
    // {'js': `4let js4 = document.createElement('div');
    // js.classList.add('code');
    // pre = document.createElement('pre');
    // pre.classList.add('tag');
    // pre.innerHTML = htmlentities.encode('<script>');
    // js.appendChild(pre);
    // for (j in array[i][2]) {
    //     console.log(j);
    //     pre = document.createElement('pre');
    //     if (array[i][2][j].comment) {
    //         pre.classList.add('comment');
    //         commentGap = array[i][2][j].comment.length - array[i][2][j].comment.trim().length;
    //         for (let k=0; k<commentGap; k++) commentGapString += ' ';
    //         pre.innerHTML = htmlentities.encode(commentGapString + '// ' + array[i][2][j].comment.trim());
    //         commentGapString = '';
    //     } else if (array[i][2][j].js) {
    //         4let js4 = document.createElement('div');
    // js.classList.add('code');
    // pre = document.createElement('pre');
    // pre.classList.add('tag');
    // pre.innerHTML = htmlentities.encode('<script>');
    // js.appendChild(pre);
    // for (j in array[i][2]) {
    //     console.log(j);
    //     pre = document.createElement('pre');
    //     if (array[i][2][j].comment) {
    //         pre.classList.add('comment');
    //         commentGap = array[i][2][j].comment.length - array[i][2][j].comment.trim().length;
    //         for (let k=0; k<commentGap; k++) commentGapString += ' ';
    //         pre.innerHTML = htmlentities.encode(commentGapString + '// ' + array[i][2][j].comment.trim());
    //         commentGapString = '';
    //     } else if (array[i][2][j].js) {
    //         4let js4 = document.createElement('div');
    // js.classList.add('code');
    // pre = document.createElement('pre');
    // pre.classList.add('tag');
    // pre.innerHTML = htmlentities.encode('<script>');
    // js.appendChild(pre);
    // for (j in array[i][2]) {
    //     console.log(j);
    //     pre = document.createElement('pre');
    //     if (array[i][2][j].comment) {
    //         pre.classList.add('comment');
    //         commentGap = array[i][2][j].comment.length - array[i][2][j].comment.trim().length;
    //         for (let k=0; k<commentGap; k++) commentGapString += ' ';
    //         pre.innerHTML = htmlentities.encode(commentGapString + '// ' + array[i][2][j].comment.trim());
    //         commentGapString = '';
    //     } else if (array[i][2][j].js) {
    //         4let js4 = document.createElement('div');
    // js.classList.add('code');
    // pre = document.createElement('pre');
    // pre.classList.add('tag');
    // pre.innerHTML = htmlentities.encode('<script>');
    // js.appendChild(pre);
    // for (j in array[i][2]) {
    //     console.log(j);
    //     pre = document.createElement('pre');
    //     if (array[i][2][j].comment) {
    //         pre.classList.add('comment');
    //         commentGap = array[i][2][j].comment.length - array[i][2][j].comment.trim().length;
    //         for (let k=0; k<commentGap; k++) commentGapString += ' ';
    //         pre.innerHTML = htmlentities.encode(commentGapString + '// ' + array[i][2][j].comment.trim());
    //         commentGapString = '';
    //     } else if (array[i][2][j].js) {`}
    //         ],
    //         // output
    //         [],
    //         //render
    //         {'render': false}
    //     ],

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