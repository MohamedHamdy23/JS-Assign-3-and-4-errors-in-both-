
var userName = document.getElementById("user-name");
var userEmail = document.getElementById("user-email");
var userPass = document.getElementById("user-pass");
var signInEMail = document.getElementById("sign-email");
var signInPass = document.getElementById("sign-pass");


var usersData = [];



function signUp() {

  var user = {
    name: userName.value,
    email: userEmail.value,
    pass:userPass.value
}
  usersData.push(user);

  localStorage.setItem("usersdata", JSON.stringify(usersData))

  clearFields();
  
}



document.querySelector("#signupBtn").addEventListener("click", signUp)

document.querySelector("#signinBtn").addEventListener("click", signIn)


function clearFields() {

    userName.value = "";
    userEmail.value = "";
    userPass.value = "";

}

//cant access the data in the array?

function signIn() {

  
  if (usersData != null) {

    JSON.parse(localStorage.getItem("usersdata"));

    for (var i = 0; i < usersData.length; i++){
      if (signInPass.value == usersData[i].pass && signInEMail.value == usersData[i].email) {
        document.getElementById("message").innerHTML=`Welcome+${usersData[i].name}`
        open("InnerPage.html")
      }
      else {
        alert("Not found please sign up")
      }
    }
  }

}