let mainnav = document.getElementById('js-menu');
let navbarToggle = document.getElementById('js-nav-toggle');

navbarToggle.addEventListener("click",function() {
    mainnav.classList.toggle('active');
});