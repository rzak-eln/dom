
const modal = document.querySelector(".modal");
const cartButton = document.querySelector(".cart-button");
let cartItems = [];
cartButton.addEventListener("click", () => {
  modal.classList.toggle("active");
});

const addToCartButtons = document.querySelectorAll(".button");
addToCartButtons.forEach((item) => {
  item.addEventListener("click", (event) => {
    let cartItem = {
      title: event.target.parentNode.parentNode.querySelector("h3").innerText,
      price: Number(
        event.target.parentNode.querySelector("h4").innerText.slice(0, -4)
      ),
      quantity: 1,
    };
    if (cartItems.find((e) => e.title === cartItem.title)) {
      alert("Item already in your cart!");
    } else {
      cartItems.push(cartItem);
      modal.innerHTML += `  <div class="cart-item">
        <h3>${cartItem.title}</h3>
        <p>${cartItem.price}</p>
        <div class="quantity">
          <i class="fa-solid fa-minus"></i>
          <p>${cartItem.quantity} </p>
          <i class="fa-solid fa-plus"></i>
        </div>
        <h4>${cartItem.price * cartItem.quantity}</h4>
      </div>`;
      const pluses = document.querySelectorAll(".fa-plus");
      pluses.forEach((plus) => {
        plus.addEventListener("click", function (event) {
          event.target.parentNode.querySelector("p").innerText =
            Number(event.target.parentNode.querySelector("p").innerText) + 1;
        });
      });
      const minuses = document.querySelectorAll(".fa-minus");
      minuses.forEach((plus) => {
        plus.addEventListener("click", function (event) {
          if (event.target.parentNode.querySelector("p").innerText > 1) {
            event.target.parentNode.querySelector("p").innerText =
              Number(event.target.parentNode.querySelector("p").innerText) - 1;
          }
        });
      });
    }

    console.log(cartItem);
  });
});