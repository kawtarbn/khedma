// SELECT ELEMENTS
let FullName = document.querySelector("#namemployer"),
    Email = document.querySelector("#emailemployer"),
    Password = document.querySelector("#passemployer"),
    Company = document.querySelector("#univemp"),
    City = document.querySelector("#cityemp"),
    Submit_Btn = document.querySelector(".btnlog"),
    small = document.createElement("small");

// Append error messages below the form
Submit_Btn.parentElement.appendChild(small);

// CLICK EVENT
Submit_Btn.addEventListener("click", (event) => {
    event.preventDefault(); // stop form submission
    small.innerText = "";   // clear previous errors
    checkInputs();
});

// MAIN VALIDATION FUNCTION
function checkInputs() {
    const FullNameValue = FullName.value.trim();
    const EmailValue = Email.value.trim();
    const PasswordValue = Password.value.trim();
    const CompanyValue = Company.value.trim();
    const CityValue = City.value;

    // Full Name check
    if (FullNameValue === "") {
        setErrorFor(FullName, "Full name cannot be blank");
    } else {
        setSuccessFor(FullName);
    }

    // Email check
    if (EmailValue === "") {
        setErrorFor(Email, "Email cannot be blank");
    } else if (!isEmail(EmailValue)) {
        setErrorFor(Email, "Email is not valid");
    } else {
        setSuccessFor(Email);
    }

    // Password check
    if (PasswordValue === "") {
        setErrorFor(Password, "Password cannot be blank");
    } else if (PasswordValue.length < 6) {
        setErrorFor(Password, "Password must be at least 6 characters");
    } else {
        setSuccessFor(Password);
    }

    // Company check
    if (CompanyValue === "") {
        setErrorFor(Company, "Company/Organization cannot be blank");
    } else {
        setSuccessFor(Company);
    }

    // City check
    if (CityValue === "") {
        setErrorFor(City, "Please select a city");
    } else {
        setSuccessFor(City);
    }
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
