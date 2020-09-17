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

let storeData;
let promiseFulfilled = false;
const fetchStoreData = async () => {
  await fetch(`/shop/getStoreData`)
    .then(response => response.json())
    .then(data => {
      storeData = data;
      promiseFulfilled = true;
    });
}
fetchStoreData();

const getIndex = (array, attr, value) => {
  for(var i = 0; i < array.length; i += 1) {
    if(array[i][attr] === value) {
      return i;
    }
  }
  return -1;
}

// const masterContainer = document.getElementById("master-container");
const masterCartContainerBackground = document.getElementById("master-cart-container-background");

let isMobile = false; //initiate as false
// device detection
if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) { 
      isMobile = true;
}

const banner = document.getElementById("banner");
if (!isMobile) {
  banner.src = '/shop/media/flower1.jpg';
} else {
  banner.src = '/shop/media/flower2.jpg';
}

//navbar position control ----
let spacer = 100;
const getWidth = () => {
  return window.innerWidth;
}
let pageWidth = getWidth();
const adjustSpacer = () => {
  if (pageWidth > 800) {
    spacer = spacer;
  } else {
    spacer = 75;
  }
}
adjustSpacer();
window.onresize = () => {
  pageWidth = getWidth();
  adjustSpacer();
}
let pageYOffset = 0;
let delayEndUp = spacer;
let delayEndDown = 1;
let currentScrollDirection = "down";
let previousScrollDirection = "down";
let navbarVisable = false;
const navbar = document.getElementById("navbar");
const advertisement = document.getElementById("advertisement");
window.addEventListener("scroll", () => {
  if (window.pageYOffset < pageYOffset) {
    currentScrollDirection = "up";
    if (previousScrollDirection !== currentScrollDirection) {
      delayEndUp = window.pageYOffset - spacer;
    }
  } else {
    currentScrollDirection = "down";
    if (previousScrollDirection !== currentScrollDirection) {
      delayEndDown = window.pageYOffset + spacer;
    } 
  }
  if (window.pageYOffset == 0) {
    navbarVisable = false;
  } else if (window.pageYOffset < pageYOffset && window.pageYOffset < spacer) {
    navbar.classList.add("navbar-scrollUp");
  }
  if (window.pageYOffset < pageYOffset && window.pageYOffset < spacer && !navbarVisable) {
    navbar.classList.add("navbar-relative");
    navbar.classList.remove("navbar-scrollUp");
    navbar.classList.remove("navbar-scrollDown");
    advertisement.classList.remove("advertisement-container-margin");
  }
  if (window.pageYOffset < pageYOffset && window.pageYOffset >= spacer && window.pageYOffset <= delayEndUp) {
    navbar.classList.add("navbar-scrollUp");
    navbar.classList.remove("navbar-scrollDown");
    advertisement.classList.add("advertisement-container-margin");
    navbarVisable = true;
  }
  if (window.pageYOffset > pageYOffset && window.pageYOffset < spacer && !navbarVisable){
    navbar.classList.add("navbar-relative");
    navbar.classList.remove("navbar-scrollUp");
    navbar.classList.remove("navbar-scrollDown");
    advertisement.classList.remove("advertisement-container-margin");
  }
  if (window.pageYOffset > pageYOffset && window.pageYOffset > spacer && window.pageYOffset >= delayEndDown) {
    navbar.classList.add("navbar-scrollDown");
    navbar.classList.remove("navbar-relative");
    advertisement.classList.remove("advertisement-container-margin");
    navbarVisable = false;
  }
  pageYOffset = window.pageYOffset;
  previousScrollDirection = currentScrollDirection;
});

let test = document.querySelectorAll(".logo");
for (let i=0; i<test.length; i++) {
  test[i].addEventListener('click', () => {
    window.location.href = '/shop';
  });
}

const shopProductsContainer = document.getElementById("shop-products-container");

const openCart = () => {
  modalContainer.classList.add("visable");
  document.body.classList.add("hide-scroll");
  modalContainer.classList.add("transition");

  if (window.pageYOffset > spacer && navbar.classList.contains("navbar-scrollUp")) {
    navbar.classList.add("navbar-scrollDown");
    navbar.classList.add("navbar-scrollUp");
    advertisement.classList.remove("advertisement-container-margin");
    navbarVisable = false;
  }

  if (!isMobile) {
    masterContainer.classList.remove("margin-right");
    navbar.classList.add("navbar-cart-open");
    if (window.pageYOffset <= spacer) {
      navbar.classList.remove("navbar-scrollUp");
    }
    advertisement.classList.add("padding-right");

    // productName.classList.add("margin-right");

    // shopProductsContainer.classList.add("shop-products-container-cart-open");
  }

  masterCartContainerBackground.classList.remove("display-none");
};

const closeCart = () => {
  modalContainer.classList.remove("visable");
  document.body.classList.remove("hide-scroll");

  if (window.pageYOffset > spacer) {
    advertisement.classList.add("advertisement-container-margin");
  }
  setTimeout(() => {
    navbar.classList.add("navbar-scrollUp");
  }, 100)
  navbar.classList.remove("navbar-scrollDown");
  navbarVisable = true;

  if (!isMobile) {
    masterContainer.classList.remove("margin-right");
    navbar.classList.remove("navbar-cart-open");
    advertisement.classList.remove("padding-right");
    // productName.classList.remove("margin-right");
    // shopProductsContainer.classList.remove("shop-products-container-cart-open");
  }
  masterCartContainerBackground.classList.add("display-none");
}

//cart-btn click
const modalContainer = document.querySelector(".modal-container");
const cartBtn = document.querySelector(".cart-btn");
const exitBtn = document.querySelector(".exit-btn");

cartBtn.addEventListener('click', () => {
  openCart();
});
exitBtn.addEventListener('click', () => {
  closeCart();
});
masterCartContainerBackground.addEventListener('click', () => {
  closeCart();
});

itemContainers = document.querySelectorAll(".item-container");

let selectedPicture = 0;
let itemContainerImageContainer = document.querySelector(".item-container-image-container");
const imgDivs = document.querySelectorAll(".img");
for (let i=0; i<imgDivs.length; i++) {
  imgDivs[i].addEventListener("click", () => {
    itemContainerImageContainer.childNodes[1].src = "/shop" + imgDivs[i].childNodes[1].src.split(['shop'])[1];
    imgDivs[selectedPicture].classList.remove("selected");
    imgDivs[i].classList.add("selected");
    selectedPicture = i;
  });
  imgDivs[i].addEventListener("mouseover", () => {
    itemContainerImageContainer.childNodes[1].src = "/shop" + imgDivs[i].childNodes[1].src.split(['shop'])[1];
    imgDivs[selectedPicture].classList.remove("selected");
    imgDivs[i].classList.add("selected");
    selectedPicture = i;
  });
};

var productName = document.getElementById("product-name");

const iterateItemInStorage = (item) => {
  if (!localStorage.getItem(item)) {
    return 1
  } else {
    return +localStorage.getItem(item) + 1;
  }
};

const masterCartContainer = document.getElementById("master-cart-container");
const clearCart = () => {
  masterCartContainer.innerHTML = '';
};

const updateSubtotal = () => {
  const cartItems = document.querySelectorAll(".cart-container");
  let total = 0;
  for (let [i, cartItem] of cartItems.entries()) {
    total += +cartItem.childNodes[3].childNodes[3].childNodes[1].childNodes[3].innerHTML * 
    +storeData[getIndex(storeData, 'name', `${localStorage.key(i)}`)].price;
    
  }
  document.getElementById("subtotal").innerHTML = `$${total.toFixed(2)}`
}

let promiseFulfilledChecked = false;
const updateCart = () => {
  if (!promiseFulfilled) {
    if (!promiseFulfilledChecked) {
      promiseFulfilledChecked = true;
    }
    setTimeout(updateCart, 100);
  } else {
    clearCart();
    for (let i=0; i<localStorage.length; i++) {
      const cartItem = document.createElement("div");
      cartItem.classList.add("cart-container");
      cartItem.innerHTML += `
      <div class="cart-container-image-container"><img src="/shop/products/${localStorage.key(i)}/1.png" alt="${localStorage.key(i)}"></div>
      <div class="cart-container-title">
        <div class="cart-container-title-header">
          <div>${localStorage.key(i)} - size</div>
        </div>
        <div class="cart-container-title-footer">
          <div class="quantity">
          <div class="arrow"><i class="fas fa-minus"></i></div>
          <div>${localStorage.getItem(localStorage.key(i))}</div>
          <div class="arrow"><i class="fas fa-plus"></i></i></div>
          </div>
          <div class="cart-container-title-footer-price">$${+storeData[getIndex(storeData, 'name', `${localStorage.key(i)}`)].price}</div>
        </div>
      </div>
      <div class="cart-container-footer"><div id="cartItem${i}" class="fas fa-times-circle"></div></div>`;
      cartItem.lastChild.firstChild.addEventListener("click", () => {
        localStorage.removeItem(localStorage.key(i));
        updateCart();
      });
      cartItem.childNodes[3].childNodes[3].childNodes[1].childNodes[1].addEventListener("click", () => {
        if (+localStorage.getItem(localStorage.key(i)) !== 1) {
          localStorage.setItem(localStorage.key(i), +localStorage.getItem(localStorage.key(i)) - 1);
          updateCart();
        }
      });
      cartItem.childNodes[3].childNodes[3].childNodes[1].childNodes[5].addEventListener("click", () => {
        if (+localStorage.getItem(localStorage.key(i)) !== 99) {
          localStorage.setItem(localStorage.key(i), +localStorage.getItem(localStorage.key(i)) + 1);
          updateCart();
        }
        updateCart();
      });
      masterCartContainer.appendChild(cartItem);
    }
    updateSubtotal();
  }
};

const addItemToCart = () => {
  openCart();
  localStorage.setItem(`${productName.innerHTML}`, 
  `${iterateItemInStorage(productName.innerHTML)}`);
  updateCart();
};

document.querySelector(".checkout-btn").addEventListener("click", () => {
  window.location.href = 'checkout';
});

updateCart();