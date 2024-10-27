function openModal(imageUrl, summary) {
    document.getElementById('bookIframe').src = imageUrl; // Set the iframe source to the book image
    document.getElementById('bookSummary').innerText = summary; // Set the book summary text
    document.getElementById('myModal').style.display = "block"; // Show the modal
}

function closeModal() {
    document.getElementById('myModal').style.display = "none"; // Hide the modal
    document.getElementById('bookIframe').src = ""; // Clear the iframe source
}

// Close modal when clicking outside of the modal content
window.onclick = function(event) {
    var modal = document.getElementById('myModal');
    if (event.target == modal) {
        closeModal();
    }
}

