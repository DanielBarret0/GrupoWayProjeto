// EFEITO RODAPE //
const sections = document.querySelectorAll('.scroll-section');

// Add scroll event listener to highlight the active section
window.addEventListener('scroll', highlightActiveSection);

function highlightActiveSection() {
    sections.forEach(section => {
        const bounding = section.getBoundingClientRect();

        if (
            bounding.top >= 0 &&
            bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
        ) {
            // Add 'active' class to the current section
            section.classList.add('active');

            // Remove 'active' class after the animation ends
            section.addEventListener('animationend', () => {
                section.classList.remove('active');
            }, { once: true });
        }
    });
}
