// console.log("hello world");
// initilising cartManager
//const cartManager = new cartManager();

// Add to Cart button

const addToCartButtons = document.querySelectorAll(".shop-item-button");
for (let i = 0; i < addToCartButtons.length; i++) {
  let button = addToCartButtons[i];
  button.addEventListener("click", addToCartClicked);
}
function addToCartClicked(event) {
  let button = event.target;
  let shopItem = button.closest(".col");
  //console.log(shopItem);
  let title = shopItem.querySelector(".card-title").innerText;
}
let price = shopItem.querySelector(".shop-item-price").innerText;
  // let quantity = shopItem.querySelector(".card-quantity").innerText;
  let imagesrc = shopItem.querySelector(".card-image").src;
  console.log(title, price, imagesrc);
  addItemsToCart(title, price, imagesrc);
  updateCartTotal();

  function addItemsToCart(title, price, imagesrc) {
    let cartRow = document.createElement("div");
    cartRow.innerHTMLText = title;
    let cartItems = document.querySelector(".cart-items");
    let cartRowContents = `<div class="row cart-row mb-3">
        <div class=" col-3">
          <img
            class="cart-item-image"
            src="${imagesrc}"
            width="100"
            height="100"
          />
        </div>

// Update Cart Total
<div class="cart-item-title col-4">${title}</div>
<div class="cart-price col-1">${price}</div>
        <div class="cart-quantity col-4">
          <input
            class="cart-quantity-input"
            type="number"
            min="1"
            oninput="validity.valid||(value='');"
            value="1"
          />
          <button class="btn btn-danger btn-remove" type="button">
            Remove
          </button>
        </div>
      </div>`;
    cartRow.innerHTML = cartRowContents;
    cartItems.appendChild(cartRow);
  }
// Remove button
const cartElement = document.querySelector(".cart-items");
console.log(cartElement);
cartElement.addEventListener("click", function (event) {
  console.log("click", event.target);
  let buttonClicked = event.target;
  if (buttonClicked.classList.contains("btn-remove")) {
    buttonClicked.closest(".cart-row").remove();
    updateCartTotal();
  }
});

// Update Cart Total

cartElement.addEventListener("change", function (event) {
  console.log("change", event.target);
  let target = event.target;
  if (target.classList.contains("cart-quantity-input")) {
    updateCartTotal();
  }
});

function updateCartTotal() {
  //   const cartItemsContainer = document.querySelectorAll(".cartItems")[0];
  const cartRows = document.querySelectorAll(".cart-row");
  let total = 0;
  for (let i = 0; i < cartRows.length; i++) {
    let cartRow = cartRows[i];
    let priceElement = cartRow.querySelectorAll(".cart-price")[0];
    let quantityElement = cartRow.querySelectorAll(".cart-quantity-input")[0];
    let price = parseFloat(priceElement.innerText.replace("$", ""));
    let quantity = quantityElement.value;
    total = total + price * quantity;
  }
  document.querySelector(".cart-total-price").innerText = "$ " + total;
}


