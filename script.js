"use strict";

let username = document.querySelector(".user").value;
let password = document.querySelector(".pass").value;
const hid = document.querySelector(".incorrect");

document.querySelector(".click").addEventListener("click", function () {
  username = document.querySelector(".user").value;
  password = document.querySelector(".pass").value;
  if (username == "admin" && password == "admin123") {
    alert("You Have Successfully Loged in");
    window.location.replace("home.html");
  } else {
    console.log(username);
    hid.classList.remove("hidden");
  }
});
