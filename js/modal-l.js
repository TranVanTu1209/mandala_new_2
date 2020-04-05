function openModal() {
  document.getElementById("myModal").style.display = "block";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  var slides = document.getElementsByClassName("hd-mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

var slideIndex1 = 1;
showDivs(slideIndex1);

function plusDivs(n) {
  showDivs(slideIndex1 += n);
}

function showDivs(n) {
  let i;
  var x = document.getElementsByClassName("hd-mySlides2");
  var y = document.getElementsByClassName("hd-mySlides3")
  if (n > y.length) {slideIndex1 = 1}
  if (n < 1) {slideIndex1 = y.length}
  for (i = 0; i < y.length; i++) {
    y[i].style.display = "none";  
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "inline";  
  }
  for (i = 0; i < slideIndex1 - 1; i++) {
    x[i].style.display = "none";  
  }
  for (i = 0; i < slideIndex1 - 1; i++){
    y[i].style.display = "inline";
  }
}