const navLinks = document.querySelectorAll(".nav-menu .nav-link");
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click", () => {
  // Toggle mobile menu visibility
  document.body.classList.toggle("show-mobile-menu");
});
 // Close menu when the close button is clicked
menuCloseButton.addEventListener("click", () => menuOpenButton.click());

 // Close menu when the nav link is clicked
navLinks.forEach(link => {
  link.addEventListener("click", () => menuOpenButton.click());
})
// Order Now popup logic
const orderBtn = document.getElementById('orderNowBtn');
const orderPopup = document.getElementById('orderPopup');

orderBtn.addEventListener('click', (e) => {
  e.preventDefault();
  orderPopup.style.display = 'block';
});

function submitOrder() {
  const name = document.getElementById('custName').value.trim();
  const item = document.getElementById('orderItem').value;
  const qty = document.getElementById('orderQty').value;

  if (!name || !item || qty <= 0) {
    alert('Please fill out all fields before submitting.');
    return;
  }

  alert(`Thank you, ${name}! You ordered ${qty} ${item}(s).`);
  orderPopup.style.display = 'none';
}
const prices = {
  "Espresso": 80,
  "Cappuccino": 120,
  "Latte": 130,
  "Iced Coffee": 110,
  "Mocha": 140,
  "Burger & Fries": 200,
  "Sandwich": 150,
  "Salad": 120,
  "Cake": 100,
  "Brownie": 90,
  "Ice Cream": 80
};

const orderItemSelect = document.getElementById('orderItem');
orderItemSelect.addEventListener('change', () => {
  const selectedItem = orderItemSelect.value;
  if(selectedItem) {
    const price = prices[selectedItem];
    alert(`Price for ${selectedItem}: ₱${price}`);
  }
});

function submitOrder() {
  const name = document.getElementById('custName').value.trim();
  const item = document.getElementById('orderItem').value;
  const qty = parseInt(document.getElementById('orderQty').value);

  if (!name || !item || qty <= 0) {
    alert('Please fill out all fields before submitting.');
    return;
  }

  const totalPrice = prices[item] * qty;
  alert(`Thank you, ${name}! You ordered ${qty} ${item}(s). Total: ₱${totalPrice}`);
  orderPopup.style.display = 'none';
}


