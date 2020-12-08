class Node {
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
    else this.first.val = `${val}` + this.first.val;
    return this;
  }
}
let cache = new ReverseStack();
let spaces = "  ";
const updateCache = (s) => {
  let char;
  let newString = true;
  let prevSpace = false;
  let specialCharExeption = false;
  for (let i = s.length - 1; i >= 0; i--) {
    char = s.pop();
    if (specialChars[char]) {
      if (char == " ") {
        specialCharExeption = false;
        if (prevSpace) cache.update(char);
        else {
          cache.push(char);
          newString = true;
        }
        prevSpace = true;
      } else if (!["-", '!', "<"].includes(char)) {
        if (char == "\n") {
          if (prevSpace) cache.update(spaces);
          else cache.push(spaces);
        }
        newString = true;
        prevSpace = false;
        cache.push(char);
      } else {
        if (newString && [">", "-"].includes(char)) {
          specialCharExeption = true;
          newString = false;
        }
        if (specialCharExeption) {
          if (prevSpace) {
            prevSpace = false;
            cache.push(char);
          }
          else if (!newString) cache.update(char);
          else cache.push(char);
        } else cache.push(char); 
        prevSpace = false;
      }
    } else {
      prevSpace = false;
      if (specialCharExeption) {
        newString = false;
        specialCharExeption = false;
        cache.push(char);
      }
      else if (newString) {
        cache.push(char);
        newString = false;
      } else {
        if (!isNaN(char)) {
          cache.push(char);
          newString = true;
        } else {
          cache.update(char);
        }
      }
    }
  }
  cache.push(spaces);
}
const syntaxColor = (span, color) => {
  switch (color) {
    case 0:
      span.classList.add("white");
      break;
    case 1:
      span.classList.add("light-blue");
      break;
    case 2:
      span.classList.add("dark-blue");
      break;
    case 3:
      span.classList.add("red");
      break;
    case 4:
      span.classList.add("purple");
      break;
    case 5:
      span.classList.add("number-color");
      break;
    case 6:
      span.classList.add("yellow");
      break;
    case 7:
      span.classList.add("comment");
      break;
    case 8:
      span.classList.add("light-blue");
      span.classList.add("italic");
      break;
    case 9:
      span.classList.add("green");
      break;
    default:
      break;
  }
}
window.htmlentities = {
  /***@param {String} str **/
  encode: (str) => {
    let buf = [];
    for (let i = str.length - 1; i >= 0; i--) {
      buf.unshift(['&#', str[i].charCodeAt(), ';'].join(''));
    }
    return buf.join('');
  },
};






const specialChars = { "\n": true, "-": true, "+": true, "=": true, "'": true, '"': true, ';': true, ':': true, '/': true, '?': true, '<': true, '>': true, ',': true, '.': true, '[': true, ']': true, '{': true, '}': true, '(': true, ')': true, '*': true, '&': true, '^': true, '%': true, '$': true, '#': true, '@': true, '!': true, '|': true, '~': true, '`': true, ' ': true, '\\': true };
let prevWord = null;
let switchSelector = 0;
let quotationChar = null;
let isComment = false;
const jsProcessWord = (s, n, x) => {
  let span = document.createElement('span');
  span.innerHTML = htmlentities.encode(s);
  if (quotationChar != null) {
    switchSelector = 9;
    if (quotationChar == s) quotationChar = null;
  } else {
    if (['"', "'", "`"].includes(s) && !isComment) {
      quotationChar = s;
      switchSelector = 9;
    } else {
      if (isComment) {
        if (n == '\n') isComment = false;
        switchSelector = 7;
      } else if (s == '/') {
        if (n == '/') {
          isComment = true;
          switchSelector = 7;
        } else {
          switchSelector = 1;
        }
      }
      else if (jsPurple.includes(s)) switchSelector = 4;
      else if (n == '(' && prevWord != 'new') switchSelector = 2;
      else if (jsLightBlue.includes(s) && !isComment) {
        if (!['new', 'undefined', '\\', '|', '{', '}', '!', '&', ',', '*', '+', '=', '-', '>', '<', '/', ';', ':', '@'].includes(s)) switchSelector = 8;
        else switchSelector = 1;
      }
      else if (jsRed.includes(s)) switchSelector = 3;
      else if (['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'true', 'false'].includes(s)) switchSelector = 5;
      else if (s.charAt(0) == s.charAt(0).toUpperCase() && (prevWord != '.')) {
        if (['class', 'extends'].includes(prevWord) && ![' ', '\n'].includes(s)) {
          jsClassList.push(s);
          switchSelector = 6;
        } else if (jsClassList.includes(s)) switchSelector = 6;
      }
    }
  }
  syntaxColor(span, switchSelector);
  x.appendChild(span);
  if (![' ', '\n'].includes(s)) prevWord = s;
  switchSelector = 0;
}



const cssProcessWord = (s, n, x) => {
  let span = document.createElement('span');
  span.innerHTML = htmlentities.encode(s);
  let switchSelector = 0;
  syntaxColor(span, switchSelector);
  x.appendChild(span);
}




let isTag = false;
let isTagName = true;
const htmlProcessWord = (s, n, x) => {
  let span = document.createElement('span');
  span.innerHTML = htmlentities.encode(s);
  if (quotationChar) {
    if (s == quotationChar) {
      quotationChar = null;
    }
    switchSelector = 9; // quotationChar
  } else if (isComment) {
    if (s == "-->") {
      isComment = false;
      switchSelector = 6; // comment
    } else switchSelector = 7;
  } else if (!isTag) {
    if (s == "<!--") {
      isComment = true;
      switchSelector = 6; // comment
    }
    else if (s == "<") {
      if (!specialChars[n] || n == "/") {
        isTag = true;
        switchSelector = 1; // blue
      }
    }
  } else {
    if (s == ">") {
      isTag = false;
      isTagName = true;
      switchSelector = 1; // blue
    } else if (s == "/") {
      switchSelector = 1; // blue
    } else {
      if (isTagName) {
        isTagName = false;
        switchSelector = 3; // red
      } else {
        if (s == "=") switchSelector = 1; // blue
        else if (["'", '"'].includes(s)) {
          quotationChar = s;
          switchSelector = 9; // quotationChar
        } else switchSelector = 4; // purple
      }
    }
  }
  syntaxColor(span, switchSelector);
  x.appendChild(span);
  if (![' ', '\n'].includes(s)) prevWord = s;
  switchSelector = 0;
}



// refactor later -------------------------------------------------------------------------------- >

const mysqlProcessWord = (s, x) => {
  if (mysqlKeywords.includes(s.toUpperCase())) {
    x.innerHTML += '<span class="mysqlKeyword">' + htmlentities.encode(s) + '</span>';
  } else if (mysqlDatatypes.includes(s.toUpperCase())) {
    x.innerHTML += '<span class="yellow">' + htmlentities.encode(s) + '</span>';
  } else {
    s = Array.from(s);
    for (let c of s) {
      if (quotationChar != null) {
        x.innerHTML += '<span class="green">' + c + '</span>';
        if (c == quotationChar) quotationChar = null;
      } else if (['"', "'", "`"].includes(c)) {
        x.innerHTML += '<span class="green">' + c + '</span>';
        quotationChar = c;
      } else if (mysqlNumbers.includes(c) && mysqlNumbers.includes(s[0])) x.innerHTML += '<span class="number-color">' + c + '</span>';
      else if (c == ')') x.innerHTML += '<span class="red">' + c + '</span>';
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
  pre.innerHTML = `<span class="light-blue">` + htmlentities.encode('<') + `<span class="red">html</span><span class="light-blue">` + htmlentities.encode('>') + "</span>";
  html.appendChild(pre);
  for (j in array[i][0]) {
    pre = document.createElement('pre');
    let htmlCode = array[i][0][j].html.split('');





    updateCache(htmlCode);
    while (cache.first) {
      htmlProcessWord(cache.pop(), cache.value(), pre);
    }

    
    code += array[i][0][j].html;
    html.appendChild(pre);
    count++;
  }
  pre = document.createElement('pre');
  pre.innerHTML = `<span class="light-blue">` + htmlentities.encode('</') + `<span class="red">html</span><span class="light-blue">` + htmlentities.encode('>') + "</span>";
  html.appendChild(pre);
  if (count != 0) card.appendChild(html);
  htmlCode.push(code);
  code = '';
  count = 0;
  let css = document.createElement('div');
  css.classList.add('code');
  pre = document.createElement('pre');
  pre.innerHTML = `<span class="light-blue">` + htmlentities.encode('<') + `<span class="red">style</span><span class="light-blue">` + htmlentities.encode('>') + "</span>";
  css.appendChild(pre);
  for (j in array[i][1]) {
    pre = document.createElement('pre');


    let cssCode = array[i][1][j].css.split('');


    updateCache(cssCode);
    while (cache.first) {
      cssProcessWord(cache.pop(), cache.value(), pre);
    }


    
    code += array[i][1][j].css;
    css.appendChild(pre);
    count++;



  }
  pre = document.createElement('pre');
  pre.innerHTML = `<span class="light-blue">` + htmlentities.encode('</') + `<span class="red">style</span><span class="light-blue">` + htmlentities.encode('>') + "</span>";
  css.appendChild(pre);
  if (count != 0) card.appendChild(css);
  cssCode.push(code);
  code = '';
  count = 0;
  let js = document.createElement('div');
  js.classList.add('code');
  pre = document.createElement('pre');
  pre.innerHTML = `<span class="light-blue">` + htmlentities.encode('<') + `<span class="red">script</span><span class="light-blue">` + htmlentities.encode('>') + "</span>";
  js.appendChild(pre);
  for (j in array[i][2]) {
    pre = document.createElement('pre');
    if (array[i][2][j].js) {
      code += array[i][2][j].js;
      let jsCode = array[i][2][j].js.split('');
      updateCache(jsCode);
      while (cache.first) {
        jsProcessWord(cache.pop(), cache.value(), pre);
      }
    } else {





      // MySQL -------------------------------------------------------------------------------- >

      string = '';
      for (let line of array[i][2][j].mysql.split('\n')) {
        pre.innerHTML += '  ';
        scriptCount = line.split(" ").length - 1;
        for (let [k, word] of line.split(/(\s+)/).entries()) {
          lastChar = null;
          if ([";", ",", ")"].includes(word.slice(-1))) {
            lastChar = word.slice(-1);
            word = word.substring(0, word.length - 1);
          }
          let temp = word.split('(');
          if (temp.length != 1) {
            scriptCount = 0;
            for (piece of temp) {
              mysqlProcessWord(piece, pre);
              if (scriptCount != temp.length - 1) pre.innerHTML += '<span class="red">(</span>';
              scriptCount++;
            }
          } else {
            if (k == scriptCount) mysqlProcessWord(word, pre);
            else mysqlProcessWord(word, pre);
          }
          if (lastChar != null) mysqlProcessWord(lastChar, pre);
        }
        pre.innerHTML += '\n';
      }








    }
    js.appendChild(pre);
    count++;
  }
  pre = document.createElement('pre');
  pre.innerHTML = `<span class="light-blue">` + htmlentities.encode('</') + `<span class="red">script</span><span class="light-blue">` + htmlentities.encode('>') + "</span>";
  js.appendChild(pre);
  if (count != 0) card.appendChild(js);
  scriptCode.push(code);
  code = '';
  count = 0;
  
  
  
  
  
  
  
  
  
  
  
  
  // output ------------------------------------------------------------------------ >
  
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
    } else if (array[i][3][j].output) {
      pre.classList.add('output');
      pre.innerHTML = array[i][3][j].output;
    } else if (array[i][3][j].pictureComment) {





      card.classList.add("pictureComment");
      pre.classList.add('output');
      pre.innerHTML = `<img src="/images/${array[i][3][j].pictureComment}">`;


    } else if (array[i][3][j].pictureCommentSm) {



      card.classList.add("pictureComment");
      pre.classList.add('output-sm');
      pre.innerHTML = `<img src="/images/${array[i][3][j].pictureCommentSm}">`;


    } else if (array[i][3][j].pictureCommentLg) {



      card.classList.add("pictureComment");
      pre.classList.add('output-lg');
      pre.innerHTML = `<img src="/images/${array[i][3][j].pictureCommentLg}">`;
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
for (let i = cards.length - 1; i > 0; i--) {
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
for (let i = 0; i < array.length; i++) {
  if (array[i][4].render) {
    buttonPointer.push(count)
    modifyButtonYspace(count);
    buttons[count].addEventListener('click', () => {
      buildApp(i)
    });
    count++;
  } else buttonPointer.push(null);
}
const buttonSizeUpdate = () => {
  for (i in array) modifyButtonYspace(i)
};
window.addEventListener('resize', buttonSizeUpdate);
buttonSizeUpdate();
const buildApp = (i) => {
  if (document.querySelector('.app-container') != null) document.querySelector('.app-container').remove();
  let appContainer = document.createElement('div');
  appContainer.classList.add('app-container');
  let background = document.createElement('div');
  background.classList.add('background');
  background.addEventListener('click', () => {
    appContainer.remove();
    document.body.style.overflow = 'auto';
  });
  appContainer.appendChild(background);
  let iframe = document.createElement('iframe');
  iframe.classList.add('iframe');
  let html = '<body>' + `<style>` + cssCode[i] + `</style>` + htmlCode[i] + `<script>` + scriptCode[i] + `</script>` + '</body>';
  iframe.srcdoc = html;
  appContainer.appendChild(iframe);
  document.body.style.overflow = 'hidden';
  document.body.appendChild(appContainer);
  console.log(html);
}