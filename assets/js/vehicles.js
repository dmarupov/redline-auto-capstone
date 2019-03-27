var request = new XMLHttpRequest()

request.open('GET', 'http://localhost:8080/vehicles', true)
console.log("Line 4: " + this.request.response);
request.onload = function() {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)
  
  if (request.status >= 200 && request.status < 400) {
    data.forEach(make => {
        console.log(make.VHCL_MAKE + ": " + make.VHCL_MODL);
    });
    var vehicles = data;    
    //var vehicleTitle = document.getElementById('vehicle1');
    for(var i = 0, l = vehicles.length; i < l; i++){
      var carID="vehicle"+(i + 1);
      var vehicleTitle = document.getElementById(carID);
      var vehicle = vehicles[i];
     vehicleTitle.innerHTML = vehicle.VHCL_YEAR + " " + vehicle.VHCL_MAKE + " " + vehicle.VHCL_MODL;
    }
  } else {
    console.log('error')
  }
}
request.send();

var requestDesc = new XMLHttpRequest()

requestDesc.open('GET', 'http://localhost:8080/vehicles', true)
console.log("Line 30: " + this.requestDesc.response);
requestDesc.onload = function() {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)
  
  if (requestDesc.status >= 200 && requestDesc.status < 400) {
    data.forEach(make => {
        console.log(make.VHCL_DESC);
    });
    var vehiclesDescription = data;    
    for(var i = 0, l = vehiclesDescription.length; i < l; i++){
      var desID="vehicleDescription"+(i + 1);
      var vehicleDescribe = document.getElementById(desID);
      var vehicleDescription = vehiclesDescription[i];
      vehicleDescribe.innerHTML = vehicleDescription.VHCL_DESC;
    }
  } else {
    console.log('error')
  }
}
requestDesc.send();

var requestPrice = new XMLHttpRequest()

requestPrice.open('GET', 'http://localhost:8080/vehicles', true)
console.log("Line 55: " + this.requestPrice.response);
requestPrice.onload = function() {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)
  
  if (requestPrice.status >= 200 && requestPrice.status < 400) {
    data.forEach(make => {
        console.log(make.VHCL_PRICE);
    });
    var pricesDescription = data;    
    for(var i = 0, l = pricesDescription.length; i < l; i++){
      var priceID="price"+(i + 1);
      var priceDescribe = document.getElementById(priceID);
      var priceDescription = pricesDescription[i];
      priceDescribe.innerHTML = '$'+ priceDescription.VHCL_PRICE;
    }
  } else {
    console.log('error')
  }
}
requestPrice.send();
