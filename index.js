document.addEventListener("DOMContentLoaded", function() {

  
  function getFormSmall(form, preferId) {
    if (!form) return null;
    if (preferId) {
      const byId = document.getElementById(preferId);
      if (byId) return byId;
    }
    let small = form.querySelector("small.form-error");
    if (!small) {
      small = document.createElement("small");
      small.className = "form-error";
      form.appendChild(small);
    }
    return small;
  }

  
  function setError(selector) {
    const input = document.querySelector(selector);
    if (!input) return;
    input.classList.add("error");
    input.classList.remove("success");
  }

  
  function setSuccess(selector) {
    const input = document.querySelector(selector);
    if (!input) return;
    input.classList.add("success");
    input.classList.remove("error");
  }


  function isEmail(email) {
    return /^([a-zA-Z0-9_.\-]+)@([a-zA-Z0-9_.\-]+)\.([a-zA-Z]{2,})$/.test(email);
  }

 
  (function() {
    const form = document.querySelector("#employerSignUpForm");
    if (!form) return;
   
    const small = getFormSmall(form, "employerSignUpError");

    form.addEventListener("submit", function(e) {
      e.preventDefault();
      small.textContent = "";
      small.classList.remove("error", "success");

      let valid = true;
      const messages = [];

      const fullName = document.querySelector("#namemployer");
      const emailEl = document.querySelector("#emailemployer");
      const passEl = document.querySelector("#passemployer");
      const companyEl = document.querySelector("#univemp");
      const cityEl = document.querySelector("#cityemp");

      
      if (!fullName || !fullName.value.trim()) {
        setError("#namemployer");
        messages.push("Full name cannot be blank");
        valid = false;
      } else setSuccess("#namemployer");

      
      const emailVal = emailEl ? emailEl.value.trim() : "";
      if (!emailVal) {
        setError("#emailemployer");
        messages.push("Email cannot be blank");
        valid = false;
      } else if (!isEmail(emailVal)) {
        setError("#emailemployer");
        messages.push("Email is not valid");
        valid = false;
      } else setSuccess("#emailemployer");

      
      const passVal = passEl ? passEl.value : "";
      if (!passVal.trim()) {
        setError("#passemployer");
        messages.push("Password cannot be blank");
        valid = false;
      } else if (passVal.length < 6) {
        setError("#passemployer");
        messages.push("Password must be at least 6 characters");
        valid = false;
      } else setSuccess("#passemployer");

      
      if (!companyEl || !companyEl.value.trim()) {
        setError("#univemp");
        messages.push("Company cannot be blank");
        valid = false;
      } else setSuccess("#univemp");

      
      if (!cityEl || !cityEl.value) {
        setError("#cityemp");
        messages.push("Please select a city");
        valid = false;
      } else setSuccess("#cityemp");

      if (!valid) {
        small.textContent = messages.join("\n");
        small.classList.add("error");
        return;
      }

      
      small.textContent = "Sign-up successful!";
      small.classList.add("success");
      
    });
  })();

  
  (function() {
    const form = document.querySelector("#employerLoginForm");
    if (!form) return;
    const small = getFormSmall(form, "employerLoginError");

    form.addEventListener("submit", function(e) {
      e.preventDefault();
      small.textContent = "";
      small.classList.remove("error", "success");

      let valid = true;
      const messages = [];

      const emailEl = document.querySelector("#emailmp");
      const passEl = document.querySelector("#passemp");

      const emailVal = emailEl ? emailEl.value.trim() : "";
      if (!emailVal) {
        setError("#emailmp");
        messages.push("Email cannot be blank");
        valid = false;
      } else if (!isEmail(emailVal)) {
        setError("#emailmp");
        messages.push("Email is not valid");
        valid = false;
      } else setSuccess("#emailmp");

      const passVal = passEl ? passEl.value : "";
      if (!passVal.trim()) {
        setError("#passemp");
        messages.push("Password cannot be blank");
        valid = false;
      } else if (passVal.length < 6) {
        setError("#passemp");
        messages.push("Password must be at least 6 characters");
        valid = false;
      } else setSuccess("#passemp");

      if (!valid) {
        small.textContent = messages.join("\n");
        small.classList.add("error");
        return;
      }

      
      localStorage.setItem("role", "employer");
      window.location.href = "index.html";
    });
  })();

 
  (function() {
    const form = document.getElementById("studentSignUpForm");
    if (!form) return;
    const small = getFormSmall(form, "studentSignUpError");

    form.addEventListener("submit", function(e) {
      e.preventDefault();
      small.textContent = "";
      small.classList.remove("error", "success");

      let valid = true;
      const messages = [];

      const nameEl = document.getElementById("namestudent");
      const emailEl = document.getElementById("emailstudent");
      const passEl = document.getElementById("passtudent");
      const universityEl = document.getElementById("univ");
      const cityEl = document.getElementById("city");

      
      if (!nameEl || !nameEl.value.trim()) {
        setError("#namestudent");
        messages.push("Name cannot be blank");
        valid = false;
      } else setSuccess("#namestudent");

      
      const emailVal = emailEl ? emailEl.value.trim() : "";
      if (!emailVal) {
        setError("#emailstudent");
        messages.push("Email cannot be blank");
        valid = false;
      } else if (!isEmail(emailVal)) {
        setError("#emailstudent");
        messages.push("Email is not valid");
        valid = false;
      } else setSuccess("#emailstudent");

      
      const passVal = passEl ? passEl.value : "";
      if (!passVal.trim()) {
        setError("#passtudent");
        messages.push("Password cannot be blank");
        valid = false;
      } else if (passVal.length < 6) {
        setError("#passtudent");
        messages.push("Password must be at least 6 characters");
        valid = false;
      } else setSuccess("#passtudent");

    
      if (!universityEl || !universityEl.value.trim()) {
        setError("#univ");
        messages.push("University cannot be blank");
        valid = false;
      } else setSuccess("#univ");

      
      if (!cityEl || !cityEl.value) {
        setError("#city");
        messages.push("City must be selected");
        valid = false;
      } else setSuccess("#city");

      if (!valid) {
        small.textContent = messages.join("\n");
        small.classList.add("error");
        return;
      }

     
      small.textContent = "Sign-up successful!";
      small.classList.add("success");
      localStorage.setItem("role", "student");
      window.location.href = "index.html";
    });
  })();

 
  (function() {
    const form = document.querySelector("#studentLoginForm");
    if (!form) return;
    const small = getFormSmall(form, "studentLoginError");

    form.addEventListener("submit", function(e) {
      e.preventDefault();
      small.textContent = "";
      small.classList.remove("error", "success");

      let valid = true;
      const messages = [];

      const emailEl = document.querySelector("#emailst");
      const passEl = document.querySelector("#passst");

      const emailVal = emailEl ? emailEl.value.trim() : "";
      if (!emailVal) {
        setError("#emailst");
        messages.push("Email cannot be blank");
        valid = false;
      } else if (!isEmail(emailVal)) {
        setError("#emailst");
        messages.push("Email is not valid");
        valid = false;
      } else setSuccess("#emailst");

      const passVal = passEl ? passEl.value : "";
      if (!passVal.trim()) {
        setError("#passst");
        messages.push("Password cannot be blank");
        valid = false;
      } else if (passVal.length < 6) {
        setError("#passst");
        messages.push("Password must be at least 6 characters");
        valid = false;
      } else setSuccess("#passst");

      if (!valid) {
        small.textContent = messages.join("\n");
        small.classList.add("error");
        return;
      }

     
      localStorage.setItem("role", "student");
      window.location.href = "index.html";
    });
  })();

 
  const role = localStorage.getItem("role");
  const headerGuest = document.getElementById("header-guest");
  const headerStudent = document.getElementById("header-student");
  const headerEmployer = document.getElementById("header-employer");
  const logoutBtns = document.querySelectorAll("#logoutBtn");

  if (headerGuest) headerGuest.style.display = "none";
  if (headerStudent) headerStudent.style.display = "none";
  if (headerEmployer) headerEmployer.style.display = "none";

  if (role === "student" && headerStudent) {
    headerStudent.style.display = "flex";
    logoutBtns.forEach(btn => btn.style.display = "inline-block");
  } else if (role === "employer" && headerEmployer) {
    headerEmployer.style.display = "flex";
    logoutBtns.forEach(btn => btn.style.display = "inline-block");
  } else if (headerGuest) {
    headerGuest.style.display = "flex";
  }

  window.logoutUser = function() {
    localStorage.removeItem("role");
    window.location.href = "index.html";
  };

  
  const hamburgers = document.querySelectorAll('.hamburger');

hamburgers.forEach(h => {
  const nav = h.nextElementSibling;

  h.addEventListener('click', () => {
    nav.classList.toggle('show');

    if (nav.classList.contains('show')) {
      h.innerHTML = `<img src="media/close.png" alt="close" style="width:30px;height:30px">`;
    } else {
      h.innerHTML = `<img src="media/menu.png" alt="menu" style="width:30px;height:30px">`;
    }
  });
});


}); 