document.addEventListener("DOMContentLoaded", function() {
    const modal = document.getElementById("modalbox");
    const applyBtn = document.querySelector(".apply-btn");
    const closeBtn = document.querySelector(".close-btn");
    const form = document.getElementById("jobForm");

    // Open modal
    applyBtn.addEventListener("click", function(e) {
        e.preventDefault();
        modal.style.display = "flex";
        clearForm();
    });

    // Close modal
    closeBtn.addEventListener("click", function(e) {
        e.preventDefault();
        modal.style.display = "none";
        form.reset();
        clearForm();
    });

    // Close modal when clicking outside
    window.addEventListener("click", function(e) {
        if (e.target === modal) {
            modal.style.display = "none";
            form.reset();
            clearForm();
        }
    });

    // Form submit
    form.addEventListener("submit", function(e) {
        e.preventDefault();
        let isValid = true;
        const inputs = form.querySelectorAll("input, textarea");

        inputs.forEach(function(input) {
            if (!validateField(input)) {
                isValid = false;
            }
        });

        if (isValid) {
            alert("Application submitted successfully!");
            form.reset();
            clearForm();
            modal.style.display = "none";
        }
    });

    // Validate individual field
    function validateField(input) {
        const value = input.value.trim();
        const name = input.name;
        const errorDiv = input.nextElementSibling;
        errorDiv.textContent = "";
        input.style.border = "1px solid #ddd";
        input.style.backgroundColor = "white";

        if (name === "fullname") {
            if (value.length < 3) return showError(input, errorDiv, "Name must be at least 3 characters");
        } else if (name === "email") {
            const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!value) return showError(input, errorDiv, "Email cannot be blank");
            if (!regex.test(value)) return showError(input, errorDiv, "Email is invalid");
        } else if (name === "phone") {
            const regex = /^0[5-7][0-9]{8}$/;
            if (!value) return showError(input, errorDiv, "Phone cannot be blank");
            if (!regex.test(value)) return showError(input, errorDiv, "Phone must start with 05,06,07 and have 10 digits");
        } else if (name === "message") {
            if (value.length < 10) return showError(input, errorDiv, "Message must be at least 10 characters");
        }

        // If valid
        input.style.border = "2px solid green";
        input.style.backgroundColor = "rgba(0,255,0,0.1)";
        return true;
    }

    // Show error message
    function showError(input, div, message) {
        div.textContent = message;
        div.style.color = "red";
        input.style.border = "2px solid red";
        input.style.backgroundColor = "rgba(255,0,0,0.1)";
        return false;
    }

    // Clear all errors
    function clearForm() {
        form.querySelectorAll(".error-msg").forEach(function(div) {
            div.textContent = "";
        });
        form.querySelectorAll("input, textarea").forEach(function(input) {
            input.style.border = "1px solid #ddd";
            input.style.backgroundColor = "white";
        });
    }
});
