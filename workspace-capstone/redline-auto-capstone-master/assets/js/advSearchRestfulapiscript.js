var requestMake = new XMLHttpRequest();
var selectBox = document.getElementById('select-make');
requestMake.open('GET', 'http://localhost:8080/makedropdownlst', true);

requestMake.onload = function () {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response);

  if (requestMake.status >= 200 && requestMake.status < 400) {
    data.forEach(make => {
      //console.log(make.MAKE_ID + ": " + make.MAKE_DESC);
      selectBox.options.add(new Option(make.MAKE_DESC, make.MAKE_ID));
    });
  } else {
    console.log('error');
  }
}
requestMake.send();


function getSelectedModelId(modelId) {
  var requestModel = new XMLHttpRequest();
  var selectBox = document.getElementById('select-model');
  var carMake = modelId.value;
  requestModel.open('GET', 'http://localhost:8080/modeldropdownlst' + "?vehicleMake=" + carMake, true);
  requestModel.onload = function () {
    // Begin accessing JSON data here
    var data = JSON.parse(this.response);

    if (requestModel.status >= 200 && requestModel.status < 400) {
      //Reset select-model
      var i = selectBox.length;
      while (selectBox.length != 0) {
        selectBox.remove(i);
        i--;
      }
      selectBox.options.add(new Option("Select a Model", 00));
      data.forEach(model => {
         selectBox.options.add(new Option(model.MODL_DESC, model.MODL_ID));
      });
    } else {
      console.log('error');
    }
  }

  requestModel.send();
}


function myFunc(id) {
  var selectBox = document.getElementById('select-model');
  var model = new Option('101', 'stuff')
  selectBox.options.add(model);
  document.getElementById("label1").innerHTML = model.value + " It works!";

}


function myFunc(id) {
  var selectBox = document.getElementById('select-model');
  var model = new Option('101', 'stuff')
  selectBox.options.add(model);
  document.getElementById("label1").innerHTML = model.value + " It works!";

}
