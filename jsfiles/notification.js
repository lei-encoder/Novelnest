


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

// Add event listeners to all remove buttons
document.querySelectorAll('.remove-btn').forEach(button => {
    button.addEventListener('click', function() {
        const notificationItem = this.parentElement;

        // Add fade-out class to start the animation
        notificationItem.classList.add('fade-out');

        // Remove the notification item from the DOM after the animation completes
        setTimeout(() => {
            notificationItem.remove();
        }, 500); // Match this duration to the CSS transition time (0.5s)
    });
});

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