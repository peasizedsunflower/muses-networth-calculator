// let submitBtn = document.querySelector("input[type='submit']");
// let name = document.querySelector("input[type='text']");
// let email = document.querySelector("input[type='email']");
// let submitBtn = document.querySelector(".message");
// let form = document.querySelector("form")
// console.log(submitBtn);

// submitBtn.addEventListener("click", e => {
//   e.preventDefault();
//   console.log(submitBtn);
// });

let error_message = document.getElementById("error_message");
let submitBtn = document.querySelector("input[type='submit']");
let name = document.querySelector("input[type='text']").value;
let email = document.querySelector("input[type='email']").value;
let message = document.querySelector(".message").value;

submitBtn.addEventListener("click", validate);

function validate(e) {
  e.preventDefault();
  error_message.style.padding = "10px";

  var text;
  if (name.length < 4) {
    text = "Please Enter valid Name";
    error_message.innerHTML = text;
    alert(text);
    return false;
  }

  if (email.indexOf("@") == -1 || email.length < 6 || !email.includes(".")) {
    text = "Please Enter valid Email";
    error_message.innerHTML = text;
    console.log(text);
    alert(text);

    return false;
  }
  if (message.length <= 20) {
    text = "Please Enter More Than 20 Characters";
    error_message.innerHTML = text;

    alert(text);

    return false;
  }
  alert("Form Submitted Successfully!");
  return true;
}
