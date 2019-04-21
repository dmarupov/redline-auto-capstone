
function toPassDeleteValue() {
  var deleteRequest = new XMLHttpRequest()
  var vehicleVin = "";
  //validate();
  if (document.querySelector('input[name="checkbox"]:checked')) {
    vehicleVin = document.querySelector('input[name="checkbox"]:checked').value;
    console.log("8: inside if: " + vehicleVin);
  }
  console.log("10: " + vehicleVin);
  deleteRequest.open('GET', 'http://localhost:8080/vehicleDelete' + "?vehicleVin=" + vehicleVin, true)
  deleteRequest.onload = function () {
    // Begin accessing JSON data here
    var data = JSON.parse(this.response);
   

  

    if (deleteRequest.status >= 200 && deleteRequest.status < 400) {
      console.log("17 data.length: " + data.length);
    }
  }

  deleteRequest.send();
 }

function validate() {
  var checkbox = document.querySelector('input[name="checkbox"]:checked');
  if (!checkbox) {
    alert('Please select!');
    return false;
  }
  else return confirm('confirm submit?');
}
