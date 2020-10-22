let photoContainer = document.querySelector(".photo-container");

let style = document.createElement("style");
style.classList.add("photo-container-style");
document.body.appendChild(style);

let prevX, currentX, mousedown = false;

photoContainer.addEventListener("mousedown", (e) => {
    console.log("mousedown");
    prevX = e.clientX;
    currentX = prevX;
    mousedown = true;
});
photoContainer.addEventListener("touchmove", (e) => {
    console.log("touchmove");
    console.log(e);
    prevX = e.clientX;
    currentX = prevX;
    mousedown = true;
    if (mousedown) {
        currentX = e.clientX;
        photoContainerPadding += currentX - prevX;
        document.querySelector(".photo-container-style").innerHTML = 
        `.photo-container {
            transform: translateX(${photoContainerPadding}px);
        }`;
        prevX = currentX;
    }
});


document.addEventListener("mouseup", (e) => {
    console.log("mouseup");
    mousedown = false;
});

let photoContainerPadding = 0;

document.addEventListener("mousemove", (e) => {
    if (mousedown) {
        currentX = e.clientX;
        photoContainerPadding += currentX - prevX;
        document.querySelector(".photo-container-style").innerHTML = 
        `.photo-container {
            transform: translateX(${photoContainerPadding}px);
        }`;
        prevX = currentX;
    }
});