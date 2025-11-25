const form = document.getElementById("registrationForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    let isValid = true;


    if (nameInput.value.trim() === "") {
        nameError.textContent = "Name is required";
        nameInput.classList.add("invalid");
        nameInput.classList.remove("valid");
        isValid = false;
    } else {
        nameError.textContent = "";
        nameInput.classList.add("valid");
        nameInput.classList.remove("invalid");
    }


    if (emailInput.value.trim() === "") {
        emailError.textContent = "Email is required";
        emailInput.classList.add("invalid");
        emailInput.classList.remove("valid");
        isValid = false;
    } else if (!emailInput.value.includes("@")) {
        emailError.textContent = "Email must include '@'";
        emailInput.classList.add("invalid");
        emailInput.classList.remove("valid");
        isValid = false;
    } else {
        emailError.textContent = "";
        emailInput.classList.add("valid");
        emailInput.classList.remove("invalid");
    }

    
    if (passwordInput.value.trim() === "") {
        passwordError.textContent = "Password is required";
        passwordInput.classList.add("invalid");
        passwordInput.classList.remove("valid");
        isValid = false;
    } else if (passwordInput.value.length < 8) {
        passwordError.textContent = "Password must be at least 8 characters";
        passwordInput.classList.add("invalid");
        passwordInput.classList.remove("valid");
        isValid = false;
    } else {
        passwordError.textContent = "";
        passwordInput.classList.add("valid");
        passwordInput.classList.remove("invalid");
    }

    if (isValid) {
        alert("Registration successful!");
        form.reset();
        nameInput.classList.remove("valid");
        emailInput.classList.remove("valid");
        passwordInput.classList.remove("valid");
    }
});
