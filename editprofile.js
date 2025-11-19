

document.querySelectorAll(".save-btn").forEach(button => {
    button.addEventListener("click", function(e) {
        e.preventDefault();
        const form = button.closest("form");
        const inputs = form.querySelectorAll(".input1, .textarea1");
        let allValid = true;

        inputs.forEach(input => {
          
            let errorDiv = input.nextElementSibling;
            if (!errorDiv || !errorDiv.classList.contains("error-msg")) {
                errorDiv = document.createElement("div");
                errorDiv.classList.add("error-msg");
                input.parentNode.insertBefore(errorDiv, input.nextSibling);
            }
            errorDiv.textContent = "";
            input.classList.remove("error", "success");

            const value = input.value.trim();
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
                input.classList.add("error");
                errorDiv.textContent = message;
                allValid = false;
            } else {
                input.classList.add("success");
            }
        });

        if (allValid) {
            alert("Changes saved successfully!");
        } else {
            alert("Please fill all fields correctly.");
        }
    });
});
