document.addEventListener("DOMContentLoaded", function() {
    const sendBtn = document.querySelector(".but");
    const name = document.querySelectorAll(".homem .text")[0];
    const email = document.querySelectorAll(".homem .text")[1];
    const subject = document.querySelector(".homem .sub");
    const message = document.querySelector(".homem .msg");

    sendBtn.addEventListener("click", function(e) {
        e.preventDefault();
        clearErrors();

        let valid = true;

        
        if (name.value.trim().length < 3) {
            setError(name, "Name must be at least 3 characters");
            valid = false;
        } else {
            setSuccess(name);
        }

        
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
            setError(email, "Email is not valid");
            valid = false;
        } else {
            setSuccess(email);
        }

        
        if (subject.value === "" || subject.value === "Sselect a subject") {
            setError(subject, "Please select a subject");
            valid = false;
        } else {
            setSuccess(subject);
        }

        
        if (message.value.trim().length < 10) {
            setError(message, "Message must be at least 10 characters");
            valid = false;
        } else {
            setSuccess(message);
        }

        if (valid) {
            alert("Message sent successfully!");
            clearBorders();
            document.querySelector(".homem").reset();
        }
    });

    function setError(input, message) {
        const errorDiv = input.nextElementSibling;
        errorDiv.textContent = message;
        errorDiv.style.color = "red";
        input.style.border = "2px solid red";
        input.style.backgroundColor = "rgba(255,0,0,0.1)";
    }

    function setSuccess(input) {
        const errorDiv = input.nextElementSibling;
        errorDiv.textContent = "";
        input.style.border = "2px solid green";
        input.style.backgroundColor = "rgba(0,255,0,0.1)";
    }

    function clearErrors() {
        document.querySelectorAll(".error-msg").forEach(div => div.textContent = "");
    }

    function clearBorders() {
        [name, email, subject, message].forEach(input => {
            input.style.border = "1px solid #ccc";
            input.style.backgroundColor = "white";
        });
    }
});
