
let Name = document.querySelector("#Name"),
    Email = document.querySelector("#Email"),
    Password = document.querySelector("#Password"),
    University = document.querySelector("#University"),
    City = document.querySelector("#City"),
    Submit_Btn = document.querySelector("#Submit_Btn"),
    small = document.querySelector("#studentSignUpError");

Submit_Btn.addEventListener("click", (event) => {
    event.preventDefault();
    small.innerText = ""; // clear previous errors
    checkInputs();
});

function checkInputs() {
    const NameValue = Name.value.trim();
    const EmailValue = Email.value.trim();
    const PasswordValue = Password.value.trim();
    const UniversityValue = University.value.trim();
    const CityValue = City.value;

    // Name
    if (NameValue === "") {
        setErrorFor(Name, "Name cannot be blank");
    } else {
        setSuccessFor(Name);
    }

    // Email
    if (EmailValue === "") {
        setErrorFor(Email, "Email cannot be blank");
    } else if (!isEmail(EmailValue)) {
        setErrorFor(Email, "Email is not valid");
    } else {
        setSuccessFor(Email);
    }

    // Password
    if (PasswordValue === "") {
        setErrorFor(Password, "Password cannot be blank");
    } else {
        setSuccessFor(Password);
    }

    // University
    if (UniversityValue === "") {
        setErrorFor(University, "University cannot be blank");
    } else {
        setSuccessFor(University);
    }

    // City
    if (CityValue === "") {
        setErrorFor(City, "City must be selected");
    } else {
        setSuccessFor(City);
    }
}

function setErrorFor(input, message) {
    small.innerText += message + "\n";
    input.classList.add("error");
    input.classList.remove("success");
}

function setSuccessFor(input) {
    input.classList.add("success");
    input.classList.remove("error");
}

function isEmail(Email) {
    return /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(Email);
}

