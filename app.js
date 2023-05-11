window.onload = function () {
  //fetches the data from the json page when the page is done loading
  fetch("products.json") //Initiates the fetching and data processing
    .then((response) => response.json()) //returns result of parsed JSON file
    .then((data) => {
      //data is a parameter used to loop through the JSON array
      console.log(data);
      let productHTML = ""; //Sets an empty spot for the HTML code for each of the products on the page.

      for (let i = 0; i < data.length; i++) {
        // a For Loop that
        let item = data[i];
        //After the loop the generated code will flow into the productHTML variable we will access the data using template literals for each item
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
        productHTML += product; //all generated code is added to the productHTML string to overwrite and display properly
      }

      let bestsellers = document.getElementsByClassName("best-sellers")[0]; // taking the items fromt he HTML class "best-sellers"
      bestsellers.innerHTML = productHTML;
    }); // assignment of the innerHTML property which updates the products on the actal page.
};

//Navagating through image slides on Home Page

let slideIndex = 1; //first variable is initialized to 1 to show which slide to display first
showSlides(slideIndex); //calling the future function "showSlides" and passing slideIndex variable as an argument

// Next/previous controls
function plusSlides(n) {
  //--Used along with currentSlide function to change the current slide by altering the slideIndex variable
  showSlides((slideIndex += n)); //increments the slideIndex based on the parameter n being passed
}

// Thumbnail image controls
function currentSlide(n) {
  // creating a function with the same n parameter to show the proper corresponding slides when pressing the dot
  showSlides((slideIndex = n));
}

function showSlides(n) {
  //taking the parameter n another time n-represents what slide is going to display. --Handles the actual slide display and the active dot display.
  let i; // Initializes i as undefined
  let slides = document.getElementsByClassName("homeSlides"); // letting the slides equal the class on the html page.
  let dots = document.getElementsByClassName("dot"); // calling the dot class from the index.html page
  if (n > slides.length) {
    //if our n variable is greater than the total number of slides the slideIndex will show the first slide
    slideIndex = 1;
  }
  if (n < 1) {
    // if it is less than 1 the slideIndex will be set to show the last slide. This helps bring the slides around if you are clicking through the photos backwards
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    //creates another loop and changes the display style to noen to hide the elements
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", ""); //.replace method is removing the active class from the dot that is no longer clicked
  }
  slides[slideIndex - 1].style.display = "block"; //display style is set to block and active class is added to update the dots on the bottom of the images
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
