var request = new XMLHttpRequest()

request.open('GET', 'http://localhost:8080/users', true)

request.onload = function() {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)
 
  if (request.status >= 200 && request.status < 400) {
    data.forEach(user => {
        console.log(user.MYUSER);
    })
  } else {
    console.log('error')
  }
}

request.send()