document.addEventListener("DOMContentLoaded", function() {
    var links = document.querySelectorAll(".menu a");
    var hoverTimeout;
    var isMenuHovered = false;
    var isMenuOpen = false; // Track menu open state
  
    // Function to handle menu activation
    function activateMenu() {
      if (isMenuHovered) {
        isMenuOpen = true; // Set menu open state
        document.querySelector(".nav").style.maxHeight = "100%"; // Open the menu
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
  
    // Add click event listener to the hamburger menu
    document.querySelector(".hamb").addEventListener("click", function() {
      if (isMenuOpen) {
        isMenuOpen = false; // Set menu open state
        document.querySelector(".nav").style.maxHeight = "0"; // Close the menu
      } else {
        isMenuOpen = true; // Set menu open state
        document.querySelector(".nav").style.maxHeight = "100%"; // Open the menu
      }
    });
  
    // Add click event listeners to the navigation links
    links.forEach(function(link) {
      link.addEventListener("click", function() {
        isMenuOpen = false; // Set menu open state to false when a link is clicked
        document.querySelector(".nav").style.maxHeight = "0"; // Close the menu
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
                if (text.charAt(index) === ' ') {
                    cursorElement.innerHTML += '&nbsp;'; // Add a non-breaking space
                } else {
                    cursorElement.innerHTML += '<a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" style="color: white;">' + text.charAt(index) + '</a>';
                }
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



