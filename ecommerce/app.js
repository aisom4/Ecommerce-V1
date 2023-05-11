window.onload = function () {
  fetch("products.json")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      let productHTML = "";

      for (let i = 0; i < data.length; i++) {
        let item = data[i];

        let product = `<div class="seller">
          

          <span class="item-row-2">
            <h2>${item.name}</h2>
          </span>

          <span class="item-row-3">
            <h2>${item.artist}</h2>
          </span>

          <span class="item-row-4">
            <h2>${item.price}</h2>
          </span>
          <button>BUY NOW</button>

          <span class="item-row-1">
            <img src="${item.product_image}" alt="" />
          </span>
        </div>
        `;
        productHTML += product;
      }

      let bestsellers = document.getElementsByClassName("best-sellers")[0];
      bestsellers.innerHTML = productHTML;
    });
};

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("homeSlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

//SLIDESHOWWWW+============================
// let slideIndex = 0;
// showSlides();

// function showSlides() {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {
//     slideIndex = 1;
//   }
//   slides[slideIndex - 1].style.display = "block";
//   setTimeout(showSlides, 2000); // Change image every 2 seconds
// }
