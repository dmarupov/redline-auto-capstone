var myInput = document.getElementById("psw");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");

// When the user clicks on the password field, show the message box
myInput.onfocus = function () {
    document.getElementById("message").style.display = "block";
}

// When the user clicks outside of the password field, hide the message box
myInput.onblur = function () {
    document.getElementById("message").style.display = "none";
}

// When the user starts to type something inside the password field
myInput.onkeyup = function () {
    // Validate lowercase letters
    var lowerCaseLetters = /[a-z]/g;
    if (myInput.value.match(lowerCaseLetters)) {
        letter.classList.remove("invalid");
        letter.classList.add("valid");
    } else {
        letter.classList.remove("valid");
        letter.classList.add("invalid");
    }

    //Validate capital letters
    var upperCaseLetters = /[A-Z]/g;
    if (myInput.value.match(upperCaseLetters)) {
        capital.classList.remove("invalid");
        capital.classList.add("valid");
    } else {
        capital.classList.remove("valid");
        capital.classList.add("invalid");
    }

    // Validate numbers
    var numbers = /[0-9]/g;
    if (myInput.value.match(numbers)) {
        number.classList.remove("invalid");
        number.classList.add("valid");
    } else {
        number.classList.remove("valid");
        number.classList.add("invalid");
    }

    // Validate length
    if (myInput.value.length >= 8) {
        length.classList.remove("invalid");
        length.classList.add("valid");
    } else {
        length.classList.remove("valid");
        length.classList.add("invalid");
    }
}


function validate() {
    var passrequest = new XMLHttpRequest()

    passrequest.open('GET', 'http://localhost:8080/users', true)
    // console.log("Line 4: " + this.passrequest.response);
    passrequest.onload = function () {
        // Begin accessing JSON data here
        var data = JSON.parse(this.response)
        if (passrequest.status >= 200 && passrequest.status < 400) {
            data.forEach(make => {
                console.log("Line: 69: " + make.USERS_NAME + " " + make.USERS_PASSWORD);
            });
            var passes = data;
            for (var i = 0, l = passes.length; i < l; i++) {
                console.log(passes);
                var passTitle = document.getElementById("psw");
                console.log("web: " + passTitle.value);
                console.log("db: " + passes[i].USERS_PASSWORD);
                var userTitle = document.getElementById("usrname");
                console.log("web: " + userTitle.value + " database: " + passes[i].USERS_NAME);

                if (passTitle.value == passes[i].USERS_PASSWORD && userTitle.value == passes[i].USERS_NAME) {
                    console.log("Success: ");
                    window.location.href='administrator.html';
                    // userTitle.innerHTML = user.USERS_NAME;
                }
                else {

                    console.log("Invalid login!");
                    alert("Login error occured! Try again!");
                }

            }
        } else {
            console.log('error')
        }
    }
    passrequest.send();
}