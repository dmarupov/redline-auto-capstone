var request = new XMLHttpRequest()

request.open('GET', 'http://localhost:8080/report', true)
request.onload = function() {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)
  
  if (request.status >= 200 && request.status < 400) {
    data.forEach(make => {
        console.log(make.VHCL_MAKE + ": " + make.VHCL_MODL);
    });
    var vehicles = data; 
    for(var i = 0, l = vehicles.length; i < l; i++){
        for(var j = 1, k = vehicles.length; j < k; j++){
            var vehicle = vehicles[i];  
        }
        
        makeList(vehicle);}
}
}

request.send();

function makeList(vehicle) {
  // Establish the array which acts as a data source for the list
  var requestVehicle = new XMLHttpRequest();
  var vehicleData = [vehicle];
  
    console.log("line 28: " + vehicleData.length + " Make: " + vehicleData.VHCL_MAKE);
  // Make a container element for the list
  requestVehicle.open('GET', 'http://localhost:8080/maxReport' + "?vehicleMake=" + vehicleData.VHCL_MAKE, true);
 
  requestVehicle.onload = function () {
    // Begin accessing JSON data here
    var data = JSON.parse(this.response);
    console.log(make.VHCL_MAKE + ": " + make.VHCL_MODL);
    if (requestVehicle.status >= 200 && requestVehicle.status < 400) {
      data.forEach(make => {
          console.log(make.VHCL_MAKE + ": " + make.VHCL_MODL);
      });
      console.log('error');
    }
  }
  
}
