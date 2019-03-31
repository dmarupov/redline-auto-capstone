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
         var vehicle = vehicles[i];   
   makeList(vehicle);}
}
}

request.send();

function makeList(vehicle) {
  // Establish the array which acts as a data source for the list
  var vehicleData = [vehicle];

  // Make a container element for the list
  var listContainerSoldDate = document.createElement('div');
  var listContainerID = document.createElement('div');
  var listContainerVIN = document.createElement('div');
  var listContainerYear = document.createElement('div');
  var listContainerMake = document.createElement('div');
  var listContainerModel = document.createElement('div');
  var listContainerTransmission = document.createElement('div');
  var listContainerDriveTrain = document.createElement('div');
  var listContainerColor = document.createElement('div');
  var listContainerDesc = document.createElement('div');
  var listContainerType = document.createElement('div');
  var listContainerPrice = document.createElement('div');
  var listContainerMilage = document.createElement('div');
   
  // Add it to the page
  document.getElementById('soldDate').appendChild(listContainerSoldDate);
  document.getElementById('ID').appendChild(listContainerID);
  document.getElementById('VIN').appendChild(listContainerVIN);
  document.getElementById('Year').appendChild(listContainerYear);
  document.getElementById('Make').appendChild(listContainerMake);
  document.getElementById('Model').appendChild(listContainerModel);
  document.getElementById('Transmission').appendChild(listContainerTransmission);
  document.getElementById('DriveTrain').appendChild(listContainerDriveTrain);
  document.getElementById('Color').appendChild(listContainerColor);
  document.getElementById('Description').appendChild(listContainerDesc);
  document.getElementById('Type').appendChild(listContainerType);
  document.getElementById('Price').appendChild(listContainerPrice);
  document.getElementById('Milage').appendChild(listContainerMilage);
  
  // Make the list
  var listElementSoldDate = document.createElement('ul');
  var listElementID = document.createElement('ul');
  var listElementVIN = document.createElement('ul');
  var listElementYear = document.createElement('ul');
  var listElementMake = document.createElement('ul');
  var listElementModel = document.createElement('ul');
  var listElementTransmission = document.createElement('ul');
  var listElementDriveTrain = document.createElement('ul');
  var listElementColor = document.createElement('ul');
  var listElementDesc = document.createElement('ul');
  var listElementType = document.createElement('ul');
  var listElementPrice = document.createElement('ul');
  var listElementMilage = document.createElement('ul');

  // Add it to the page
  listContainerSoldDate.appendChild(listElementSoldDate);
  listContainerID.appendChild(listElementID);
  listContainerVIN.appendChild(listElementVIN);
  listContainerYear.appendChild(listElementYear);
  listContainerMake.appendChild(listElementMake);
  listContainerModel.appendChild(listElementModel);
  listContainerTransmission.appendChild(listElementTransmission);
  listContainerDriveTrain.appendChild(listElementDriveTrain);
  listContainerColor.appendChild(listElementColor);
  listContainerDesc.appendChild(listElementDesc);
  listContainerType.appendChild(listElementType);
  listContainerPrice.appendChild(listElementPrice);
  listContainerMilage.appendChild(listElementMilage);
  

  // Set up a loop that goes through the items in listItems one at a time
  var numberOfListItems = vehicleData.length;

  for (var i = 0; i < numberOfListItems; ++i) {
      // create an item for each one
      var listSoldDate = document.createElement('li');
      var listID = document.createElement('li');
      var listVIN = document.createElement('li');
      var listYear = document.createElement('li');
      var listMake = document.createElement('li');
      var listModel = document.createElement('li');
      var listTransmission = document.createElement('li');
      var listDriveTrain = document.createElement('li');
      var listColor = document.createElement('li');
      var listDesc = document.createElement('li');
      var listType = document.createElement('li');
      var listPrice = document.createElement('li');
      var listMilage = document.createElement('li');
      
      // Add the item text
      listSoldDate.innerHTML = vehicleData[i].VHCL_SOLDDATE;
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
      
      
  
      // Add listItem to the listElement
      listElementSoldDate.appendChild(listSoldDate);
      listElementID.appendChild(listID);
      listElementVIN.appendChild(listVIN);
      listElementYear.appendChild(listYear);
      listElementMake.appendChild(listMake);
      listElementModel.appendChild(listModel);
      listElementTransmission.appendChild(listTransmission);
      listElementDriveTrain.appendChild(listDriveTrain);
      listElementColor.appendChild(listColor);
      listElementDesc.appendChild(listDesc);
      listElementType.appendChild(listType);
      listElementPrice.appendChild(listPrice);
      listElementMilage.appendChild(listMilage);
  }

}
