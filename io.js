document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = link.getAttribute('href').substring(1); // Get the ID without the '#'
            const targetSection = document.getElementById(targetId);
            
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });
});