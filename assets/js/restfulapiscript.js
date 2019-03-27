var requestMake = new XMLHttpRequest();
var selectBox = document.getElementById('select-make');
requestMake.open('GET', 'http://localhost:8080/makedropdownlst', true);

requestMake.onload = function () {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response);

  if (requestMake.status >= 200 && requestMake.status < 400) {
    data.forEach(make => {
      console.log(make.MAKE_ID + ": " + make.MAKE_DESC);
      selectBox.options.add(new Option(make.MAKE_DESC, make.MAKE_ID));
    });
  } else {
    console.log('error');
  }
}
requestMake.send();




function getSelectedModelId(modelId) {
  console.log("Line 98: " + modelId.value);

  var requestModel = new XMLHttpRequest();
  var selectBox = document.getElementById('select-model');
  //requestModel.open('GET', 'http://localhost:8080/modeldropdownlst', true);
  var carMake = modelId.value;
  requestModel.open('GET', 'http://localhost:8080/modeldropdownlst' + "?vehicleMake=" + carMake, true);
  //http://localhost:8080/modeldropdownlst?vehicleMake=%22Acura%22
  //console.log("Line 103: " + this.requestModel.response);
  //console.log("Line 103: " + this.requestModel);
  requestModel.onload = function () {
    //console.log("Line 107 " + this.response);
    // Begin accessing JSON data here
    var data = JSON.parse(this.response);
    //var data = this.response;
    //console.log("Line 110 ");
    if (requestModel.status >= 200 && requestModel.status < 400) {
      getYearDropDown();
      //Reset select-model
      var i = selectBox.length;
      while (selectBox.length != 0) {
        selectBox.remove(i);
        i--;
      }
      selectBox.options.add(new Option("Select a Model", 00));
      data.forEach(model => {
        //console.log(model.DPDN_ID + ": " + model.DPDN_DESC);
        selectBox.options.add(new Option(model.MODL_DESC, model.MODL_ID));
      });
      // var options = data;

      // for (var i = 0, l = options.length; i < l; i++) {
      //   var option = options[i];
      //   selectBox.options.add(new Option(option.DPDN_DESC, option.DPDN_ID));
      //   console.log("Line 121: " + option.DPDN_DESC);
      // }

    } else {
      console.log('error');
    }
  }

  requestModel.send();
}


function getYearDropDown() {
  var requestYear = new XMLHttpRequest();
  var selectBox = document.getElementById('select-year');
  requestYear.open('GET', 'http://localhost:8080/yeardropdownlst', true);

  requestYear.onload = function () {
    // Begin accessing JSON data here
    var data = JSON.parse(this.response);

    if (requestYear.status >= 200 && requestYear.status < 400) {
      selectBox.options.add(new Option("Select a Year", 00));
      data.forEach(year => {
        console.log(year.YEAR_ID + ": " + year.YEAR_DESC);
        selectBox.options.add(new Option(year.YEAR_DESC, year.YEAR_ID));
      });
    } else {
      console.log('error');
    }
  }
  requestYear.send();
}









function myFunc(id) {
  var selectBox = document.getElementById('select-model');
  var model = new Option('101', 'stuff')
  selectBox.options.add(model);
  document.getElementById("label1").innerHTML = model.value + " It works!";

  // for(index in model) {
  //   select.options[select.options.length] = new Option(model[index], index);
  //   document.getElementById("label1").innerHTML = make + " It works!";
  // }

}

// document.getElementById("select-make").onchange = function () {
//   var modelId = document.getElementById("select-make").value;
//   getSelectedModelId(modelId);
// }