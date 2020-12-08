let size = 20;
gameContainer = document.getElementById("game-container");

let gridStyle = document.createElement("style");
gridStyle.innerHTML = `#game-container {
  grid-template-columns: repeat(${size}, 1fr);
}
.square-container {
  height: ${500/20}px;
  width: ${500/20}px;
  border: 1px solid black;
  position: relative;
}`;
document.body.appendChild(gridStyle);

let leftClick = false;
let rightClick = false;

document.addEventListener("mousedown", (e) => {
  if (e.button == 0) leftClick = true;
  if (e.button == 2) rightClick = true;
});

document.addEventListener("mouseup", (e) => {
  if (e.button == 0) leftClick = false;
  if (e.button == 2) rightClick = false;
});

for (let i=0; i<size**2; i++) {
  let div = document.createElement("div");
  div.setAttribute("Pid", `${i}`);
  div.setAttribute("open", "true");
  div.setAttribute("ondragover", "onDragOver(e)");

  div.addEventListener("mousedown", (e) => {
    if (e.button == 0) {
      div.setAttribute("open", "false");
      div.classList.add("closed");
    } else if (e.button == 2) {
      div.setAttribute("open", "true");
      div.classList.remove("closed");
    }
  });

  div.addEventListener("mouseenter", () => {
    if (leftClick) {
      div.setAttribute("open", "false");
      div.classList.add("closed");
    } else if (rightClick) {
      div.setAttribute("open", "true");
      div.classList.remove("closed");
    }
  });

  gameContainer.appendChild(div);
}

function onDragOver(event) {
  event.preventDefault();
  console.log(event);
}



const player = document.getElementById("player");
player.addEventListener("mousedown", () => {

});


