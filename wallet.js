/// Initialize balance from localStorage or set to 100 if not found
let walletBalance = parseFloat(localStorage.getItem('walletBalance')) || 100.00;

// Update the displayed balance
function updateBalanceDisplay() {
    document.getElementById('walletBalance').innerText = walletBalance.toFixed(2);
}

// Function to save balance to localStorage
function saveBalance() {
    localStorage.setItem('walletBalance', walletBalance);
}

// Cash In functionality
document.getElementById('cash-in-btn').addEventListener('click', function() {
    const amount = parseFloat(prompt("Enter amount to Cash In:"));
    if (!isNaN(amount) && amount > 0) {
        walletBalance += amount; // Increase balance
        saveBalance(); // Save to localStorage
        updateBalanceDisplay(); // Update the display
        alert(`You have successfully cashed in $${amount.toFixed(2)}!`);
    } else {
        alert("Invalid amount. Please enter a valid number.");
    }
});

// Send Money functionality
document.getElementById('send-money-btn').addEventListener('click', function() {
    const amount = parseFloat(prompt("Enter amount to Send Money:"));
    if (!isNaN(amount) && amount > 0 && amount <= walletBalance) {
        walletBalance -= amount; // Decrease balance
        saveBalance(); // Save to localStorage
        updateBalanceDisplay(); // Update the display
        alert(`You have successfully sent $${amount.toFixed(2)}!`);
    } else if (amount > walletBalance) {
        alert("Insufficient funds to send this amount.");
    } else {
        alert("Invalid amount. Please enter a valid number.");
    }
});

// Pay functionality
document.getElementById('pay-btn').addEventListener('click', function() {
    const amount = parseFloat(prompt("Enter amount to Pay:"));
    if (!isNaN(amount) && amount > 0 && amount <= walletBalance) {
        walletBalance -= amount; // Decrease balance
        saveBalance(); // Save to localStorage
        updateBalanceDisplay(); // Update the display
        alert(`You have successfully paid $${amount.toFixed(2)}!`);
    } else if (amount > walletBalance) {
        alert("Insufficient funds to pay this amount.");
    } else {
        alert("Invalid amount. Please enter a valid number.");
    }
});

// Initialize display on page load
updateBalanceDisplay();



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