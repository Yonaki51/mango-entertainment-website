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

/* ============================================
   CONTACT FORM ENHANCEMENTS
   Interactive form validation and submission
   ============================================ */

// Get the contact form
const contactForm = document.querySelector('.contact-form');

if (contactForm) {
    const emailInput = contactForm.querySelector('#email');
    const reasonSelect = contactForm.querySelector('#reason');
    const messageTextarea = contactForm.querySelector('#message');
    const submitBtn = contactForm.querySelector('.submit-btn');

    /**
     * Add character counter for message field
     */
    const charCounter = document.createElement('div');
    charCounter.className = 'char-counter';
    charCounter.textContent = '0 karakters';
    messageTextarea.parentElement.appendChild(charCounter);

    messageTextarea.addEventListener('input', function() {
        const length = this.value.length;
        charCounter.textContent = `${length} karakter${length === 1 ? '' : 's'}`;
        
        // Add a nice animation when typing
        this.style.transform = 'scale(1.01)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 100);
    });

    /**
     * Add floating labels effect for better UX
     */
    const formInputs = [emailInput, messageTextarea];
    formInputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
        });
        
        input.addEventListener('blur', function() {
            if (!this.value) {
                this.parentElement.classList.remove('focused');
            }
        });
    });

    /**
     * Add validation with visual feedback
     */
    emailInput.addEventListener('blur', function() {
        if (this.value && !this.validity.valid) {
            this.classList.add('invalid');
            showFieldError(this, 'Voer een geldig e-mailadres in');
        } else {
            this.classList.remove('invalid');
            removeFieldError(this);
        }
    });

    emailInput.addEventListener('input', function() {
        if (this.classList.contains('invalid')) {
            this.classList.remove('invalid');
            removeFieldError(this);
        }
    });

    /**
     * Form submission handler with animation
     */
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Disable submit button to prevent double submission
        submitBtn.disabled = true;
        submitBtn.textContent = 'Versturen...';
        
        // Add loading animation
        submitBtn.classList.add('loading');
        
        // Simulate form submission (since there's no backend)
        setTimeout(() => {
            // Show success message
            showSuccessMessage();
            
            // Reset form
            contactForm.reset();
            charCounter.textContent = '0 karakters';
            
            // Reset button
            submitBtn.disabled = false;
            submitBtn.textContent = 'Verstuur';
            submitBtn.classList.remove('loading');
            
            // Remove focused states
            formInputs.forEach(input => {
                input.parentElement.classList.remove('focused');
            });
        }, 1500);
    });

    /**
     * Show error message for a field
     */
    function showFieldError(field, message) {
        removeFieldError(field);
        const errorMsg = document.createElement('div');
        errorMsg.className = 'field-error';
        errorMsg.textContent = message;
        field.parentElement.appendChild(errorMsg);
    }

    /**
     * Remove error message from a field
     */
    function removeFieldError(field) {
        const existingError = field.parentElement.querySelector('.field-error');
        if (existingError) {
            existingError.remove();
        }
    }

    /**
     * Show success message after form submission
     */
    function showSuccessMessage() {
        const successMsg = document.createElement('div');
        successMsg.className = 'success-message';
        successMsg.innerHTML = `
            <div class="success-content">
                <div class="success-icon">✓</div>
                <h3>Bedankt voor je bericht!</h3>
                <p>We nemen zo snel mogelijk contact met je op.</p>
            </div>
        `;
        
        contactForm.parentElement.insertBefore(successMsg, contactForm);
        
        // Animate in
        setTimeout(() => {
            successMsg.classList.add('show');
        }, 10);
        
        // Remove after 5 seconds
        setTimeout(() => {
            successMsg.classList.remove('show');
            setTimeout(() => {
                successMsg.remove();
            }, 300);
        }, 5000);
    }

    /**
     * Add hover effect to submit button with ripple
     */
    submitBtn.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        ripple.className = 'ripple';
        
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
}

/* ============================================
   IMAGE SLIDER FUNCTIONALITY
   Enables navigation through multiple product images
   ============================================ */

// Get all image sliders on the page
const imageSliders = document.querySelectorAll('.image-slider');

imageSliders.forEach(slider => {
    const images = slider.querySelectorAll('.slider-image');
    const prevBtn = slider.querySelector('.slider-btn.prev');
    const nextBtn = slider.querySelector('.slider-btn.next');
    const dots = slider.querySelectorAll('.slider-dots .dot');
    let currentIndex = 0;

    /**
     * Show image at specified index
     */
    function showImage(index) {
        // Remove active class from all images and dots
        images.forEach(img => img.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));

        // Add active class to current image and dot
        images[index].classList.add('active');
        dots[index].classList.add('active');
        currentIndex = index;
    }

    /**
     * Show next image in the slider
     */
    function nextImage() {
        const newIndex = (currentIndex + 1) % images.length;
        showImage(newIndex);
    }

    /**
     * Show previous image in the slider
     */
    function prevImage() {
        const newIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(newIndex);
    }

    // Add event listeners to navigation buttons
    if (prevBtn) {
        prevBtn.addEventListener('click', prevImage);
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', nextImage);
    }

    // Add event listeners to dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showImage(index);
        });
    });

    // Optional: Auto-advance slider every 5 seconds (can be removed if not desired)
    // Uncomment the following lines to enable auto-advance
    /*
    setInterval(() => {
        nextImage();
    }, 5000);
    */
});
