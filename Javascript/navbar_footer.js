// Insert the header content
let header = document.querySelector(".full");
header.innerHTML = `
  <nav> 
    <div class="left"> 
      <i class="fa-solid fa-bars"></i><span>Menu</span>
    </div>
    <div class="right">
      <a href="index.html">
        <figure class="logo">
          <img src="Assets/Images/ceanlogo.png" width="70px" alt="logo">
        </figure>
      </a>
      <div class="icons">
        <a href="cart.html">
          <div class="icon">
            <i class="fa-solid fa-cart-shopping"></i><span>Cart</span>
            <div class="noofItems">0</div>
          </div>
        </a> 
        <div class="navcontact">
          <a href="contact.html"><button>Contact Us</button></a>
        </div>  
      </div>
    </div>
  </nav>
  <div class="content">
    <div class="leftside">
      <div class="fleft">
        <a href="products.html"><span>Our Products</span></a>
        <a href="blogs.html"><span>Blogs</span></a>
        <a href="aboutus.html"><span>About Us</span></a>
        <a href="contact.html"><span>Contact Us</span></a>
        <a href="researchpage.html"><span>Research</span></a>
      </div>
      <div class="sleft">
        <i><p>"Timeless Precision, Endless Possibilities"</p></i>
        <p>Captures a watch company's dedication to crafting accurate, enduring timepieces while embracing innovation and versatility to suit every lifestyle and taste.</p>
      </div>
    </div>
    <div class="fright">
      <h1 style="margin-top: 49px;">Our Famous Products</h1>
      <div class="slider-wrapper">
        <div id="leftbtn"><i class="fa-solid fa-chevron-left"></i></div>
        <div class="slider">
          <div>
            <span><img src="Assets/Images/watch4.avif" alt="watch4"></span>
            <span><img src="Assets/Images/watch6.avif" alt="watch6"></span>
            
            <span><img src="Assets/Images/watch3.avif" alt="watch3"></span>
          </div>
          <div>
            
            <span><img src="Assets/Images/watch1.avif" alt="watch1"></span>
            <span><img src="Assets/Images/watch5.avif" alt="watch5"></span>
            <span><img src="Assets/Images/watch2.avif" alt="watch2"></span>
          </div>
        </div>
        <div id="rightbtn"><i class="fa-solid fa-chevron-right"></i></div>
      </div>
    </div>
  </div>
`;

// Insert the footer content
let footer = document.querySelector(".footer");
footer.innerHTML = `
  <div>
    <div class="footerleft">
      <p>Copyright &copy; OceanDial. All rights reserved.</p>
      <div class="footerlinks">
        <a href="index.html">Home</a><span>|</span>
        <a href="products.html">Products</a><span>|</span>
        <a href="aboutus.html">About Us</a><span>|</span>
        <a href="blogs.html">Blogs</a><span>|</span>
        <a href="researchpage.html">Research</a><span>|</span>
        <a href="contact.html">Contact</a>
      </div>
    </div>
    <div class="footermiddle">
      <img src="Assets/Images/ceanlogo.png" alt="logo">
    </div>
    <div class="footerright">
      <h3>About Us</h3>
      <p>Captures a watch company's dedication to crafting accurate,<br/> enduring timepieces while embracing innovation and <br/>versatility to suit every lifestyle and taste.</p>
      <div class="sociallinks">
        <i class="fa-brands fa-facebook"></i>
        <i class="fa-solid fa-envelope"></i>
        <i class="fa-brands fa-x-twitter"></i>
        <i class="fa-brands fa-instagram"></i>
        <i class="fa-brands fa-pinterest"></i>
      </div>
    </div>
  </div>
`;

// Hamburger menu toggle
let hamburger = document.querySelector(".left");
hamburger.addEventListener("click", () => {
  let header = document.querySelector(".full");
  header.classList.toggle("fullHeight");
  document.body.style.overflow = header.classList.contains("fullHeight")
    ? "hidden"
    : "";
  hamburger.innerHTML = header.classList.contains("fullHeight")
    ? `<i class="fa-solid fa-xmark"></i><span>Close</span>`
    : `<i class="fa-solid fa-bars"></i><span>Menu</span>`;
});

// Image slider navigation
let sliderContainer = document.querySelector(".slider");
let next = document.getElementById("rightbtn");
let previous = document.getElementById("leftbtn");

next.addEventListener("click", () => {
  sliderContainer.scrollLeft += 400; // Move slider right
});

previous.addEventListener("click", () => {
  sliderContainer.scrollLeft -= 400; // Move slider left
});

// this will show number of items in out cart
const showNumberOfItems = () => {
  let items = JSON.parse(localStorage.getItem("cart"));

  document.querySelector(".noofItems").innerText = `${items.length}`;
};

showNumberOfItems();
