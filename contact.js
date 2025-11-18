function validateInput(input, condition) {
    if (condition) {
        input.style.border = "2px solid green";
    } else {
        input.style.border = "2px solid red";
    }
}

// Get the button
const sendBtn = document.querySelector(".but");

// Add click event
sendBtn.addEventListener("click", function(e) {
    e.preventDefault();

    // Get inputs
    const inputs = document.querySelectorAll(".homem .text");
    const name = inputs[0];
    const email = inputs[1];
    const subject = document.querySelector(".homem .sub");
    const message = document.querySelector(".homem .msg");

    // Regex for email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validate fields
    const validName = name.value.trim().length >= 3;
    const validEmail = emailRegex.test(email.value.trim());
    const validSubject = subject.value.trim() !== "" && subject.value !== "Sselect a subject ";
    const validMessage = message.value.trim().length >= 10;

    // Apply styles
    validateInput(name, validName);
    validateInput(email, validEmail);
    validateInput(subject, validSubject);
    validateInput(message, validMessage);

    if (validName && validEmail && validSubject && validMessage) {
        alert("Message sent successfully!");
    } else {
        alert("Please fill the form correctly.");
    }
});
