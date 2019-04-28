function getVehicles() {
  var requestVehicle = new XMLHttpRequest();

  //This is getting the make description from the dropdown
  var vehicleMake = document.getElementById('select-make');
  var strMake = vehicleMake.options[vehicleMake.selectedIndex].text;
  console.log("Vehicle Make: " + strMake);

  //This is getting the model description from the dropdown
  var vehicleModel = document.getElementById('select-model');
  var strModel = "";
  if (vehicleModel.options[vehicleModel.selectedIndex].text != 'Select a Model') {
    strModel = vehicleModel.options[vehicleModel.selectedIndex].text;
  }
 

  //This is getting the year from the dropdown
  var vehicleYear = document.getElementById('select-year');

  var strYear = 0;
  if (vehicleYear.options[vehicleYear.selectedIndex].text != 'Select a Year') {
    strYear = vehicleYear.options[vehicleYear.selectedIndex].text;
    
  }
 

  var priceSlideLower = document.getElementById('priceRange');
  var strSlideLower = priceSlideLower.childNodes[0].childNodes[1].childNodes[0].childNodes[0].innerHTML;
  var strLower = parseInt(strSlideLower.slice(1));

  var priceSlideUpper = document.getElementById('priceRange');
  var strSlideUpper = priceSlideUpper.childNodes[0].childNodes[2].childNodes[0].childNodes[0].innerHTML;
  var strUpper = parseInt(strSlideUpper.slice(1));

 

  requestVehicle.open('GET', 'http://localhost:8080/vehicleSearch' + "?vehicleMake=" + strMake + "&vehicleModel=" + strModel + "&vehicleYear=" + strYear + "&priceLow=" + strLower + "&priceHigh=" + strUpper, true);

  requestVehicle.onload = function () {
    // Begin accessing JSON data here
    var data = JSON.parse(this.response);

    if (requestVehicle.status >= 200 && requestVehicle.status < 400) {
      document.getElementById('vehicleListing').innerHTML = "";
      data.forEach(vehicle => {
       
        makeList(vehicle);
      });

    } else {
      console.log('error');
    }
  }

  requestVehicle.send();
}

function makeList(vehicle) {
  // Establish the array which acts as a data source for the list
  var vehicleData = [vehicle];

  // Make a container element for the list
  var listContainerImage = document.createElement('div');
  listContainerImage.className = 'image';
  var listContainerItem = document.createElement('div');
  listContainerItem.className = 'item';
  var listContainerDesc = document.createElement('div');
  listContainerDesc.className = 'desc';
  var listContainerVIN = document.createElement('div');
  listContainerDesc.className = 'vin';
  var listContainerPrice = document.createElement('div');
  listContainerPrice.className = 'price';

  // Add it to the page
  document.getElementById('vehicleListing').appendChild(listContainerImage);
  document.getElementById('vehicleListing').appendChild(listContainerItem);
  document.getElementById('vehicleListing').appendChild(listContainerDesc);
  document.getElementById('vehicleListing').appendChild(listContainerVIN);
  document.getElementById('vehicleListing').appendChild(listContainerPrice);

  // Make the list
  var listElementItem = document.createElement('ul');
  var listElementDesc = document.createElement('ul');
  var listElementPrice = document.createElement('ul');
  var listElementVIN = document.createElement('ul');
  var listElementImage = document.createElement('ul');

  // Add it to the page
  listContainerItem.appendChild(listElementItem);
  listContainerDesc.appendChild(listElementDesc);
  listContainerImage.appendChild(listElementImage);
  listContainerVIN.appendChild(listElementVIN);
  listContainerPrice.appendChild(listElementPrice);


  // Set up a loop that goes through the items in listItems one at a time
  var numberOfListItems = vehicleData.length;

  // create an item for each one

  var listItem = document.createElement('li');
  var listImage = document.createElement('li');
  var listDesc = document.createElement('li');
  var listVIN = document.createElement('li');
  var listPrice = document.createElement('li');

  // Add the item text
  var vhclLstBase64 = vehicle.imageBlobStr;
  listDesc.innerHTML = vehicle.vehicleDescription;
  listPrice.innerHTML = "$" + numberWithCommas(vehicle.price);
  listVIN.innerHTML = "VIN: " + vehicle.vin;

  //Add image to the vehicle in the list 
  var imageTag = new Image();
  imageTag.className = "img-scale";
  imageTag.id = "list-img";
  imageTag.alt = "foto";
  imageTag.src = vhclLstBase64;

  //listImage.innerHTML = imageTag;
  listImage.appendChild(imageTag);
  listItem.innerHTML = vehicle.year + " " + vehicle.make + " " + vehicle.model;

  // Add listItem to the listElement
  listElementImage.appendChild(listImage);
  listElementItem.appendChild(listItem);
  listElementDesc.appendChild(listDesc);
  listElementVIN.appendChild(listVIN);
  listElementPrice.appendChild(listPrice);
  //}

}




