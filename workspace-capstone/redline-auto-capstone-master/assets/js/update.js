var imageBlob;
function generateUpdatePageInfo() {
  var vinValue = document.getElementById("vin").value;

  if (validateRequired(vinValue)) {
    console.log("3 vin: " + vinValue);
    getVehicleForUpdate(vinValue);
  } else {
    searchAndShowResults(null);
  }
}

function searchAndShowResults(vehicle) {

  var inputMake = document.getElementById("update-make");
  var inputModel = document.getElementById("update-model");
  var inputYear = document.getElementById("update-year");
  var inputMilage = document.getElementById("update-milage");
  var inputPrice = document.getElementById("update-price");
  var inputVin = document.getElementById("update-vin");
  var inputVhclDetails = document.getElementById("vehicle-detals");
  var inputDrivetrain = document.getElementById("update-drivetrain");
  var inputTransmission = document.getElementById("update-transmission");
  var inputColor = document.getElementById("update-color");
  var inputType = document.getElementById("update-type");

  inputMake.value = vehicle.make;
  inputModel.value = vehicle.model;
  inputYear.value = vehicle.year;
  inputMilage.value = vehicle.milage;
  inputPrice.value = vehicle.price;
  inputVin.value = vehicle.vin;
  inputVhclDetails.value = vehicle.vehicleDescription;
  inputDrivetrain.value = vehicle.driveTrain;
  inputTransmission.value = vehicle.transmission;
  inputColor.value = vehicle.color;
  inputType.value = vehicle.type;

  const realFileBtn = document.getElementById("update-image-file");
  const customTxt = document.getElementById("custom-text");
  const addImageBtn = document.getElementById("addImage");
  addImageBtn.addEventListener("click", function () {
    realFileBtn.click();
  });
  realFileBtn.addEventListener("change", function () {
    if (realFileBtn.value) {
      customTxt.innerHTML = realFileBtn.value;
    }
  });

  const input = document.querySelector('input[id="update-image-file"]');
  input.addEventListener("change", function (e) {

    const reader = new FileReader();
    reader.onload = function () {
      imageBlob = reader.result;
    }
    reader.readAsDataURL(input.files[0]);
  }, false);

  var x = document.getElementById("update-box");
  if (vehicle) {
    if (x.style.display === "none") {
      x.style.display = "block";
    }
  } else {
    x.style.display = "none";
  }
}

function getVehicleForUpdate(vinValue) {

  var reqVhclUpdate = new XMLHttpRequest();
  reqVhclUpdate.open('GET', 'http://localhost:8080/searchVhclUpdate' + "?vinValue=" + vinValue, true);

  reqVhclUpdate.onload = function () {
    // Begin accessing JSON data here
    var data = JSON.parse(this.response);

    if (reqVhclUpdate.status >= 200 && reqVhclUpdate.status < 400) {
      data.forEach(vehicle => {
        searchAndShowResults(vehicle);
      });
    } else {
      console.log('error');
    }
  }
  reqVhclUpdate.send();
}

function validateRequired(vinValue) {
  if (!vinValue) {
    document.getElementById("submit-button").click();
    return false;
  } else {
    return true;
  }
}

function updateVehicle() {
  var requestUpdate = new XMLHttpRequest();

  requestUpdate.onload = function () {
    // Begin accessing JSON data here
    var data = JSON.parse(this.response);

    if (requestUpdate.status >= 200 && requestUpdate.status < 400) {
      console.log("Response: " + this.response)
    } else {
      console.log('error');
    }
  }

  requestUpdate.open('POST', 'http://localhost:8080/updateVehicle', true);
  requestUpdate.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

  var vehicleMake = "", vehicleModel = "", vehicleVin = "", vehicleDetails = "", vehicleDrivetrain = "", 
      vehicleTransmission = "", vehicleColor = "", vehicleType = "", vehicleImage = "";
  var vehicleYear = 0, vehicleMilage = 0, vehiclePrice = 0;

  if (document.getElementById("update-make").value) {
    vehicleMake = document.getElementById("update-make").value;
  }
  if (document.getElementById("update-model").value) {
    vehicleModel = document.getElementById("update-model").value;
  }
  if (document.getElementById("update-vin").value) {
    vehicleVin = document.getElementById("update-vin").value;
  }
  if (document.getElementById("vehicle-detals").value) {
    vehicleDetails = document.getElementById("vehicle-detals").value;
  }
  if (document.getElementById("update-drivetrain").value) {
    vehicleDrivetrain = document.getElementById("update-drivetrain").value;
  }
  if (document.getElementById("update-transmission").value) {
    vehicleTransmission = document.getElementById("update-transmission").value;
  }
  if (document.getElementById("update-color").value) {
    vehicleColor = document.getElementById("update-color").value;
  }
  if (document.getElementById("update-type").value) {
    vehicleType = document.getElementById("update-type").value;
  }

  if (document.getElementById("update-year").value) {
    vehicleYear = document.getElementById("update-year").value;
  }
  if (document.getElementById("update-milage").value) {
    vehicleMilage = document.getElementById("update-milage").value;
  }
  if (document.getElementById("update-price").value) {
    vehiclePrice = document.getElementById("update-price").value;
  }

  vehicleImage = getBlob(imageBlob);
  console.log("143 vehicleImage: " + vehicleImage);
  var params = "vehicleMake=" + vehicleMake + "&vehicleModel=" + vehicleModel
    + "&vehicleYear=" + vehicleYear + "&vehicleMilage=" + vehicleMilage
    + "&vehiclePrice=" + vehiclePrice + "&vehicleVin=" + vehicleVin
    + "&vehicleDetails=" + vehicleDetails + "&vehicleDrivetrain=" + vehicleDrivetrain
    + "&vehicleTransmission=" + vehicleTransmission + "&vehicleColor=" + vehicleColor
    + "&vehicleType=" + vehicleType + "&vehicleImage=" + vehicleImage;

  requestUpdate.send(params);
}

function getBlob(imageBlob) {
  if (imageBlob) {
    var ret = imageBlob.replace('data:image/png;base64,', '');
    while (ret.includes('+')) {
      ret = ret.replace('+', '%2B');
    }
    blob = '{"mainImage": "' + ret + '"}';
    return blob;
  } else {
    return "{}";
  }
}