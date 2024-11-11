// Get the image link and iframe element
const openImageLink = document.getElementById('openImageLink');
const iframe = document.getElementById('imageFrame');

// Add event listener to open image in iframe when clicked
openImageLink.addEventListener('click', function(event) {
    event.preventDefault();  // Prevent default behavior of anchor link (page reload)

    const imageSrc = openImageLink.href;  // Get the image source URL
    iframe.src = imageSrc;  // Set iframe source to image URL
    iframe.style.display = 'block';  // Show the iframe
});

// Function to open the window with the specified image
function openWindow(imageSrc) {
    const overlayWindow = document.getElementById("overlay-window");
    const iframe = document.getElementById("window-iframe");

    overlayWindow.style.display = "flex";
    iframe.src = imageSrc; // Load the image in the iframe
}

// Function to close the modal
function closeWindow() {
    const overlayWindow = document.getElementById("overlay-window");
    const iframe = document.getElementById("window-iframe");

    overlayWindow.style.display = "none";
    iframe.src = ""; // Clear iframe source
}
