// Example for a simple mobile navigation toggle (requires a button and a nav menu in HTML)
document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle'); // You would add a button with this class in HTML
    const navLinks = document.querySelector('.nav-links ul');

    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active'); // Toggle a class to show/hide the menu
        });
    }

    // Optional: Close nav when clicking a link (for single-page sites)
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });
});