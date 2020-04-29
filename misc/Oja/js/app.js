(function() {

    document.querySelector('.toggle').addEventListener('click', toggle);
    document.querySelector('.mobile-nav__hamburger').addEventListener('click', toggle)


    function toggle() {
        document.querySelector('.toggle').classList.toggle('animate');
        document.querySelector('.mobile-nav__hamburger').classList.toggle('display')
    }
})();

// When the user scrolls the page, execute myFunction
window.onscroll = function() { myFunction() };

// Get the navbar
var header = document.getElementById("header");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    if (window.pageYOffset >= sticky) {
        header.classList.add("sticky")
    } else {
        header.classList.remove("sticky");
    }
}