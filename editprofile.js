// Select all save buttons
document.querySelectorAll(".save-btn").forEach(button => {
    button.addEventListener("click", function(e) {
        e.preventDefault();
        const form = button.closest("form");
        const inputs = form.querySelectorAll(".input1, .textarea1");
        let allValid = true;

        inputs.forEach(input => {
            const errorDiv = input.nextElementSibling; // div.error-msg
            errorDiv.textContent = ""; // clear previous messages
            let value = input.value.trim();
            let valid = true;
            let message = "";

            if (input.type === "email") {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(value)) {
                    valid = false;
                    message = "Please enter a valid email";
                }
            } else if (input.tagName.toLowerCase() === "textarea") {
                if (value.length < 10) {
                    valid = false;
                    message = "Please enter at least 10 characters";
                }
            } else {
                if (value.length < 2) {
                    valid = false;
                    message = "This field cannot be empty";
                }
            }

            if (!valid) {
                input.style.border = "2px solid red";
                errorDiv.textContent = message;
                errorDiv.style.color = "red";
                allValid = false;
            } else {
                input.style.border = "2px solid green";
            }
        });

        if (allValid) {
            alert("Changes saved successfully!");
            form.reset();
            inputs.forEach(input => input.style.border = "1px solid #ccc");
        } else {
            alert("Please fill all fields correctly.");
        }
    });
});

