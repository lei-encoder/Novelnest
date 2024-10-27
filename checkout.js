function displayCartItems() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartContainer = document.getElementById('cart-items');
    const totalAmountElement = document.getElementById('total-amount');
    let total = 0;

    if (cart.length === 0) {
        cartContainer.innerHTML = '<p>Your cart is empty.</p>';
        return;
    }

    cart.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('cart-item');
        itemElement.innerHTML = `<p>${item.name}</p>`;
        cartContainer.appendChild(itemElement);
    });

    totalAmountElement.textContent = `$${total.toFixed(2)}`; // Format total to 2 decimal places
}

// Checkout button functionality
document.getElementById('checkout-btn').addEventListener('click', function() {
    // Clear the cart from localStorage
    localStorage.removeItem('cart'); // This clears the cart data
    const thankYouMessage = document.getElementById('thank-you-message');
    thankYouMessage.style.display = 'block';
    this.style.display = 'none'; // Hide the checkout button
    displayCartItems(); // Update cart display to reflect the empty cart
});

// Call the function on page load
window.onload = displayCartItems;

function addToCart(title, price, img) {
    let book = {
        title: title,
        price: price,
        date: new Date().toLocaleDateString(),
        img: img
    };

    let purchaseHistory = JSON.parse(localStorage.getItem('purchaseHistory')) || [];
    purchaseHistory.push(book);
    localStorage.setItem('purchaseHistory', JSON.stringify(purchaseHistory));

    alert(`${title} has been added to your cart!`);
}
