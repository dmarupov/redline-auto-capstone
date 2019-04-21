var request = new XMLHttpRequest()

request.open('GET', 'http://localhost:8080/report', true)
request.onload = function () {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)
  var year = new Date().getFullYear();
  if (request.status >= 200 && request.status < 400) {
    data.forEach(vehicle => {
      if (("APR" == vehicle.soldMonth || "MAY" == vehicle.soldMonth || "JUN" == vehicle.soldMonth ||
        "Apr" == vehicle.soldMonth || "May" == vehicle.soldMonth || "Jun" == vehicle.soldMonth) && year == vehicle.soldYear) {
        makeList(vehicle);
      }
    });
  }
}


request.send();

function makeList(vehicle) {
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
    listSoldDate.innerHTML = vehicle.soldMonth + " " + vehicle.soldDate + " " + vehicle.soldYear;
    listID.innerHTML = vehicle.id;
    listVIN.innerHTML = vehicle.vin;
    listYear.innerHTML = vehicle.year;
    listMake.innerHTML = vehicle.make;
    listModel.innerHTML = vehicle.model;
    listTransmission.innerHTML = vehicle.transmission;
    listDriveTrain.innerHTML = vehicle.driveTrain;
    listColor.innerHTML = vehicle.color;
    listDesc.innerHTML = vehicle.vehicleDescription;
    listType.innerHTML = vehicle.type;
    listPrice.innerHTML = "$" + vehicle.price;
    listMilage.innerHTML = vehicle.milage;

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