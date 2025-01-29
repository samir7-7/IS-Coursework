// Handle favorite action by changing the heart icon's color
let cardWrapper = document.getElementById("cardWrapper");
let carts = JSON.parse(localStorage.getItem("cartdata"));

cardWrapper.addEventListener("click", (event) => {
  let elementClicked = event.target;
  if (elementClicked.classList.contains("like")) {
    // Change heart icon to solid green
    elementClicked.innerHTML = `<i class="fa-solid fa-heart" style="color: #135c3b;"></i>`;

    // Add the product to the cart using its ID
    let product_ID = elementClicked.parentElement.parentElement.dataset.id;
    addtoCart(product_ID);

    console.log(product_ID); // Debug product ID
  }
});
