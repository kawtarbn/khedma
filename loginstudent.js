// SELECT ELEMENTS
let Email = document.querySelector("#emailst"),
    Password = document.querySelector("#passst"),
    Submit_Btn = document.querySelector(".btnlog"),
    small = document.createElement("small");

// Append error messages below the form
Submit_Btn.parentElement.appendChild(small);

// CLICK EVENT
Submit_Btn.addEventListener("click", (event) => {
    event.preventDefault(); // stop default submission
    small.innerText = "";   // clear previous errors
    if (checkInputs()) {
        loginAsStudent();   // only login if validation passes
    }
});

// VALIDATION FUNCTION
function checkInputs() {
    const EmailValue = Email.value.trim();
    const PasswordValue = Password.value.trim();
    let valid = true;

    // Email validation
    if (EmailValue === "") {
        setErrorFor(Email, "Email cannot be blank");
        valid = false;
    } else if (!isEmail(EmailValue)) {
        setErrorFor(Email, "Email is not valid");
        valid = false;
    } else {
        setSuccessFor(Email);
    }

    // Password validation
    if (PasswordValue === "") {
        setErrorFor(Password, "Password cannot be blank");
        valid = false;
    } else if (PasswordValue.length < 6) {
        setErrorFor(Password, "Password must be at least 6 characters");
        valid = false;
    } else {
        setSuccessFor(Password);
    }

    return valid; // return true if all inputs are valid
}

// ERROR FUNCTION
function setErrorFor(input, message) {
    small.innerText += message + "\n";
    input.classList.add("error");
    input.classList.remove("success");
}

// SUCCESS FUNCTION
function setSuccessFor(input) {
    input.classList.add("success");
    input.classList.remove("error");
}

// EMAIL REGEX
function isEmail(email) {
    return /^([a-zA-Z0-9_.\-]+)@([a-zA-Z0-9_.\-]+)\.([a-zA-Z]{2,5})$/.test(email);
}

// LOGIN FUNCTION
function loginAsStudent() {
    localStorage.setItem("role", "student"); // save role
    window.location.href = "index.html";      // redirect
}
