// JavaScript to close the menu when a link is clicked
document.addEventListener("DOMContentLoaded", function() {
    var links = document.querySelectorAll(".menu a");
    var sideMenuCheckbox = document.getElementById("side-menu");
    var hoverTimeout;
    var isMenuHovered = false;
  
    // Function to handle menu activation
    function activateMenu() {
      if (isMenuHovered) {
        sideMenuCheckbox.checked = true;
      }
    }
  
    // Add hover event listener to the hamburger menu
    document.querySelector(".hamb").addEventListener("mouseenter", function() {
      isMenuHovered = true;
      // Set a delay before activating the menu
      hoverTimeout = setTimeout(activateMenu, 2000);
    });
  
    // Add mouseleave event listener to the hamburger menu
    document.querySelector(".hamb").addEventListener("mouseleave", function() {
      isMenuHovered = false;
      // Clear the timeout
      clearTimeout(hoverTimeout);
    });
  
    // Add click event listeners to the navigation links
    links.forEach(function(link) {
      link.addEventListener("click", function() {
        sideMenuCheckbox.checked = false;
      });
    });
  });
  
// JavaScript to handle the typing animation
document.addEventListener("DOMContentLoaded", function() {
    var text = "LandRP.net"; // Text to animate
    var typingCursor = document.getElementById("typing-animation");

    function getRandomSpeed(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    function typeWriter(text, cursorElement) {
        var index = 0;

        function type() {
            if (index < text.length) {
                var speed = getRandomSpeed(100, 350); // Generate a random typing speed between 100ms and 350ms
                cursorElement.innerHTML += text.charAt(index);
                index++;
                setTimeout(type, speed);
            } else {
                cursorElement.classList.remove("cursor-blink"); // Stop cursor blinking after typing animation completes
            }
        }

        type();
    }

    typeWriter(text, typingCursor);
});
