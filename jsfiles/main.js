const images = [
  'images/book1.jpg',
  'images/book2.jpg',
  'images/book3.jpg',
  'images/book4.jpg'
];

let currentIndex = 0;

function changeImage() {
  const backgroundImageDiv = document.querySelector('.background-image');

  // Fade out the current background
  backgroundImageDiv.style.opacity = 0; // Start fading out

  setTimeout(() => {
      // Change the background image
      currentIndex = (currentIndex + 1) % images.length; // Move to the next image
      backgroundImageDiv.style.backgroundImage = `url(${images[currentIndex]})`; // Change the background image

      // Fade in the new background
      backgroundImageDiv.style.opacity = 1; // Fade back in
  }, 1000); // Wait for fade out before changing the image
}

function startSlideshow() {
  setInterval(changeImage, 6000); // Change image every 6 seconds
}

// Initial setup
document.addEventListener("DOMContentLoaded", () => {
  const backgroundImageDiv = document.querySelector('.background-image');
  backgroundImageDiv.style.backgroundImage = `url(${images[currentIndex]})`; // Set the initial background
  startSlideshow();
});

function changeImage() {
  const backgroundImageDiv = document.querySelector('.background-image');

  // Fade out the current background
  backgroundImageDiv.style.opacity = 0; // Start fading out
  backgroundImageDiv.style.transform = 'scale(1.1)'; // Slightly zoom out

  setTimeout(() => {
      // Change the background image
      currentIndex = (currentIndex + 1) % images.length; // Move to the next image
      backgroundImageDiv.style.backgroundImage = `url(${images[currentIndex]})`; // Change the background image

      // Fade in the new background
      backgroundImageDiv.style.opacity = 1; // Fade back in
      backgroundImageDiv.style.transform = 'scale(1)'; // Reset zoom
  }, 1000); // Wait for fade out before changing the image
}

const container = document.querySelector(".container");
const linkItems = document.querySelectorAll(".link-item");
const darkMode = document.querySelector(".dark-mode");
const logo = document.querySelector(".logo svg");

//Container Hover
container.addEventListener("mouseenter", () => {
  container.classList.add("active");
});

//Container Hover Leave
container.addEventListener("mouseleave", () => {
  container.classList.remove("active");
});

//Link-items Clicked
for (let i = 0; i < linkItems.length; i++) {
  if (!linkItems[i].classList.contains("dark-mode")) {
    linkItems[i].addEventListener("click", (e) => {
      linkItems.forEach((linkItem) => {
        linkItem.classList.remove("active");
      });
      linkItems[i].classList.add("active");
    });
  }
}
// Function to toggle dark mode
function toggleDarkMode() {
  const body = document.body;
  const isDarkMode = body.classList.toggle('dark-mode');

  // Remove the opposite class to avoid conflicts
  if (isDarkMode) {
      body.classList.remove('light-mode');
  } else {
      body.classList.add('light-mode');
  }

  // Save the user's theme preference to local storage
  localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');

  // Update the icon and text based on the theme
  updateThemeIconAndText(isDarkMode);
}

// Function to update the icon and text based on the current theme
function updateThemeIconAndText(isDarkMode) {
  const themeIcon = document.querySelector('.switch-theme ion-icon');
  const themeText = document.querySelector('.switch-theme p');

  if (isDarkMode) {
      themeIcon.setAttribute('name', 'sunny-outline');
      themeText.textContent = 'Light Mode';
      themeText.style.color = '#f0f0f0'; // Ensure text is white for dark mode
  } else {
      themeIcon.setAttribute('name', 'moon-outline');
      themeText.textContent = 'Dark Mode';
      themeText.style.color = '#333'; // Ensure text is dark for light mode
  }
}

// Load the user's theme preference when the page loads
window.onload = function () {
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.body.classList.add(savedTheme + '-mode');
  updateThemeIconAndText(savedTheme === 'dark');
};


function openWindow(imageSrc) {
  // Find the iframe and set its src to the clicked image's source
  var iframe = document.getElementById("window-iframe");
  iframe.src = imageSrc; // Sets the src of the iframe to the image URL

  // Show the overlay window (modal)
  var overlay = document.getElementById("overlay-window");
  overlay.style.display = "block";
}

function closeWindow() {
  // Hide the overlay window when the close button is clicked
  var overlay = document.getElementById("overlay-window");
  overlay.style.display = "none";

  // Clear the iframe src to stop playing video/image
  var iframe = document.getElementById("window-iframe");
  iframe.src = "";
}


