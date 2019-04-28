var request = new XMLHttpRequest();

// var monthylSpecialImg1 = document.getElementById('msImg1');
// var monthylSpecialTitle1 = document.getElementById('msTitle1');
// var mainSliderVhclImg2 = document.getElementById('main-slider-img2');
// var mainSliderVhclTitle2 = document.getElementById('main-slider-title2');

var monthlySpecialBase64;
// var vehicleMake = ["Fiat", "Jaguar"];
// var vehicleModel = "500 Pop";
// var vehicleYear = 2017;
console.log("12: This is it!");
request.open('GET', 'http://localhost:8080/monthly-special', true);
//request.open('GET', 'http://localhost:8080/makedropdownlst', true);
request.onload = function () {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
  ////////////////////////////////////////////////////////////////
  //Creating a container box for the monhtly vehicle special
  if (request.status >= 200 && request.status < 400) {
    var i = 0;
    data.forEach(vehicle => {
      if (i < 6) {
        generateMonthlySpecial(vehicle, i);     
        i++;
      } 
      // else if (i == 1) {
      //   generateMonthlySpecial(vehicle, i);
      //   i++;
      // }
    });
  } else {
    console.log('error');
  }
}
request.send();


// function numberWithCommas(x) {
//   return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
// }