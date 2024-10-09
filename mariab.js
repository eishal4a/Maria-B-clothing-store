let logo = document.querySelector(".logo"); 


let originalLogoStyles = {
    height: logo.style.height,
    width: logo.style.width,
    marginLeft: logo.style.marginLeft,
    marginTop: logo.style.marginTop
}; // Store the original logo styles


window.addEventListener("scroll", function() { // Add a scroll event listener
  if (window.scrollY > 0) { // Check if the user has scrolled down
    logo.style.height = "50px"; // Set the logo height to 50px
    logo.style.width = "300px"; // Set the logo width to 300px
    logo.classList.add("fixed"); // Add the fixed class to make the logo fixed
    } else {
    // Reset the logo styles when the user scrolls back to the top
    logo.style.height = originalLogoStyles.height; // Reset height
    logo.style.width = originalLogoStyles.width; // Reset width
    logo.style.marginLeft = originalLogoStyles.marginLeft; // Reset margin left
    logo.style.marginTop = originalLogoStyles.marginTop; // Reset margin top
    logo.classList.remove("fixed"); // Remove the fixed class
    }
});


let menu = document.querySelector(".menu"); // Get the menu element

window.addEventListener("scroll", function() { // Add a scroll event listener
  if (window.scrollY > 0) { // Check if the user has scrolled down
    menu.classList.add("scrolled"); // Add the scrolled class to the menu element
  } else {
    menu.classList.remove("scrolled"); // Remove the scrolled class from the menu element
  }
});
let buttonParent = document.querySelector(".button-parent"); // Get the parent element of the button

window.onload=function(){
    document.getElementById("autoplay").play();
}