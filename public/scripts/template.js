var isMobile = false; //initiate as false
// device detection
if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) { 
      isMobile = true;
}

const htmlStyle = `
html {
  background-color: #fff;
}`;

const barStyle1 = `
html {
  background-color: #fff;
}

/* width */
::-webkit-scrollbar {
  -webkit-appearance: none!important!important;
  width: 10px!important;
  height: 10px!important;
}

/* Track */
::-webkit-scrollbar-track {
  background: #4b4b4b!important;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888!important;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #999!important;
}

::-webkit-scrollbar-corner {
  background: #4b4b4b!important;
}`;

const barStyle2 = `
html {
  background-color: #fff;
}

/* width */
html::-webkit-scrollbar {
    -webkit-appearance: none!important;
    width: 7.5px!important;
    height: 7.5px!important;
}

/* Track */
html::-webkit-scrollbar-track {
    background: #4b4b4b!important;
    border-radius: 5px!important;
}

/* Handle */
html::-webkit-scrollbar-thumb {
    background: #888!important;
    border-radius: 5px!important;
}

/* Handle on hover */
html::-webkit-scrollbar-thumb:hover {
    background: #999!important;
}

html::-webkit-scrollbar-corner {
    background: #4b4b4b!important;
    border-radius: 5px!important;
    margin-top: 20px!important;
}

/* width */
body > *::-webkit-scrollbar {
    width: 7.5px!important;
    height: 7.5px!important;
}

/* Track */
body > *::-webkit-scrollbar-track {
    background: #4b4b4b!important;
    border-radius: 5px!important;
}

/* Handle */
body > *::-webkit-scrollbar-thumb {
    background: #888!important;
    border-radius: 5px!important;
}

/* Handle on hover */
body > *::-webkit-scrollbar-thumb:hover {
    background: #999!important;
}

body > *::-webkit-scrollbar-corner {
    background: #4b4b4b!important;
    border-radius: 5px!important;
    margin-top: 20px!important;
}`;

let qt8dfg7340g54jghj94;
let myiFrame;
let doc;
window.onload = () => {
  myiFrame = document.getElementById("body");
  doc = myiFrame.contentWindow.document;
  doc.head.innerHTML += '<style class="qt8dfg7340g54jghj94"></style>';
  qt8dfg7340g54jghj94 = doc.head.querySelector('.qt8dfg7340g54jghj94');
  if (isMobile == false) {
    qt8dfg7340g54jghj94.innerHTML = barStyle2;
  } else {
    qt8dfg7340g54jghj94.innerHTML = htmlStyle;
  }

  console.log(doc.body);
};

function setDocHeight() {
    document.documentElement.style.setProperty('--vh', `${window.innerHeight/100}px`);
};

window.addEventListener('resize', () => {
    setDocHeight();
});

window.addEventListener('orientationchange', () => {
    setDocHeight();
});

setDocHeight();

// is nav open? by default false
let nav = false;

// toggle nav
const toggleNav = document.querySelector('.toggleNav');
const navMain = document.querySelector('.nav-main');
const navMainExit = document.querySelector('.nav-main-exit');
toggleNav.addEventListener('click', () => {
    navMain.classList.toggle('show-nav-main');
    toggleNav.classList.toggle('hide-toggleNav');
    nav = true;
});
navMainExit.addEventListener('click', () => {
    navMain.classList.toggle('show-nav-main');
    toggleNav.classList.toggle('hide-toggleNav');
    nav = false;
});

// resize buttons & display
const toggleSize = document.querySelector('.toggleSize');
const body = document.querySelector('#body');

toggleSize.addEventListener('mouseover', () => {
  toggleSize.classList.add('g-highlight');
});

function fullScreen() {
  document.body.classList.toggle('hide-overflow');
  window.scrollTo(0, 0);
  body.classList.toggle('body2');
  toggleSize.classList.toggle('toggleSize2');
  if (nav == true) {
    navMain.classList.toggle('show-nav-main');
    toggleNav.classList.toggle('hide-toggleNav');
    nav = false;
  }
  toggleSize.classList.remove('g-highlight');
  setTimeout(() => {
    toggleSize.classList.remove('g-highlight');
  }, 1)
  if (isMobile == false) {
    if (body.classList.contains('body2')) {
      qt8dfg7340g54jghj94.innerHTML = barStyle1;
    } else {
      qt8dfg7340g54jghj94.innerHTML = barStyle2;
    };
  };
}

toggleSize.addEventListener('click', fullScreen);

// html, css, js buttons and divs
const html_btn = document.querySelector('.html-btn');
const css_btn = document.querySelector('.css-btn');
const js_btn = document.querySelector('.js-btn');
const d1_1_html = document.querySelector('.d1-1-html');
const d1_1_css = document.querySelector('.d1-1-css');
const d1_1_js = document.querySelector('.d1-1-js');

html_btn.addEventListener('click', () => {
  // change color of button//
  html_btn.style.setProperty("background-color", "#6bcc75");
  css_btn.style.setProperty("background-color", "#ccc");
  js_btn.style.setProperty("background-color", "#ccc");
  // change divs //
  d1_1_html.classList.remove('notVisable');
  d1_1_css.classList.add('notVisable');
  d1_1_js.classList.add('notVisable');
});

css_btn.addEventListener('click', () => {
  // change color of button//
  html_btn.style.setProperty("background-color", "#ccc");
  css_btn.style.setProperty("background-color", "#6bcc75");
  js_btn.style.setProperty("background-color", "#ccc");
  // change divs //
  d1_1_html.classList.add('notVisable');
  d1_1_css.classList.remove('notVisable');
  d1_1_js.classList.add('notVisable');
});

js_btn.addEventListener('click', () => {
  // change color of button//
  html_btn.style.setProperty("background-color", "#ccc");
  css_btn.style.setProperty("background-color", "#ccc");
  js_btn.style.setProperty("background-color", "#6bcc75");
  // change divs //
  d1_1_html.classList.add('notVisable');
  d1_1_css.classList.add('notVisable');
  d1_1_js.classList.remove('notVisable');
});