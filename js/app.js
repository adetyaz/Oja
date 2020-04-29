! function() {
    function e() { document.querySelector(".toggle").classList.toggle("animate"), document.querySelector(".mobile-nav__hamburger").classList.toggle("display") }
    document.querySelector(".toggle").addEventListener("click", e), document.querySelector(".mobile-nav__hamburger").addEventListener("click", e)
}(), window.onscroll = function() { myFunction() };
var header = document.getElementById("header"),
    sticky = header.offsetTop;

function myFunction() { window.pageYOffset >= sticky ? header.classList.add("sticky") : header.classList.remove("sticky") }

{
    document.querySelector('.btn-join').addEventListener('click', (e) => {
        // alert(`we'll get back to you now`);
        e.preventDefault();
        document.querySelector('.subscribe__form--input').value = ''
    })
}