var requestSlider = new XMLHttpRequest();

var mainSliderVhclImg1 = document.getElementById('main-slider-img');
var mainSliderVhclTitle1 = document.getElementById('main-slider-title');
var mainSliderVhclImg2 = document.getElementById('main-slider-img2');
var mainSliderVhclTitle2 = document.getElementById('main-slider-title2');

var mainSliderVhclBase64;
var vehicleMake = ["Fiat", "Jaguar"]; 
var vehicleModel = "500 Pop";
var vehicleYear = 2017;

requestSlider.open('GET', 'http://localhost:8080/slider-imgs' + "?vehicleMake=" + vehicleMake 
+ "&vehicleModel=" + vehicleModel + "&vehicleYear=" + vehicleYear, true);

requestSlider.onload = function () {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
  //Creating a container box for the vehicle listing
  if (requestSlider.status >= 200 && requestSlider.status < 400) {
    var i = 0;
    data.forEach(vehicle => {
      if (i == 0) {
        mainSliderVhclBase64 = vehicle.imageBlobStr;
        mainSliderVhclImg1.setAttribute('src', mainSliderVhclBase64);
        mainSliderVhclTitle1.innerHTML = vehicle.make + " " + vehicle.model;
        var price = numberWithCommas(vehicle.price);
        document.getElementById('main-slider_price').innerHTML = "$" + price;
        i++;
      } else if (i == 1) {
        mainSliderVhclBase64 = vehicle.imageBlobStr;
        mainSliderVhclImg2.setAttribute('src', mainSliderVhclBase64);
        mainSliderVhclTitle2.innerHTML = vehicle.make + " " + vehicle.model + " " + vehicle.year;
        price = numberWithCommas(vehicle.price);
        document.getElementById('main-slider_price2').innerHTML = "$" + price;
        i++;
      }
    });
  } else {
    console.log('error');
  }
}
requestSlider.send();