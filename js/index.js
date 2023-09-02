var sliderImages = Array.from(
  document.querySelectorAll(".slider-container img")
);
// console.table(sliderImages);

// get number of slide
var sliderCount = sliderImages.length;

// set current slide
var currentSlide = 1;

// slide number ellment

var slideNumberElement = document.querySelector(".slider-number");

// prev And next btns

var prevBtn = document.getElementById("prev");
var nextBtn = document.getElementById("next");

// create the main ul element

var paginationElement = document.createElement("ul");

// set id on ul element

paginationElement.setAttribute("id", "pagination-ul");

// create list items based on slides count

for (var i = 1; i <= sliderCount; i++) {
  // create li
  var paginationItems = document.createElement("li");

  // set custom Attrubute

  paginationItems.setAttribute("data-index", i);

  // create li content
  paginationItems.appendChild(document.createTextNode(i));

  // Append items to main element
  paginationElement.appendChild(paginationItems);
}

// Add The created Ui lelement to the Page

document.getElementById("indicators").appendChild(paginationElement);

// get new ul
var paginationCreatedUl = document.getElementById("pagination-ul");

var paginationsBullets = Array.from(
  document.querySelectorAll("#pagination-ul li")
);

for (var i = 0; i < paginationsBullets.length; i++) {
  paginationsBullets[i].onclick = function() {
    currentSlide = parseInt(this.getAttribute("data-index"));

    theChecker();
  };
}
// triger the theChecker

theChecker();

// prev And next functions
nextBtn.onclick = nextSlide;
prevBtn.onclick = prevSlide;

function nextSlide() {
  if (nextBtn.classList.contains("disabled")) {
    return false;
  } else {
    currentSlide++;
    theChecker();
  }
}

function prevSlide() {
  if (prevBtn.classList.contains("disabled")) {
    return false;
  } else {
    currentSlide--;
    theChecker();
  }
}

// Checker function

function theChecker() {
  // set the slide number
  slideNumberElement.textContent =
    "Slide #" + currentSlide + " Of " + sliderCount;

  // remove active class for image
  removeAllActive();

  // set active class on current slide

  sliderImages[currentSlide - 1].classList.add("active");

  // set active class on current pagination

  paginationCreatedUl.children[currentSlide - 1].classList.add("active");

  // Check if current is the first
  if (currentSlide == 1) {
    // Add disabled class on prevBtn
    prevBtn.classList.add("disabled");
  } else {
    // Remove disabled class on prevBtn
    prevBtn.classList.remove("disabled");
  }

  // Check if current is the last
  if (currentSlide == sliderCount) {
    // Add disabled class on prevBtn
    nextBtn.classList.add("disabled");
  } else {
    // Remove disabled class on prevBtn
    nextBtn.classList.remove("disabled");
  }
}

// Remove All class active for pagination And images

function removeAllActive() {
  // loop throw images
  sliderImages.forEach((img) => {
    img.classList.remove("active");
  });

  // loop throw pagination Bullets
  paginationsBullets.forEach((bullet) => {
    bullet.classList.remove("active");
  });
}
