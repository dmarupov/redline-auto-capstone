var request = new XMLHttpRequest()

request.open('GET', 'http://localhost:8080/vehicles', true)
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
  var listContainerImage = document.createElement('div');
  listContainerImage.className='image';
  var listContainerItem = document.createElement('div');
  listContainerItem.className='item';
  var listContainerDesc = document.createElement('div');
  listContainerDesc.className='desc';
  var listContainerPrice = document.createElement('div');
  listContainerPrice.className='price';
  
  // Add it to the page
  document.getElementById('test').appendChild(listContainerImage);
  document.getElementById('test').appendChild(listContainerItem);
  document.getElementById('test').appendChild(listContainerDesc);
  document.getElementById('test').appendChild(listContainerPrice);
  
  // Make the list
  var listElementItem = document.createElement('ul');
  var listElementDesc = document.createElement('ul');
  var listElementPrice = document.createElement('ul');
  var listElementImage = document.createElement('ul');

  // Add it to the page
  listContainerItem.appendChild(listElementItem);
  listContainerDesc.appendChild(listElementDesc);
  listContainerImage.appendChild(listElementImage);
  listContainerPrice.appendChild(listElementPrice);
  

  // Set up a loop that goes through the items in listItems one at a time
  var numberOfListItems = vehicleData.length;

  for (var i = 0; i < numberOfListItems; ++i) {
      // create an item for each one

      var listItem = document.createElement('li');
      var listImage = document.createElement('li');
      var listDesc = document.createElement('li');
      var listPrice = document.createElement('li');
      
      // Add the item text
      
      listDesc.innerHTML = vehicleData[i].VHCL_DESC;
      listPrice.innerHTML = "$" + vehicleData[i].VHCL_PRICE;
      listImage.innerHTML = '<img class="img-scale" src="assets/media/b-goods/263x200/1.jpg" alt="foto">'
      listItem.innerHTML = vehicleData[i].VHCL_YEAR + " " + vehicleData[i].VHCL_MAKE + " " + vehicleData[i].VHCL_MODL;
      
  
      // Add listItem to the listElement
      
      listElementImage.appendChild(listImage);
      listElementItem.appendChild(listItem);
      listElementDesc.appendChild(listDesc);
      listElementPrice.appendChild(listPrice);
  }

}
