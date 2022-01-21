/*const User = require("./public/javascript/user.js");
const validateRegistrationForm = evt => {
    evt.preventDefault();

    // Get the error message divs
    const ageError = document.getElementById('register-error-age')
    const passwordError = document.getElementById('register-error-password')

    // Ensure that all new users are above 18 years old
    const ageInput = document.getElementById('age')
    if (ageInput.value < 18) {
        ageError.innerText = 'Only users above 18 years old are allowed to register!'
        return
    }

    // Redirect to the homepage
    window.location.href.replace('http://127.0.0.1:5501/src/html/index.html')
}*/

function validationForm() {
  /* First Name */
  let first_name = document.getElementById("first_name").value;
  if (first_name == "" || !isNaN(first_name)) {
    document.getElementById("check-first-name").innerHTML = "Enter your Name using latin characters";
    document.getElementById("first_name").style.borderColor = "red";
    document.getElementById("first_name").scrollIntoView({
      behavior: "auto",
      block: "center",
      inline: "center",
    });
    return false;
  } else {
    document.getElementById("first_name").style.borderColor = "#929fa6";
    document.getElementById("check-first-name").innerHTML = "";
  }

  /* Check Age */
  if (document.getElementById("age").value < 18) {
    document.getElementById("check-age").innerHTML = "Your age should be over 17";
    document.getElementById("age").style.borderColor = "red";
    document.getElementById("age").scrollIntoView({
      behavior: "auto",
      block: "center",
      inline: "center",
    });
    return false;
  } else {
    document.getElementById("age").style.borderColor = "#929fa6";
    document.getElementById("check-age").innerHTML = "";
  }

  /* Password Match */
  if (document.getElementById("password").value != document.getElementById("password_confirm").value) {
    document.getElementById("password").style.borderColor = "red";
    document.getElementById("password_confirm").style.borderColor = "red";
    document.getElementById("check_password_confirm").innerHTML = "Your password does not match!";
    document.getElementById("password").scrollIntoView({
      behavior: "auto",
      block: "center",
      inline: "center",
    });
    return false;
  } else {
    document.getElementById("password").style.borderColor = "#929fa6";
    document.getElementById("password_confirm").style.borderColor = "#929fa6";
    document.getElementById("check_password_confirm").innerHTML = "";
  }

  return true;
}

const registerBtn = document.getElementById("register-submit-btn");
registerBtn.addEventListener("click", async (event) => {
  event.preventDefault();
  if (validationForm()) {
    const firstName = document.getElementById("first_name").value;
    const lastName = document.getElementById("last_name").value;
    const address = document.getElementById("billing_address").value;
    const card_number = document.getElementById("card_number").value;
    const education = document.getElementById("edu-high-school").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const age = document.getElementById("age").value;
    const country = document.getElementById("country").value;
    const user = { firstName, lastName, address, card_number, education, email, password, age, country };
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    };

    const response = await fetch("/register", options);
    const data = await response.json();
    console.log(data.status);

    //Register helper for choosing the right result to be shown at the screen
    Handlebars.registerHelper("ifEquals", function (arg1, arg2, options) {
      return arg1 == arg2 ? options.fn(this) : options.inverse(this);
    });

    // Registration result's section tag
    const destination = document.getElementById("registration-results-preview");

    // Clear the previous search results
    destination.innerHTML = "";

    // Get and compile the handlebars template
    const source = document.getElementById("registration-preview").innerHTML;
    const template = Handlebars.compile(source);

    // Create the preview for the Registration Result
    const html = template({
      result: data,
    });
    destination.innerHTML += html;
    destination.style.display = "block";
    var frm = document.getElementById("registration-form");
    frm.reset(); // Reset all form data
    document.getElementById("registration-results-preview").scrollIntoView({
      behavior: "auto",
      block: "center",
      inline: "center",
    });
  }
});

/* Continue Button after register results */
/* const continueBtn = document.getElementById("contBtn");
continueBtn.addEventListener("click",(event)=>{
  event.preventDefault();
  document.location.href = 'main.handlebars';
} */

function myFunction() {
  location.replace("main.hanlebars");
}
/* 
  async function fetchSomething(event) {
  event.preventDefault();
  if (validationForm()) {
    const firstName = document.getElementById("first_name").value;
    const lastName = document.getElementById("last_name").value;
    const address = document.getElementById("billing_address").value;
    const card_number = document.getElementById("card_number").value;
    const education = document.getElementById("edu-high-school").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const age = document.getElementById("age").value;
    const country = document.getElementById("country").value;
    const user = { firstName, lastName, address, card_number, education, email, password, age, country };
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    };
    const response = await fetch("/register", options);
    await response.text();
    return response.ok;
  }
}

const registerBtn = document.getElementById("register-submit-btn");
registerBtn.addEventListener("click", fetchSomething); */
