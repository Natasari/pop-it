window.onscroll = function() {myFunction()};

var header = document.getElementById("header-id");

var sticky = header.offsetHeight;
// console.log(sticky)

function myFunction() {
  
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } 
  else {
    header.classList.remove("sticky");
  }
}