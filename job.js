
const searchInput = document.querySelector(".search");
const categorySelect = document.querySelector(".cat");
const citySelect = document.querySelector(".cit");
const jobCards = document.querySelectorAll(".job-card");


function filterJobs() {
    const searchText = searchInput.value.toLowerCase();
    const selectedCategory = categorySelect.value.toLowerCase();
    const selectedCity = citySelect.value.toLowerCase();

    jobCards.forEach(card => {
        const title = card.querySelector("h3").innerText.toLowerCase();
        const description = card.querySelector(".desc").innerText.toLowerCase();
        const tags = card.querySelector(".tags").innerText.toLowerCase();
        const location = card.querySelector(".location").innerText.toLowerCase();

        const matchesSearch = title.includes(searchText) || description.includes(searchText) || tags.includes(searchText);
        const matchesCategory = selectedCategory === "all categories" || tags.includes(selectedCategory);
        const matchesCity = selectedCity === "all cities" || location.includes(selectedCity);

        if (matchesSearch && matchesCategory && matchesCity) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}


searchInput.addEventListener("input", filterJobs);
categorySelect.addEventListener("change", filterJobs);
citySelect.addEventListener("change", filterJobs);


jobCards.forEach(card => {
    card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-5px)";
        card.style.boxShadow = "0 12px 24px rgba(0,0,0,0.2)";
    });
    card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0)";
        card.style.boxShadow = "0 4px 12px rgba(0,0,0,0.08)";
    });
});
 


