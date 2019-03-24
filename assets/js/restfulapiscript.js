var request = new XMLHttpRequest()

request.open('GET', 'http://localhost:8080/makedropdownlst', true)
console.log("Line 4: " + this.request.response);
request.onload = function() {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)
  
  if (request.status >= 200 && request.status < 400) {
    data.forEach(make => {
        console.log(make.DPDN_ID + ": " + make.DPDN_DESC);
    });
    var options = data;    
    var selectBox = document.getElementById('select-make');
    for(var i = 0, l = options.length; i < l; i++){
      var option = options[i];
      selectBox.options.add( new Option(option.DPDN_DESC, option.DPDN_ID) );
    }
  } else {
    console.log('error')
  }
}
request.send();

////////////////////
var requestModel = new XMLHttpRequest()
requestModel.open('GET', 'http://localhost:8080/modeldropdownlst', true)
console.log("Line 29: " + this.requestModel.response);
requestModel.onload = function() {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)
  
  if (requestModel.status >= 200 && requestModel.status < 400) {
    data.forEach(model => {
        console.log(model.DPDN_ID + ": " + model.DPDN_DESC);
    });
    var options = data;    
    var selectBox = document.getElementById('select-model');
    for(var i = 0, l = options.length; i < l; i++){
      var option = options[i];
      selectBox.options.add( new Option(option.DPDN_DESC, option.DPDN_ID) );
    }
  } else {
    console.log('error')
  }
}
requestModel.send();
////////////////////

var requestYear = new XMLHttpRequest()
requestYear.open('GET', 'http://localhost:8080/yeardropdownlst', true)
console.log("Line 29: " + this.requestYear.response);
requestYear.onload = function() {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)
  
  if (requestYear.status >= 200 && requestYear.status < 400) {
    data.forEach(year => {
        console.log(year.DPDN_ID + ": " + year.DPDN_DESC);
    });
    var options = data;    
    var selectBox = document.getElementById('select-year');
    for(var i = 0, l = options.length; i < l; i++){
      var option = options[i];
      selectBox.options.add( new Option(option.DPDN_DESC, option.DPDN_ID) );
    }
  } else {
    console.log('error')
  }
}
requestYear.send();
////////////////////