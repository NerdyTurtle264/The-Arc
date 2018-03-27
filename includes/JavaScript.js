window.onload = function () {
  showDivs(slideIndex);
  carousel();
};

function MobileDropFunc() {
  var x = document.getElementById("MobileNav");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else {
    x.className = x.className.replace(" w3-show", "");
  }
}

function MobileAccFunc() {
  var x = document.getElementById("MobileNavAcc");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
    x.previousElementSibling.className += " w3-green";
  } else {
    x.className = x.className.replace(" w3-show", "");
    x.previousElementSibling.className =
      x.previousElementSibling.className.replace(" w3-green", "");
  }
}
function myMap() {
  myCenter = new google.maps.LatLng(41.216065, -79.391593);
  var mapOptions = {
    center: myCenter,
    zoom: 12, scrollwheel: true, draggable: true,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var map = new google.maps.Map(document.getElementById("googleMapClarion"), mapOptions);

  var marker = new google.maps.Marker({
    position: myCenter,
  });
  marker.setMap(map);
}
w3.includeHTML();

var slideIndex = 1;
var continueSlides = true;

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function plusDivsStop(n) {
  if (!continueSlides){
    showDivsStop(slideIndex += n);
  }
  showDivs(slideIndex += n);
  continueSlides = false;
}

function carousel() {
  plusDivs(1);
  if (continueSlides) {
    setTimeout(carousel, 1000); // Change image every 3 seconds
  }
}

function showDivs(n) {
  if (continueSlides) {
    var i;
    var x = document.getElementsByClassName("header-slides");
    if (n > x.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = x.length }
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    x[slideIndex - 1].style.display = "block";
  }
}

function showDivsStop(n) {
  var i;
  var x = document.getElementsByClassName("header-slides");
  if (n > x.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = x.length }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex - 1].style.display = "block";
}

function OverlayOn() {
  document.getElementById("overlay").style.display = "block";
}

function OverlayOff() {
  document.getElementById("overlay").style.display = "none";
}