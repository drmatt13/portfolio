masterContainer.innerHTML += `
<nav class='nav-mainX'>
    <div class="nav-main-exitX">
        <div class="fas fa-times-circle"></div>
    </div>
    <div class="logoX">
        <img src="/images/david.png" alt="user">
    </div>
    <ul>
        <li><a href="..\\..\\">Home</a></li>
        <li><a href="..\\..\\notes">Notes</a></li>
        <li><a href="..\\..\\apps">Apps</a></li>
        <li><a href="..\\..\\shop">Shop</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">LinkedIn</a></li>
    </ul>
</nav>

<div class="header-div1X">
    <div class="toggleNavX">
    <img src="\\images\\cube.svg" alt="">
    </div>
</div>`

// toggle nav
const toggleNavX = document.querySelector('.toggleNavX');
const navMainX = document.querySelector('.nav-mainX');
const navMainExitX = document.querySelector('.nav-main-exitX');
toggleNavX.addEventListener('click', () => {
    navMainX.classList.toggle('show-nav-mainX');
    toggleNavX.classList.toggle('hide-toggleNavX');

});
navMainExitX.addEventListener('click', () => {
    navMainX.classList.toggle('show-nav-mainX');
    toggleNavX.classList.toggle('hide-toggleNavX');

});