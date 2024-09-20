window.addEventListener('scroll', function() {
    const heroContent = document.querySelector('.hero-content');
    const scrollY = window.scrollY;

    heroContent.style.transform = `translateY(${scrollY * 0.5}px)`;
    heroContent.style.opacity = 1 - (scrollY / 500);
});
