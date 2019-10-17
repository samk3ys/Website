// Sticky Header
// Sticks menu once user starts scrolling so they always have it.
//
// Written by Sam Keys for his website (samk3ys.com)


window.onscroll = function() {stickHeader()};

var header = document.getElementById("header");
var menu = document.getElementById("menu");
var sticky = header.offsetTop;
var pageLinkWrapper = document.getElementById("pageLinkWrapper");
var homeLinkWrapper = document.getElementById("homeLinkWrapper");
var homeLink = document.getElementById("homeLink");
var logo = document.getElementById("logo");

function stickHeader() {
  if (window.pageYOffset > 100) {
    <!-- menu.classList.add("sticky"); -->
    menu.style.width = "100%";
    menu.style.position = "fixed";
    menu.style.top = "0";
    pageLinkWrapper.style.width = "80%";
    homeLinkWrapper.style.width = "20%";
    homeLink.style.height = "4rem";
    logo.style.height="0";
    if (window.innerWidth >= 1000) {
        menu.style.paddingLeft = "20%";
        menu.style.paddingRight = "20%";
    }
  } else {
    <!-- menu.classList.remove("sticky"); -->
    menu.style.position = "relative";
    menu.style.margin = "auto";
    pageLinkWrapper.style.width = "100%";
    homeLinkWrapper.style.width = "0";
    homeLink.style.height = "0";
    logo.style.height="6rem";
    if (window.innerWidth >= 1000) {
        menu.style.width = "60%";
        menu.style.paddingLeft = "0";
        menu.style.paddingRight = "0";
    }
  }
}