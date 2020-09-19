let shopBtnText = 'home';
let shopBtnHref = './';
if (window.location.pathname == '/shop/') {
    shopBtnText = 'shop';
    shopBtnHref = '#shop-products';
};

masterContainer.innerHTML += `
<div class="modal-container">
    <div id="master-cart-container" class="master-cart-container">
    </div>
    <div class="checkout-container">

        <!--------- GENERATE WITH JS --------->
        <div class="subtotal-container">
            <div class="">Subtotal</div>
            <div id="subtotal" class="">$</div>
        </div>
        <!-- ---------------------------------- -->

        <div class="info-container">Shipping, taxes, and discount codes calculated at checkout.</div>
        <div class="checkout-btn no-select">Check out</div>
    </div>
    <div class="exit-btn"><div class="far fa-times-circle"></div></div>
</div>
<div id="master-cart-container-background" class="display-none"></div>

<nav id="navbar" class="navbar">
    <div class="nav-child1 logo no-select">
        <h2>City Point Exotics</h2>
    </div>
    <div class="nav-child2">
        <div class="cart-btn"><div class="fas fa-shopping-cart"></div>
            <div class="cart-circle-container">
                <div class="cart-circle">55</div>
            </div>
        </div>
        <div class="about-btn"><a href="#social">about</a></div>
        <div class="shop-btn"><a href="${shopBtnHref}">${shopBtnText}</a></div>
    </div>
    <div class="nav-child3"><img class="logo no-select" src="/shop/media/leaf.svg" alt="fist"></div>
</nav>
<div id="advertisement" class="advertisement-container advertisement-container-margin no-select">
    <img id="banner" src="" alt="banner">
</div>`