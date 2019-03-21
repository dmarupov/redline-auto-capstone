var request = new XMLHttpRequest()

request.open('GET', 'http://localhost:8080/makedropdownlst', true)
console.log("Line 4: " + this.request.response);
request.onload = function() {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)

  if (request.status >= 200 && request.status < 400) {
    data.forEach(make => {
      console.log(make.DPDN_ID + ": " + make.DPDN_DESC);
    })
  } else {
    console.log('error')
  }
}

request.send()