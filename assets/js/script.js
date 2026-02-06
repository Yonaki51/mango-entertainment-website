/* ============================================
   MANGO ENTERTAINMENT WEBSITE SCRIPTS
   Main JavaScript functionality for the website
   ============================================ */

/* ============================================
   FOOTER YEAR UPDATE
   Automatically sets the current year in the footer
   ============================================ */
const yearElement = document.getElementById('year');
if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

/* ============================================
   SMOOTH SCROLLING
   Enables smooth scrolling behavior for anchor links
   ============================================ */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        // Get the target section based on href
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            // Scroll smoothly to the target section
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

/* ============================================
   ACTIVE NAVIGATION HIGHLIGHTING
   Updates navigation links based on scroll position
   ============================================ */

// Get all sections and navigation links
const sections = document.querySelectorAll('section[id], main#home');
const navLinks = document.querySelectorAll('nav a[href^="#"]');

/**
 * Sets the active navigation link based on current scroll position
 * Adds 'active' class to the nav link corresponding to the visible section
 */
function setActiveNav() {
    let current = '';
    // Add offset to account for sticky header
    const scrollPosition = window.scrollY + 100;

    // Find which section is currently in view
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        // Check if the current scroll position is within this section
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    // Update active class on navigation links
    navLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href').substring(1); // Remove '#'
        
        if (href === current) {
            link.classList.add('active');
        }
    });
}

// Listen for scroll events to update active navigation
window.addEventListener('scroll', setActiveNav);

// Set initial active state on page load
window.addEventListener('load', setActiveNav);
