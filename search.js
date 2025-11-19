// Select elements
const searchInput = document.querySelector('.Searchn input');
const categorySelect = document.querySelectorAll('.Searchabout select')[0];
const citySelect = document.querySelectorAll('.Searchabout select')[1];
const cards = document.querySelectorAll('.cards > div');
const resultsCount = document.querySelector('.Searchabout p');

// Function to filter cards
function filterCards() {
    const query = searchInput.value.toLowerCase();
    const selectedCategory = categorySelect.value;
    const selectedCity = citySelect.value;

    let visibleCount = 0;

    cards.forEach(card => {
        // Get card info
        const title = card.querySelector('.Title h3').textContent.toLowerCase();
        const description = card.querySelector('p').textContent.toLowerCase();
        const category = card.querySelector('.categoryn').textContent;
        const city = card.querySelector('.cityn h4').textContent;

        // Check if card matches search input
        const matchesQuery = title.includes(query) || description.includes(query);
        const matchesCategory = selectedCategory === 'All Categories' || category === selectedCategory;
        const matchesCity = selectedCity === 'All Cities' || city === selectedCity;

        // Show or hide card
        if (matchesQuery && matchesCategory && matchesCity) {
            card.style.display = 'block';
            visibleCount++;
        } else {
            card.style.display = 'none';
        }
    });

    // Update results text
    resultsCount.textContent = `${visibleCount} services found`;
}

// Event listeners
searchInput.addEventListener('input', filterCards);
categorySelect.addEventListener('change', filterCards);
citySelect.addEventListener('change', filterCards);

// Initialize filter on page load
filterCards();
