// Function to validate individual input
function validateInput(input, condition) {
    if (condition) {
        input.style.border = "2px solid green";
    } else {
        input.style.border = "2px solid red";
    }
}

// Generic function to validate a form
function validateForm(form) {
    const inputs = form.querySelectorAll(".input1, .textarea1"); // all inputs and textareas
    let allValid = true;

    inputs.forEach(input => {
        let value = input.value.trim();
        let isValid = true;

        // Simple validation rules
        if (input.type === "email") {
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            isValid = emailRegex.test(value);
        } else if (input.tagName.toLowerCase() === "textarea") {
            isValid = value.length >= 10; // message/bio must have at least 10 chars
        } else {
            isValid = value.length >= 2; // other text inputs min 2 chars
        }

        validateInput(input, isValid);
        if (!isValid) allValid = false;
    });

    return allValid;
}

// Attach event listeners to all save buttons
document.querySelectorAll(".save-btn").forEach(button => {
    button.addEventListener("click", function(e) {
        e.preventDefault();
        const form = button.closest("form"); 

        if (validateForm(form)) {
            alert("Changes saved successfully!");
           
        } else {
            alert("Please fill all fields correctly.");
        }
    });
});
