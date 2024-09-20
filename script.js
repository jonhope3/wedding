window.addEventListener('scroll', function() {
    const heroContent = document.querySelector('.hero-content');
    const scrollY = window.scrollY;

    heroContent.style.transform = `translateY(${scrollY * 0.5}px)`;
    heroContent.style.opacity = 1 - (scrollY / 500);
});

const mobileMenu = document.getElementById('mobile-menu');
const navList = document.querySelector('.nav-list');

mobileMenu.addEventListener('click', () => {
    navList.classList.toggle('active');
});

// Close the mobile menu when a link is clicked
navList.addEventListener('click', () => {
    if (navList.classList.contains('active')) {
        navList.classList.remove('active');
    }
});
