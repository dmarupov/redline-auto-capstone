function getAdvVehicles() {
  var requestadvSearch = new XMLHttpRequest();

  var strMake = "";
  var strModel = "";
  var strYLower = 0;
  var strYUpper = 0;
  var strLower = 0;
  var strUpper = 0;
  var sedan = false;
  var hatchback = false;
  var convertible = false;
  var coupe = false;
  var suv = false;
  var pickup = false;

  //  // // //This is getting the make description from the dropdown
  var vehicleMake = document.getElementById('select-make');
  console.log("12: " + vehicleMake.options[vehicleMake.selectedIndex]);
  if (vehicleMake.options[vehicleMake.selectedIndex]) {
    strMake = vehicleMake.options[vehicleMake.selectedIndex].text;
  } else {
    strMake = "";
  }
  console.log("Vehicle Make: " + strMake);

  //This is getting the model description from the dropdown
  var vehicleModel = document.getElementById('select-model');
  if (vehicleModel.options[vehicleModel.selectedIndex]) {
    strModel = vehicleModel.options[vehicleModel.selectedIndex].text;
    if (strModel == 'Select a Model') {
      strModel = "";
    }
  } else {
    strModel = "";
  }
 

  var yearSlideLower = document.getElementById('year');
  var strYearLower = yearSlideLower.childNodes[0].childNodes[1].childNodes[0].childNodes[0].innerHTML;
  if (strYearLower !== "") {
    strYLower = parseInt(strYearLower);
  } else {
    strYLower = 0;
  }

  var yearSlideUpper = document.getElementById('year');
  var strYearUpper = yearSlideUpper.childNodes[0].childNodes[2].childNodes[0].childNodes[0].innerHTML;
  if (strYearUpper !== "") {
    strYUpper = parseInt(strYearUpper);
  } else {
    strYUpper = 0;
  }

  // console.log("24 Test: Lower: " + strYLower);
  // console.log("24 Test: Upper: " + strYUpper);  

  var priceSlideLower = document.getElementById('priceRange');
  var strSlideLower = priceSlideLower.childNodes[0].childNodes[1].childNodes[0].childNodes[0].innerHTML;
  if (strSlideLower.slice(1)) {
    strLower = parseInt(strSlideLower.slice(1));
  } else {
    strLower = 0;
  }

  var priceSlideUpper = document.getElementById('priceRange');
  var strSlideUpper = priceSlideUpper.childNodes[0].childNodes[2].childNodes[0].childNodes[0].innerHTML;
  if (strSlideUpper.slice(1)) {
    strUpper = parseInt(strSlideUpper.slice(1));
  } else {
    strUpper = 0;
  }

  // console.log("24 Test: Lower: " + strLower);
  // console.log("24 Test: Upper: " + strUpper);  
  if (document.getElementById('typeSedan').checked) {
    sedan = true;
  }
  //console.log("24 Test: sedan: " + document.getElementById('typeSedan').checked);
  if (document.getElementById('typeHatchback').checked) {
    hatchback = true;
  }
  //console.log("24 Test: hatchback: " + document.getElementById('typeHatchback').checked);

  if (document.getElementById('typeConvertible').checked) {
    convertible = true;
  }
  //console.log("24 Test: convertible: " + document.getElementById('typeConvertible').checked);
  if (document.getElementById('typeCoupe').checked) {
    coupe = true;
  }
  //console.log("24 Test: coupe: " + document.getElementById('typeCoupe').checked);
  if (document.getElementById('typeSuv').checked) {
    suv = true;
  }
  //console.log("24 Test: suv: " + document.getElementById('typeSuv').checked);
  if (document.getElementById('typePickup').checked) {
    pickup = true;
  }


  requestadvSearch.open('GET', 'http://localhost:8080/advVehicleSearch' + "?vehicleMake=" + strMake + "&vehicleModel=" + strModel + "&yearLow=" + strYLower + "&yearHigh=" + strYUpper + "&priceLow=" + strLower + "&priceHigh=" + strUpper +
    "&sedan=" + sedan + "&hatchback=" + hatchback + "&convertible=" + convertible + "&coupe=" + coupe + "&suv=" + suv + "&pickup=" + pickup, true);

  requestadvSearch.onload = function () {
    // Begin accessing JSON data here
    var data = JSON.parse(this.response);

    if (requestadvSearch.status >= 200 && requestadvSearch.status < 400) {
      document.getElementById('searchResults').innerHTML = "";
      data.forEach(vehicle => {
        //console.log("27: " + vehicle.make + ": " + vehicle.model);
        makeList(vehicle);
      });

    } else {
      console.log('error');
    }
  }

  requestadvSearch.send();
}

function makeList(vehicle) {
  console.log("126: " + vehicle.make + ": " + vehicle.model);
  // Make a container element for the list
  var listContainerImage = document.createElement('div');
  listContainerImage.className = 'image';
  var listContainerItem = document.createElement('div');
  listContainerItem.className = 'item';
  var listContainerDesc = document.createElement('div');
  listContainerDesc.className = 'desc';
  var listContainerPrice = document.createElement('div');
  listContainerPrice.className = 'price';
  var listContainerVIN = document.createElement('div');
  listContainerVIN.className = 'vin';

  // Add it to the page
  document.getElementById('searchResults').appendChild(listContainerImage);
  document.getElementById('searchResults').appendChild(listContainerItem);
  document.getElementById('searchResults').appendChild(listContainerDesc);
  document.getElementById('searchResults').appendChild(listContainerVIN);
  document.getElementById('searchResults').appendChild(listContainerPrice);

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
  listContainerPrice.appendChild(listElementPrice);
  listContainerVIN.appendChild(listElementVIN);

  // create an item for each one

  var listItem = document.createElement('li');
  var listImage = document.createElement('li');
  var listDesc = document.createElement('li');
  var listPrice = document.createElement('li');
  var listVIN = document.createElement('li');

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




