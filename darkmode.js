// Dark Mode and Theme Switching
const container = document.querySelector(".container");
const linkItems = document.querySelectorAll(".link-item");
const darkModeToggle = document.querySelector(".switch-theme"); // Ensure you have a toggle button
const themeIcon = darkModeToggle.querySelector('ion-icon');
const themeText = darkModeToggle.querySelector('p');

// Load the user's theme preference when the page loads
window.onload = function () {
    const savedTheme = localStorage.getItem('theme') || 'light';
    // Ensure the correct class is applied based on the saved theme
    document.body.classList.add(savedTheme === 'dark' ? 'dark-mode' : 'light-mode');
    updateThemeIconAndText(savedTheme === 'dark'); // Update UI based on saved theme
};

// Function to toggle dark mode
function toggleDarkMode() {
    const body = document.body;
    const isDarkMode = body.classList.toggle('dark-mode'); // Toggle dark mode class

    // Ensure opposite class is applied correctly
    if (isDarkMode) {
        body.classList.remove('light-mode'); // Remove light mode class
    } else {
        body.classList.add('light-mode'); // Add light mode class
    }

    // Save the user's theme preference to local storage
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');

    // Update the icon and text based on the theme
    updateThemeIconAndText(isDarkMode);
}

// Function to update the icon and text based on the current theme
function updateThemeIconAndText(isDarkMode) {
    if (isDarkMode) {
        themeIcon.setAttribute('name', 'sunny-outline'); // Change icon to sunny
        themeText.textContent = 'Light Mode'; // Change text to Light Mode
        themeText.style.color = '#f0f0f0'; // Ensure text is white for dark mode
    } else {
        themeIcon.setAttribute('name', 'moon-outline'); // Change icon to moon
        themeText.textContent = 'Dark Mode'; // Change text to Dark Mode
        themeText.style.color = '#333'; // Ensure text is dark for light mode
    }
}

// Event listener for dark mode toggle
darkModeToggle.addEventListener('click', toggleDarkMode);

// Image Slideshow Functionality
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

// Initial setup for slideshow
document.addEventListener("DOMContentLoaded", () => {
    const backgroundImageDiv = document.querySelector('.background-image');
    backgroundImageDiv.style.backgroundImage = `url(${images[currentIndex]})`; // Set the initial background
    startSlideshow();
});

// Container Hover
container.addEventListener("mouseenter", () => {
    container.classList.add("active");
});

// Container Hover Leave
container.addEventListener("mouseleave", () => {
    container.classList.remove("active");
});

// Link-items Clicked
linkItems.forEach(linkItem => {
    linkItem.addEventListener("click", (e) => {
        linkItems.forEach(item => item.classList.remove("active"));
        linkItem.classList.add("active");
    });
});

document.querySelector('.see-more-btn').addEventListener('click', function() {
    const extraText = document.querySelector('.extra-text');
    if (extraText.style.display === 'none' || extraText.style.display === '') {
        extraText.style.display = 'block';
        this.textContent = 'See Less';
    } else {
        extraText.style.display = 'none';
        this.textContent = 'See More';
    }
});


document.querySelector('.theme-toggle-btn').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode');
});


function addToCart(bookName, price) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ name: bookName, price: parseFloat(price) }); // Store both name and price
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${bookName} has been added to your cart!`);
}


// Function to display items in the cart
function displayCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartContainer = document.getElementById('cart-items');

    cartContainer.innerHTML = ''; // Clear previous items

    if (cart.length === 0) {
        cartContainer.innerHTML = '<p>Your cart is empty.</p>';
        return;
    }

    cart.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('cart-item');
        // Display the book name and price without calculations
        itemElement.innerHTML = `<p>${item.name}</p><p>$${item.price.toFixed(2)}</p>`; 
        cartContainer.appendChild(itemElement);
    });
}

// Call the function on page load to display the cart
window.onload = displayCart;

