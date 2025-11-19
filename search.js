
const searchInput = document.querySelector('.Searchn input');
const categorySelect = document.querySelectorAll('.Searchabout select')[0];
const citySelect = document.querySelectorAll('.Searchabout select')[1];
const cards = document.querySelectorAll('.cards > div');
const resultsCount = document.querySelector('.Searchabout p');


function filterCards() {
    const query = searchInput.value.toLowerCase();
    const selectedCategory = categorySelect.value;
    const selectedCity = citySelect.value;

    let visibleCount = 0;

    cards.forEach(card => {
        
        const title = card.querySelector('.Title h3').textContent.toLowerCase();
        const description = card.querySelector('p').textContent.toLowerCase();
        const category = card.querySelector('.categoryn').textContent;
        const city = card.querySelector('.cityn h4').textContent;

        
        const matchesQuery = title.includes(query) || description.includes(query);
        const matchesCategory = selectedCategory === 'All Categories' || category === selectedCategory;
        const matchesCity = selectedCity === 'All Cities' || city === selectedCity;

     
        if (matchesQuery && matchesCategory && matchesCity) {
            card.style.display = 'block';
            visibleCount++;
        } else {
            card.style.display = 'none';
        }
    });

   
    resultsCount.textContent = `${visibleCount} services found`;
}


searchInput.addEventListener('input', filterCards);
categorySelect.addEventListener('change', filterCards);
citySelect.addEventListener('change', filterCards);


filterCards();
