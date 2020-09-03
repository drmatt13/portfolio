// smooth scrolling
$(document).ready(function(){
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    }
  });
});

let test = document.querySelectorAll(".logo");
for (let i=0; i<test.length; i++) {
  test[i].addEventListener('click', () => {
    window.location.href = '/shop';
  });
}

//cart-btn click
const modalContainer = document.querySelector(".modal-container");
const cartBtn = document.querySelector(".cart-btn");
const exitBtn = document.querySelector(".exit-btn");
cartBtn.addEventListener('click', () => {
    modalContainer.classList.toggle("visable");
    document.body.classList.toggle("hide-scroll");
});
exitBtn.addEventListener('click', () => {
    modalContainer.classList.toggle("visable");
    document.body.classList.toggle("hide-scroll");
});

let items = [];
itemContainers = document.querySelectorAll(".item-container");
itemDivs = document.querySelectorAll(".item");
for (let i=0; i<itemDivs.length; i++) {
  items.push(itemDivs[i].id);
  itemContainers[i].addEventListener("click", () => {
      window.location.href = `/shop/${items[i]}`;
    });
}

document.querySelector(".checkout-btn").addEventListener("click", () => {
  window.location.href = 'checkout';
});