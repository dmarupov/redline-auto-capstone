var request = new XMLHttpRequest()

request.open('GET', 'http://localhost:8080/report', true)
request.onload = function() {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)
  var year = new Date().getFullYear();
  if (request.status >= 200 && request.status < 400) {
    data.forEach(make => {
        console.log(make.VHCL_SLDM + ": " + year);
    });
  
    var vehicles = data; 
    for(var i = 0, l = vehicles.length; i < l; i++){
        var vehicle = vehicles[i];
        console.log(year + ":" + vehicle.VHCL_SLDM);  
        if (("APR" == vehicle.VHCL_SLDM || "MAY" == vehicle.VHCL_SLDM || "JUN" == vehicle.VHCL_SLDM ||
           "Apr" == vehicle.VHCL_SLDM || "May" == vehicle.VHCL_SLDM || "Jun" == vehicle.VHCL_SLDM) && year == vehicle.VHCL_SLDY)
        {
          makeList(vehicle);
        }
    }   
  }
  }
  

request.send();

function makeList(vehicle) {
  // Establish the array which acts as a data source for the list
  var vehicleData = [vehicle];

  // Set up a loop that goes through the items in listItems one at a time
  var numberOfListItems = vehicleData.length;
  for (var i = 0; i < numberOfListItems; i++) {
    //Create a row for data
    var table = document.getElementById('table');
    var dataRow = document.createElement('tr');
    // create an item for each one
    var listSoldDate = document.createElement('td');
    var listID = document.createElement('td');
    var listVIN = document.createElement('td');
    var listYear = document.createElement('td');
    var listMake = document.createElement('td');
    var listModel = document.createElement('td');
    var listTransmission = document.createElement('td');
    var listDriveTrain = document.createElement('td');
    var listColor = document.createElement('td');
    var listDesc = document.createElement('td');
    var listType = document.createElement('td');
    var listPrice = document.createElement('td');
    var listMilage = document.createElement('td');

    // Add the item text
    listSoldDate.innerHTML = vehicleData[i].VHCL_SLDM + " " + vehicleData[i].VHCL_SLDD + " " + vehicleData[i].VHCL_SLDY;
    listID.innerHTML = vehicleData[i].VHCL_ID;
    listVIN.innerHTML = vehicleData[i].VHCL_VIN;
    listYear.innerHTML = vehicleData[i].VHCL_YEAR;
    listMake.innerHTML = vehicleData[i].VHCL_MAKE;
    listModel.innerHTML = vehicleData[i].VHCL_MODL;
    listTransmission.innerHTML = vehicleData[i].VHCL_TRNS;
    listDriveTrain.innerHTML = vehicleData[i].VHCL_DRTN;
    listColor.innerHTML = vehicleData[i].VHCL_COLR;
    listDesc.innerHTML = vehicleData[i].VHCL_DESC;
    listType.innerHTML = vehicleData[i].VHCL_TYPE;
    listPrice.innerHTML = "$" + vehicleData[i].VHCL_PRICE;
    listMilage.innerHTML = vehicleData[i].VHCL_MILG;

    dataRow.appendChild(listSoldDate);
    dataRow.appendChild(listID);
    dataRow.appendChild(listVIN);
    dataRow.appendChild(listYear);
    dataRow.appendChild(listMake);
    dataRow.appendChild(listModel);
    dataRow.appendChild(listTransmission);
    dataRow.appendChild(listDriveTrain);
    dataRow.appendChild(listColor);
    dataRow.appendChild(listDesc);
    dataRow.appendChild(listType);
    dataRow.appendChild(listPrice);
    dataRow.appendChild(listMilage);
    
    table.appendChild(dataRow);
  }

}