// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navigace = document.getElementById("navigace");

// Get the offset position of the navbar
var sticky = navigace.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navigace.classList.add("sticky")
  } else {
    navigace.classList.remove("sticky");
  }
}