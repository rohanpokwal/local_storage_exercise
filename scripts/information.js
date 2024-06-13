"use strict";

window.onload = () => {
  //get hold of the result div
  const result = document.querySelector("#result");
  const resultText = document.querySelector("#resultText");

  let name = localStorage.getItem("name");
  let role = localStorage.getItem("role");

  if (role === "instructor") {
    result.innerHTML = `<p>Welcome Instructor ${name}</p>`;
    resultText.innerHTML = `<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam nostrum, quo odio natus, vitae doloribus sequi laudantium laboriosam pariatur dolore totam! Rem ipsam officiis similique quisquam quae repudiandae consequatur minus?</p>`;
    resultText.style.color = "blue";
  } else {
    result.innerHTML = `<p>Welcome Student ${name}</p>`;
    resultText.innerHTML = `<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam nostrum, quo odio natus, vitae doloribus sequi laudantium laboriosam pariatur dolore totam! Rem ipsam officiis similique quisquam quae repudiandae consequatur minus?</p>`;
    resultText.style.color = "purple";
  }
};
