function createCartHtml(title, price, quantity) {
    const html = `<div class="row cart-row mb-3">
          <div class="cart-item col-3">
            <img
              class="cart-item-image"
              src="${imgsrc}"
              width="100"
              height="100"
            />
          </div>
        <div class="cart-item-title col-4">${title}</div>
        <div class="cart-price col-1">${price}</div>
          <div class="cart-quantity col-4">${quantity}
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
          </div>`}