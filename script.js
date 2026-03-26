// Declaring a Variables
const productNameInput = document.getElementById("product-name");
const productPriceInput = document.getElementById("product-price");
const addProductBtn = document.getElementById("add-product");
const cart = document.getElementById("cart");
const totalPriceSpan = document.getElementById("total-price");

let totalPrice = 0;

// Function to update the total price
function updateTotalPrice(amount) {
  totalPrice += amount;
  totalPriceSpan.textContent = totalPrice.toFixed(2);
}

// // Function to remove an Item
function removeItem(event) {
  const item = event.target.closest("li");
  const price = parseFloat(item.dataset.price);
  updateTotalPrice(-price);
  item.remove();
}

addProductBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const name = productNameInput.value.trim();
  const price = productPriceInput.value;
  // console.log(name, typeof price);

  // Checking for an empty product name, empty price, negative price
  if (!name || isNaN(price) || price <= 0) {
    alert("Hey, you need to add valid product and price");
    return;
  }
  const li = document.createElement("li");
  li.textContent = `${name} - ${price}`;
  cart.append(li);
  productNameInput.value = "";
  productPriceInput.value = "";
  updateTotalPrice(Number(price));
});
