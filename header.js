document.addEventListener("DOMContentLoaded", function() {
    const role = localStorage.getItem("role"); // get role

    const headerGuest = document.getElementById("header-guest");
    const headerStudent = document.getElementById("header-student");
    const headerEmployer = document.getElementById("header-employer");

    const logoutBtns = document.querySelectorAll("#logoutBtn"); // all logout buttons

    // hide all headers first
    if(headerGuest) headerGuest.style.display = "none";
    if(headerStudent) headerStudent.style.display = "none";
    if(headerEmployer) headerEmployer.style.display = "none";

    // show based on role
    if(role === "student" && headerStudent) {
        headerStudent.style.display = "flex";
        logoutBtns.forEach(btn => btn.style.display = "inline-block"); // show logout
    } else if(role === "employer" && headerEmployer) {
        headerEmployer.style.display = "flex";
        logoutBtns.forEach(btn => btn.style.display = "inline-block"); // show logout
    } else if(headerGuest) {
        headerGuest.style.display = "flex";
    }

    // logout function
    window.logoutUser = function() {
        localStorage.removeItem("role");
        window.location.href = "index.html";
    }

    // hamburger toggle
    const hamburger = document.querySelectorAll('.hamburger');
    hamburger.forEach(h => {
        const nav = h.nextElementSibling; // nav inside the same header
        h.addEventListener('click', () => {
            nav.style.display = (nav.style.display === 'flex') ? 'none' : 'flex';
            if (h.innerHTML.includes('menu.png')) {
                h.innerHTML = '<img src="media/close.png" alt="close" style="width:30px; height:30px">';
            } else {
                h.innerHTML = '<img src="media/menu.png" alt="menu" style="width:30px;height:30px">';
            }
        });
    });
});
