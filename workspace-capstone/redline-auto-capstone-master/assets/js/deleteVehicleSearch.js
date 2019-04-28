function toPassValue() {
  var year = 0;
  var vin = document.getElementById("VIN").value;
  var make = document.getElementById("make").value;
  var model = document.getElementById("model").value;
  if (document.getElementById("year").value) {
    year = document.getElementById("year").value;
  }
  deleteSearch(vin, make, model, year);
}

function deleteSearch(vehicleVin, vehicleMake, vehicleModel, vehicleYear) {
  var deleteRequest = new XMLHttpRequest()

  deleteRequest.open('GET', 'http://localhost:8080/vehicleDeleteSearch' + "?vehicleVin=" + vehicleVin + "&vehicleMake=" + vehicleMake +
    "&vehicleModel=" + vehicleModel + "&vehicleYear=" + vehicleYear, true)
  deleteRequest.onload = function () {
    // Begin accessing JSON data here
    var data = JSON.parse(this.response)

    console.log("15 data.length: " + data.length);
    if (data.length < 1) {
      alert("No results found.");

    }

    if (deleteRequest.status >= 200 && deleteRequest.status < 400) {
      data.forEach(vehicle => {
        makeList(vehicle);
      });
      hideAndShow(data);
      // var vehicles = data;
      //   hideAndShow(vehicles);
      // for (var i = 0; i < vehicles.length; i++) {
      //   var vehicle = vehicles[i];
      //   makeList(vehicle);
      // }
    }
  }

  deleteRequest.send();
}

function makeList(vehicle) {

  // Make a container element for the list
  var listContainerCheckbox = document.createElement('input');
  //listContainerCheckbox.type = "checkbox";
  listContainerCheckbox.setAttribute("type", "radio");
  listContainerCheckbox.setAttribute("id", "checkbox");
  listContainerCheckbox.setAttribute("name", "checkbox");
  listContainerCheckbox.setAttribute("value", vehicle.vin);

  //Create a row for data
  //document.getElementById('deleteTable').innerHTML = "";
  // <table style="width:98%" id="deleteTable">
  //   <tr>
  //     <th>Delete Vehicle</th>
  //     <th>Vehicle VIN</th>
  //     <th>Vehicle Make</th>
  //     <th>Vehicle Model</th>
  //     <th>Vehicle Year</th>
  //     <th>Vehicle Transmission</th>
  //     <th>Vehicle Drive Train</th>
  //     <th>Vehicle Color</th>
  //     <th>Vehicle Description</th>
  //     <th>Vehicle Type</th>
  //     <th>Vehicle Price</th>
  //     <th>Vehicle Milage</th>
  //   </tr>
  // </table>

  var tableDiv = document.getElementById('delete-box');
  var table = document.getElementById('deleteTable');
  // var table = "";
  // table = document.createElement('table');
  // table.setAttribute("id", "deleteTable");
  //console.log("43: " + table.childNodes[0]);
  
  var dataRow = document.createElement('tr');

  // create an item for each one
  var listCheckbox = document.createElement('td');
  listCheckbox.appendChild(listContainerCheckbox);
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

  dataRow.appendChild(listCheckbox);
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
  
  
  //tableDiv.appendChild(table);

}

// function makeList(vehicle) {
//   console.log("39 vehicle.length: " + vehicle.length);
//   // Make a container element for the list
//   var listContainerCheckbox = document.createElement('input');
//   //listContainerCheckbox.type = "checkbox";
//   listContainerCheckbox.setAttribute("type", "checkbox");
//   listContainerCheckbox.setAttribute("id", "checkbox");
//   listContainerCheckbox.setAttribute("name", "checkbox");

//   //Create a row for data

//   //var table = document.getElementById('deleteTable');
//   var table = "";
//   table = document.getElementById('deleteTable');
//   table.innerHTML = "";
//   var dataRow = document.createElement('tr');
//   // create an item for each one
//   var listCheckbox = document.createElement('td');
//   listCheckbox.appendChild(listContainerCheckbox);
//   var listVIN = document.createElement('td');
//   listVIN.setAttribute('id', vehicle.vin);
//   var listYear = document.createElement('td');
//   var listMake = document.createElement('td');
//   var listModel = document.createElement('td');
//   var listTransmission = document.createElement('td');
//   var listDriveTrain = document.createElement('td');
//   var listColor = document.createElement('td');
//   var listDesc = document.createElement('td');
//   var listType = document.createElement('td');
//   var listPrice = document.createElement('td');
//   var listMilage = document.createElement('td');

//   // Add the item text
//   listVIN.innerHTML = vehicle.vin;
//   listYear.innerHTML = vehicle.year;
//   listMake.innerHTML = vehicle.make;
//   listModel.innerHTML = vehicle.model;
//   listTransmission.innerHTML = vehicle.transmission;
//   listDriveTrain.innerHTML = vehicle.driveTrain;
//   listColor.innerHTML = vehicle.color;
//   listDesc.innerHTML = vehicle.vehicleDescription;
//   listType.innerHTML = vehicle.type;
//   listPrice.innerHTML = "$" + vehicle.price;
//   listMilage.innerHTML = vehicle.milage;

//   dataRow.appendChild(listCheckbox);
//   dataRow.appendChild(listVIN);
//   dataRow.appendChild(listYear);
//   dataRow.appendChild(listMake);
//   dataRow.appendChild(listModel);
//   dataRow.appendChild(listTransmission);
//   dataRow.appendChild(listDriveTrain);
//   dataRow.appendChild(listColor);
//   dataRow.appendChild(listDesc);
//   dataRow.appendChild(listType);
//   dataRow.appendChild(listPrice);
//   dataRow.appendChild(listMilage);

//   table.appendChild(dataRow);
// }

function hideAndShow(vehicles) {
  var x = document.getElementById("delete-box");
  if (vehicles.length > 0) {
    if (x.style.display === "none") {
      x.style.display = "block";
    }
  } else {
    x.style.display = "none";
  }
}