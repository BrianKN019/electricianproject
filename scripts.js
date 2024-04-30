window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    header.classList.toggle('nav-scrolled', window.scrollY > 0);
});
