
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav1');

hamburger.addEventListener('click', () => {
    
    nav.style.display = (nav.style.display === 'flex') ? 'none' : 'flex';

    
    if (hamburger.innerHTML.includes('menu.png')) {
      
        hamburger.innerHTML = '<img src="media/close.png" alt="close" style="width:30px; height:30px">';
    } else {
        
        hamburger.innerHTML = '<img src="media/menu.png" alt="menu" style="width:30px;height:30px">';
    }
});


