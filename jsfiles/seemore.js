const openCartButton = document.getElementById('open-cart');
const cartSidebar = document.getElementById('cart');
const checkoutButton = document.getElementById('checkout');
const cartItemsDiv = document.getElementById('cart-items');
let cart = [];

// Open/close the cart sidebar
openCartButton.addEventListener('click', () => {
    cartSidebar.classList.toggle('show');
});

// Add books to the cart
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', (event) => {
        const bookTitle = event.target.parentElement.querySelector('h2').innerText;
        cart.push(bookTitle);
        updateCart();
    });
});

// Checkout button functionality
checkoutButton.addEventListener('click', () => {
    cart = []; // Clear the cart on checkout
    updateCart();
    alert("Thank you for your purchase!");
});

// Update the cart display
function updateCart() {
    cartItemsDiv.innerHTML = ''; // Clear the current items
    cart.forEach(item => {
        const div = document.createElement('div');
        div.className = 'cart-item';
        div.innerText = item;
        cartItemsDiv.appendChild(div);
    });
}

// Close the cart when clicking outside of it
window.addEventListener('click', (event) => {
    if (cartSidebar.classList.contains('show') && !cartSidebar.contains(event.target) && !openCartButton.contains(event.target)) {
        cartSidebar.classList.remove('show');
    }
});

