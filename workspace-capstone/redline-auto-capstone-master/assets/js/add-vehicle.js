var imageBlob;
const realFileBtn = document.getElementById("image-file");
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

const input = document.querySelector('input[id="image-file"]');
input.addEventListener("change", function (e) {

  const reader = new FileReader();
  reader.onload = function () {
    imageBlob = reader.result;
  }
  reader.readAsDataURL(input.files[0]);
}, false);

function validateRequired(vinValue) {
  if (!vinValue) {
    document.getElementById("submit-add-button").click();
    return false;
  } else {
    return true;
  }
}

function saveVehicle() {
  var vinValue = document.getElementById("add-vin").value;
  if (validateRequired(vinValue)) {
    addVehicle();
  } else {
    
  }
}
function addVehicle() {
  var requestSave = new XMLHttpRequest();

  requestSave.onload = function () {
    if (requestSave.status >= 200 && requestSave.status < 400) {
      console.log("Response: " + this.response)
    } else {
      console.log('error');
    }
  }

  requestSave.open('POST', 'http://localhost:8080/addVehicle', true);
  requestSave.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

  var vehicleMake = "", vehicleModel = "", vehicleVin = "", vehicleDetails = "", vehicleDrivetrain = "",
    vehicleTransmission = "", vehicleColor = "", vehicleType = "", vehicleImage = "";
  var vehicleYear = 0, vehicleMilage = 0, vehiclePrice = 0;

  if (document.getElementById("add-make").value) {
    vehicleMake = document.getElementById("add-make").value;
  }
  if (document.getElementById("add-model").value) {
    vehicleModel = document.getElementById("add-model").value;
  }
  if (document.getElementById("add-vin").value) {
    vehicleVin = document.getElementById("add-vin").value;
  }
  if (document.getElementById("add-vehicle-detals").value) {
    vehicleDetails = document.getElementById("add-vehicle-detals").value;
    console.log("79 textarea: " + vehicleDetails);
  }
  if (document.getElementById("add-drivetrain").value) {
    vehicleDrivetrain = document.getElementById("add-drivetrain").value;
  }
  if (document.getElementById("add-transmission").value) {
    vehicleTransmission = document.getElementById("add-transmission").value;
  }
  if (document.getElementById("add-color").value) {
    vehicleColor = document.getElementById("add-color").value;
  }
  if (document.getElementById("add-type").value) {
    vehicleType = document.getElementById("add-type").value;
  }

  if (document.getElementById("add-year").value) {
    vehicleYear = document.getElementById("add-year").value;
  }
  if (document.getElementById("add-milage").value) {
    vehicleMilage = document.getElementById("add-milage").value;
  }
  if (document.getElementById("add-price").value) {
    vehiclePrice = document.getElementById("add-price").value;
  }

  vehicleImage = getBlob(imageBlob);

  var params = "vehicleMake=" + vehicleMake + "&vehicleModel=" + vehicleModel
    + "&vehicleYear=" + vehicleYear + "&vehicleMilage=" + vehicleMilage
    + "&vehiclePrice=" + vehiclePrice + "&vehicleVin=" + vehicleVin
    + "&vehicleDetails=" + vehicleDetails + "&vehicleDrivetrain=" + vehicleDrivetrain
    + "&vehicleTransmission=" + vehicleTransmission + "&vehicleColor=" + vehicleColor
    + "&vehicleType=" + vehicleType + "&vehicleImage=" + vehicleImage;

  requestSave.send(params);
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