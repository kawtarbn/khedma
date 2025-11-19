
function showValidation(input, condition, message) {
    let errorElem = input.nextElementSibling;

    
    if (!errorElem || !errorElem.classList.contains("error-msg")) {
        errorElem = document.createElement("div");
        errorElem.classList.add("error-msg");
        errorElem.style.color = "red";
        errorElem.style.fontSize = "0.9em";
        errorElem.style.marginTop = "3px";
        input.parentNode.insertBefore(errorElem, input.nextSibling);
    }

    if (condition) {
        input.style.border = "2px solid green";
        errorElem.textContent = ""; 
    } else {
        input.style.border = "2px solid red";
        errorElem.textContent = message;
    }
}


const submitBtn = document.querySelector(".post-request-butt");
const form = document.getElementById("request-form");

submitBtn.addEventListener("click", function(e) {
    e.preventDefault();

    
    const titleInput = document.getElementById("request_title");
    const categoryInput = document.getElementById("request_category");
    const cityInput = document.getElementById("request_city");
    const descriptionInput = document.getElementById("request_description");
    const availabilityInput = document.getElementById("request_availability");
    const payInput = document.getElementById("request_pay");

    
    const titleVal = titleInput.value.trim();
    const categoryVal = categoryInput.value;
    const cityVal = cityInput.value;
    const descVal = descriptionInput.value.trim();
    const availabilityVal = availabilityInput.value.trim();
    const payVal = payInput.value.trim();

   
    const validTitle = titleVal.length >= 5;
    const validCategory = categoryVal !== "";
    const validCity = cityVal !== "";
    const validDescription = descVal.length >= 15;
    const validAvailability = availabilityVal.length >= 3;
    const validPay = payVal === "" || /^[0-9]+(\s?[a-zA-Z]*)?$/.test(payVal); // optional, numeric with optional text

    
    showValidation(titleInput, validTitle, "Please enter a valid job title (min 5 characters).");
    showValidation(categoryInput, validCategory, "Please select a category.");
    showValidation(cityInput, validCity, "Please select a city.");
    showValidation(descriptionInput, validDescription, "Description must be at least 15 characters.");
    showValidation(availabilityInput, validAvailability, "Please enter your availability.");
    showValidation(payInput, validPay, "Expected pay must be a number (optional).");

    
    if (validTitle && validCategory && validCity && validDescription && validAvailability && validPay) {
        alert("Job request posted successfully!");
        
    } else {
        alert("Please fix the errors in the form.");
    }
});


const inputs = form.querySelectorAll('input, select, textarea');
inputs.forEach(input => {
    input.addEventListener("input", () => {
        input.style.border = "";
        let errorElem = input.nextElementSibling;
        if (errorElem && errorElem.classList.contains("error-msg")) {
            errorElem.textContent = "";
        }
    });
});
