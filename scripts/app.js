"use strict";

window.onload = () => {
  //get hold of the button
  const forInfo = document.querySelector("#forInfo");

  //listen to the submit of that form and run the function
  forInfo.addEventListener("submit", storeAndRedirect);
};

function storeAndRedirect(event) {
  //calling preventDefault to keep the page from reloading
  event.preventDefault();

  //get the name from the user
  const personName = document.querySelector("#personName").value;

  //get what role user selected
  const role = document.querySelector('input[name="role"]:checked').value;

  localStorage.setItem("name", personName);
  localStorage.setItem("role", role);

  window.location.href = "information.html";
}
