// Select the input field
const searchInput = document.querySelector('.Searchn input');
const cards = document.querySelectorAll('.cards > div');
const resultsCount = document.querySelector('.Searchabout p');

searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();
    let visibleCount = 0;

    cards.forEach(card => {
        const title = card.querySelector('.Title h3').textContent.toLowerCase();
        const description = card.querySelector('p').textContent.toLowerCase();

        // Split title and description into words
        const words = title.split(' ').concat(description.split(' '));

        // Check if any word starts with the query
        const matches = words.some(word => word.startsWith(query));

        if (matches) {
            card.style.display = 'block';
            visibleCount++;
        } else {
            card.style.display = 'none';
        }
    });

    resultsCount.textContent = `${visibleCount} services found`;
});