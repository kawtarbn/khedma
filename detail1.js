// basicJobFormMessage.js

document.addEventListener("DOMContentLoaded", function() {
  var modal = document.getElementById("modalbox");
  var applyBtn = document.querySelector(".apply-btn");
  var closeBtn = modal.querySelector(".a");
  var form = modal.querySelector("form");

  // Open modal
  applyBtn.addEventListener("click", function(e) {
    e.preventDefault();
    modal.style.display = "flex";
    clearBorders();
    clearMessages();
  });

  // Close modal
  closeBtn.addEventListener("click", function(e) {
    e.preventDefault();
    modal.style.display = "none";
    form.reset();
    clearBorders();
    clearMessages();
  });

  // Close when clicking outside
  window.addEventListener("click", function(e) {
    if (e.target === modal) {
      modal.style.display = "none";
      form.reset();
      clearBorders();
      clearMessages();
    }
  });

  // Form submit
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    checkInputs();
  });

  // Real-time validation on input
  form.querySelectorAll("input, textarea").forEach(function(input) {
    input.addEventListener("input", function() {
      validateField(input);
    });
  });

  function checkInputs() {
    var inputs = form.querySelectorAll("input, textarea");
    var valid = true;

    inputs.forEach(function(input) {
      if (!validateField(input)) {
        valid = false;
      }
    });

    if (valid) {
      showFormMessage("Application submitted successfully!", "green");
      console.log({
        fullname: form.querySelector("input[name='fullname']").value,
        email: form.querySelector("input[name='email']").value,
        phone: form.querySelector("input[name='phone']").value,
        message: form.querySelector("textarea[name='message']").value
      });
      form.reset();
      clearBorders();
      setTimeout(function() {
        modal.style.display = "none";
        clearMessages();
      }, 2000);
    }
  }

  // Validate a single field
  function validateField(input) {
    var value = input.value.trim();
    var name = input.getAttribute("name");
    var messageEl = input.nextElementSibling;

    // Remove previous message
    if (messageEl && messageEl.className === "error-msg") {
      messageEl.remove();
    }

    if (name === "fullname") {
      if (value === "") return setError(input, "Name cannot be blank");
      return setSuccess(input);
    }

    if (name === "email") {
      if (value === "") return setError(input, "Email cannot be blank");
      if (!validateEmail(value)) return setError(input, "Email is not valid");
      return setSuccess(input);
    }

    if (name === "phone") {
      if (value === "") return setError(input, "Phone cannot be blank");
      if (!validateAlgerianPhone(value)) return setError(input, "Phone must start with 05, 06, or 07 and have 10 digits");
      return setSuccess(input);
    }

    if (name === "message") {
      if (value === "") return setError(input, "Cover message cannot be blank");
      return setSuccess(input);
    }

    return true;
  }

  function setError(input, message) {
    input.style.border = "2px solid red";
    input.style.backgroundColor = "rgba(255,0,0,0.1)";
    input.style.color = "red";

    var errorMsg = document.createElement("p");
    errorMsg.className = "error-msg";
    errorMsg.style.color = "red";
    errorMsg.style.margin = "5px 0 10px 0";
    errorMsg.style.fontSize = "14px";
    errorMsg.textContent = message;

    input.insertAdjacentElement("afterend", errorMsg);
    return false;
  }

  function setSuccess(input) {
    input.style.border = "2px solid green";
    input.style.backgroundColor = "rgba(0,255,0,0.1)";
    input.style.color = "green";
    return true;
  }

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function validateAlgerianPhone(phone) {
    return /^0[5-7][0-9]{8}$/.test(phone);
  }

  function showFormMessage(message, color) {
    var msg = document.createElement("p");
    msg.style.color = color;
    msg.style.fontWeight = "bold";
    msg.style.marginTop = "10px";
    msg.textContent = message;
    form.appendChild(msg);
    setTimeout(function() {
      msg.remove();
    }, 2000);
  }

  function clearBorders() {
    form.querySelectorAll("input, textarea").forEach(function(el) {
      el.style.border = "1px solid #ddd";
      el.style.backgroundColor = "";
      el.style.color = "";
    });
  }

  function clearMessages() {
    form.querySelectorAll(".error-msg").forEach(function(el) {
      el.remove();
    });
  }
});
