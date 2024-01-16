document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.card');

    function fadeInSequentially() {
        cards.forEach((card, index) => {
            card.style.opacity = 0;
            card.style.transition = `opacity 0.5s ease-in-out, transform 0.5s ease-in-out ${index * 0.3}s`;
            card.style.transform = 'translateY(20px)';
        });

        function isInViewport(element) {
            const rect = element.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        }

        function fadeInIfVisible() {
            cards.forEach((card, index) => {
                if (isInViewport(card)) {
                    card.style.opacity = 1;
                    card.style.transform = 'translateY(0)';
                    card.classList.add('in-viewport');
                }
            });
        }

        // Listen for scroll events
        window.addEventListener('scroll', fadeInIfVisible);

        // Check on page load in case the cards are already in view
        fadeInIfVisible();
    }

    fadeInSequentially();
});
