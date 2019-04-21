function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function generateMonthlySpecial(vehicle, i) {
  var monthylSpecialImg = document.getElementById('msImg' + (i+1));
  var monthylSpecialTitle = document.getElementById('msTitle' + (i+1));
  monthlySpecialBase64 = vehicle.imageBlobStr;
  
  monthylSpecialImg.setAttribute('src', monthlySpecialBase64);
  monthylSpecialTitle.innerHTML = vehicle.make + " " + vehicle.model;
  var price = numberWithCommas(vehicle.price);
  document.getElementById('msYear' + (i+1)).innerHTML = vehicle.year;
  document.getElementById('msPrice' + (i+1)).innerHTML = "$" + price;
  document.getElementById('msMilage' + (i+1)).innerHTML = vehicle.milage;
  document.getElementById('msDrivetrain' + (i+1)).innerHTML = vehicle.driveTrain;
  document.getElementById('msTransmission' + (i+1)).innerHTML = vehicle.transmission;

}


