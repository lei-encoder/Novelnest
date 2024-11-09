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
