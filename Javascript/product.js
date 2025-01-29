//click event listener to display product details
cardWrapper.addEventListener("click", (event) => {
  const element = event.target.closest(".card");
  if (element) {
    const id = element.dataset.id;
    const product = productData.find((item) => item.id === parseInt(id, 10));

    // Populate the full product display
    const fullDisplay = document.querySelector(".fullproduct-display");
    fullDisplay.style.display = "flex";
    fullDisplay.innerHTML = `
      <div id="full-close">
        <i class="fa-solid fa-xmark close"></i>
      </div>
      <div class="product-image">
        <figure>
          <img src="${product.src}" alt="${product.name}" width="400px">
        </figure>
      </div>
      <div class="product-description">
        <h2>${product.name}</h2>
        <p>${product.desc}</p>
        <span>$ ${product.price}</span>
        <div class="ratings"></div>
        <div class="quantity">
          <div class="minus"><i class="fa-solid fa-minus add-minus"></i></div>
          <span class="totalQuantity">1</span>
          <div class="plus"><i class="fa-solid fa-plus add-minus"></i></div>
        </div>
        <button class="add-to-cart">Add to cart</button>
      </div>`;
    document.querySelector(".ratings").innerHTML = `${Array(
      Math.floor(product.rating)
    )
      .fill("★")
      .join(" ")}`;
  }
});

// Event delegation for all clicks inside the full display
document.addEventListener("click", (event) => {
  // Close the full display
  if (event.target.closest("#full-close")) {
    const fullDisplay = document.querySelector(".fullproduct-display");
    fullDisplay.style.display = "none";
  }

  // Handle quantity increment and decrement
  if (event.target.closest(".minus")) {
    const totalQuantity = document.querySelector(".totalQuantity");
    let quantity = parseInt(totalQuantity.innerText, 10);
    if (quantity > 0) {
      totalQuantity.innerText = quantity - 1;
    }
  }

  if (event.target.closest(".plus")) {
    const totalQuantity = document.querySelector(".totalQuantity");
    let quantity = parseInt(totalQuantity.innerText, 10);
    totalQuantity.innerText = quantity + 1;
  }
});

// Add to cart functionality
document.addEventListener("click", (event) => {
  if (event.target.classList.contains("add-to-cart")) {
    const fullDisplay = document.querySelector(".fullproduct-display");
    const name = fullDisplay.querySelector("h2").innerText;
    const desc = fullDisplay.querySelector("p").innerText;
    const price = parseInt(
      fullDisplay.querySelector("span").innerText.replace("$", "")
    );
    console.log(price);
    const src = fullDisplay.querySelector("img").src;

    const cartItem = { name, desc, price, src };

    // Save to localStorage
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(cartItem);
    localStorage.setItem("cart", JSON.stringify(cart));

    showNumberOfItems();
    alert(`${name} has been added to your cart!`);
  }
});
