document.addEventListener('DOMContentLoaded', () => {
    // Add smooth scrolling to all navigation links
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = link.getAttribute('href').substring(1); // Get the ID without the '#'
            const targetSection = document.getElementById(targetId);

            // Scroll to the section smoothly
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });
});