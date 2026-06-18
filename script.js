// ===== FORM SUBMISSION =====
document.getElementById("B2").addEventListener("submit", function(e) {
    e.preventDefault();

    let fullName = document.getElementById("fullName").value;
    let phone    = document.getElementById("Phone").value;
    let email    = document.getElementById("Email").value;
    let address  = document.getElementById("Address").value;
    let genderEl = document.querySelector('input[name="gender"]:checked');

    if (fullName && phone && email && address && genderEl) {
        alert("Thank you, " + fullName + "! Your application has been submitted successfully.");
        this.reset();
    } else {
        alert("Please fill in all fields and select your gender.");
    }
});

// ===== SMOOTH SCROLLING =====
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener("click", function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
});
