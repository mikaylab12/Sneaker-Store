// Script to initialize all 3rd party plugins, as well as needed functions for the site

// Initialize fullpage Fullpage
new fullpage("#fullpage", {
  anchors: ["home", "products", "reviews", "contact"],
  navigation: true,
  navigationPosition: "left",
  navigationTooltips: ["Home", "Products", "Reviews", "Contact"],
  center: true,
});

//   Init Animate On Scroll
AOS.init();

$(document).ready(function () {
  //   Initialize product slider and set options
  $("#product-slider").owlCarousel({
    items: 1,
    margin: 80,
    stagePadding: 400,
    loop: true,
    dots: false,
    autoplay: true,
    center: true,
  });
});

//   function to open modal
function openModal() {
  document.getElementById("modal").classList.toggle("modal-active");
}

//   Functionality to get random users
// Store URL in variable
let randomUserURL = "https://randomuser.me/api/?results=6";

//   Fetch the data
fetch(randomUserURL)
  .then((res) => res.json()) // Turn response into JSON format
  .then((data) => {
    // Get results from data and store in variable
    let users = data.results;
    // Get testimonial container from HTML
    let testimonialContainer = document.getElementById("testimonial-slider");
    // Loop over users and create testimonial for them
    users.forEach((user) => {
      testimonialContainer.innerHTML += `
                <div class="testimonial">
                    <p class="testimonial-message"><i class="fas fa-quote-left"></i>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <img class="testimonial-img" src="${user.picture.large}" alt="${user.name.first} ${user.name.last}">
                    <h4 class="testimonial-name">${user.name.first} ${user.name.last}</h4>
                </div>
            `;
    });
    //   Initialize testimonial slider
    $("#testimonial-slider").owlCarousel({
      items: 3,
      margin: 80,
      loop: true,
      stagePadding: 80,
      dots: false,
    });
  });
