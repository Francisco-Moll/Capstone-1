document.addEventListener('DOMContentLoaded', () => {
    setupCarousel('carousel', 'prev', 'next');
    setupCarousel('carousel2', 'prev2', 'next2');
});

function setupCarousel(carouselId, prevId, nextId) {
    const carousel = document.getElementById(carouselId);
    const products = carousel.querySelectorAll('.product');
    const nextButton = document.getElementById(nextId);
    const prevButton = document.getElementById(prevId);

    let currentIndex = 0;

    function updateVisibility() {
        products.forEach((product, index) => {
            if (index === currentIndex) {
                product.classList.add('active');
                product.style.opacity = '1';
                product.style.visibility = 'visible';
            } else {
                product.classList.remove('active');
                product.style.opacity = '0';
                product.style.visibility = 'hidden';
            }
        });
    }

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % products.length;
        updateVisibility();
    });

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + products.length) % products.length;
        updateVisibility();
    });

    updateVisibility();  // Initial visibility update
}