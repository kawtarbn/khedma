// Function to show validation and error message
function showValidation(input, condition, message) {
    let errorElem = input.nextElementSibling;

    // Create error message element if it doesn't exist
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
        errorElem.textContent = ""; // Clear error
    } else {
        input.style.border = "2px solid red";
        errorElem.textContent = message;
    }
}

// Get the submit button
const submitBtn = document.querySelector(".post-job-butt");

submitBtn.addEventListener("click", function(e) {
    e.preventDefault();

    // Get input elements
    const job_title = document.getElementById("job_title");
    const job_description = document.getElementById("job_description");
    const job_category = document.getElementById("job_category");
    const job_city = document.getElementById("job_city");
    const std_email = document.getElementById("std_email");
    const std_phone = document.getElementById("std_phone");

    // Get trimmed values
    const titleVal = job_title.value.trim();
    const descVal = job_description.value.trim();
    const categoryVal = job_category.value;
    const cityVal = job_city.value;
    const emailVal = std_email.value.trim();
    const phoneVal = std_phone.value.trim();

    // Regex patterns
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^(\+213|0)(5|6|7)\d{8}$/;

    // Validate each field
    const valid_job_title = titleVal.length >= 3;
    const valid_job_description = descVal.length >= 15;
    const valid_job_category = categoryVal !== "";
    const valid_job_city = cityVal !== "";
    const valid_std_email = emailPattern.test(emailVal);
    const valid_std_phone = phonePattern.test(phoneVal);

    // Show error messages
    showValidation(job_title, valid_job_title, "Title must be at least 3 characters.");
    showValidation(job_description, valid_job_description, "Description must be at least 15 characters.");
    showValidation(job_category, valid_job_category, "Please select a category.");
    showValidation(job_city, valid_job_city, "Please select a city.");
    showValidation(std_email, valid_std_email, "Enter a valid email address.");
    showValidation(std_phone, valid_std_phone, "Enter a valid Algerian phone number.");

    // Final check
    if (valid_job_title && valid_job_description && valid_job_category && valid_job_city && valid_std_email && valid_std_phone) {
        alert("Job posted successfully!");
        // Uncomment below line to actually submit the form
        // document.getElementById("job-form").submit();
    } else {
        alert("Please fix the errors in the form.");
    }
});

// Optional: Remove error message when user types
const inputs = [document.getElementById("job_title"), 
                document.getElementById("job_description"), 
                document.getElementById("job_category"), 
                document.getElementById("job_city"), 
                document.getElementById("std_email"), 
                document.getElementById("std_phone")];

inputs.forEach(input => {
    input.addEventListener("input", () => {
        input.style.border = "";
        let errorElem = input.nextElementSibling;
        if (errorElem && errorElem.classList.contains("error-msg")) {
            errorElem.textContent = "";
        }
    });
});
















