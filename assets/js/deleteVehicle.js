
function toPassDeleteValue() {
  var deleteRequest = new XMLHttpRequest()
  var vehicleVin = "";
  //validate();
  if (document.querySelector('input[name="checkbox"]:checked')) {
    vehicleVin = document.querySelector('input[name="checkbox"]:checked').value;
    console.log("8: inside if: " + vehicleVin);
  }
  console.log("10: " + vehicleVin);
//   deleteRequest.open('GET', 'http://localhost:8080/vehicleDelete' + "?vehicleVin=" + vehicleVin, true)
//   deleteRequest.onload = function () {
//     // Begin accessing JSON data here
//     var data = JSON.parse(this.response)

//     if (deleteRequest.status >= 200 && deleteRequest.status < 400) {
//       console.log("17 data.length: " + data.length);
//     }
//   }

//   deleteRequest.send();
 }

function validate() {
  var checkbox = document.querySelector('input[name="checkbox"]:checked');
  if (!checkbox) {
    alert('Please select!');
    return false;
  }
  else return confirm('confirm submit?');
}

// function makeList(vehicle) {
//   console.log("43");
//   // Make a container element for the list
//   var listContainerCheckbox = document.createElement('input');
//   //listContainerCheckbox.type = "checkbox";
//   listContainerCheckbox.setAttribute("type", "checkbox");
//   listContainerCheckbox.setAttribute("id", "checkbox");
//   listContainerCheckbox.setAttribute("name", "checkbox");
//   listContainerCheckbox.setAttribute("value", vehicle.vin);

//   //Create a row for data
//   //document.getElementById('deleteTable').innerHTML = "";
//   var table = document.getElementById('deleteTable');
//   //table.innerHTML = "";
//   var dataRow = document.createElement('tr');
//   // create an item for each one
//   var listCheckbox = document.createElement('td');
//   listCheckbox.appendChild(listContainerCheckbox);
//   var listVIN = document.createElement('td');
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
