/*const validateRegistrationForm = evt => {
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
}
