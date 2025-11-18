// Get form elements by class
const form = document.querySelector(".edit-form form");
const inputs = form.querySelectorAll("input, textarea");

// Regex patterns
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^[0-9+\- ]{7,15}$/;

// Helper to validate a single input
function validateField(field) {
    let value = field.value.trim();
    let valid = false;

    if (field.type === "email") {
        valid = emailRegex.test(value);
    } else if (field.previousElementSibling && field.previousElementSibling.innerText.includes("Phone")) {
        valid = phoneRegex.test(value);
    } else if (field.tagName.toLowerCase() === "textarea") {
        valid = value.length >= 10;
    } else {
        valid = value.length >= 3;
    }

    field.style.border = valid ? "2px solid green" : "2px solid red";
    return valid;
}

// Live validation while typing
inputs.forEach(input => {
    input.addEventListener("input", () => validateField(input));
});

// Form submit validation
form.addEventListener("submit", function(e) {
    e.preventDefault();
    let allValid = true;

    inputs.forEach(input => {
        if (!validateField(input)) {
            allValid = false;
        }
    });

    if (allValid) {
        alert("Profile updated successfully!");
        // Here you can submit the form if connected to backend
        // form.submit();
    } else {
        alert("Please fix the highlighted fields before saving.");
    }
});
