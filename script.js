/* =====================================================
   JAVASCRIPT FUNCTIONALITY
   ===================================================== */

// ===== FAQ ACCORDION =====
function toggleFAQ(element) {
    const faqItem = element.parentElement;
    
    // Close all other FAQ items
    document.querySelectorAll('.faq-item').forEach(item => {
        if (item !== faqItem) {
            item.classList.remove('active');
        }
    });
    
    // Toggle current item
    faqItem.classList.toggle('active');
}

// ===== HAMBURGER MENU =====
const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close menu when clicking nav links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// ===== INTERSECTION OBSERVER FOR ANIMATIONS =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = `fadeInUp 0.6s ease-out forwards`;
            const delay = entry.target.style.animationDelay;
            if (delay) {
                entry.target.style.animationDelay = delay;
            }
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all fade-in-up elements
document.querySelectorAll('.fade-in-up').forEach(element => {
    observer.observe(element);
});

// ===== LIGHTBOX FUNCTIONALITY =====
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const galleryImages = [
    'clinic.jpg',
    'clinic3.jpg',
    'clicnic1.jpg',
    'clicnic5.jpg',
    'clicnic.jpg',
    'kamran.jpg'
];

let currentImageIndex = 0;

function openLightbox(index) {
    currentImageIndex = index;
    lightboxImg.src = galleryImages[index];
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
    lightboxImg.src = galleryImages[currentImageIndex];
}

function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
    lightboxImg.src = galleryImages[currentImageIndex];
}

// Close lightbox on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeLightbox();
    }
    if (e.key === 'ArrowRight') {
        nextImage();
    }
    if (e.key === 'ArrowLeft') {
        prevImage();
    }
});

// Close lightbox when clicking outside image
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        closeLightbox();
    }
});

// ===== SMOOTH SCROLL BEHAVIOR =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===== NAVBAR SCROLL EFFECT =====
const navbar = document.querySelector('.navbar');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 100) {
        navbar.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
    } else {
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    }
    
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// ===== TESTIMONIALS AUTO-ROTATE =====
function initTestimonialRotation() {
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    if (testimonialCards.length > 0) {
        let currentTestimonial = 0;
        
        // This would rotate testimonials on mobile if needed
        // For now, we're showing all on grid
    }
}

initTestimonialRotation();

// ===== COUNTER ANIMATION FOR STATS =====
function animateCounters() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    const observerCounter = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                const finalValue = element.textContent;
                
                // For now, just show the final value with animation
                // You could implement number counting here if desired
                
                observerCounter.unobserve(element);
            }
        });
    }, { threshold: 0.5 });
    
    statNumbers.forEach(stat => observerCounter.observe(stat));
}

animateCounters();

// ===== FORM INTERACTIONS =====
document.addEventListener('DOMContentLoaded', () => {
    // Ensure all WhatsApp links are working
    const whatsappLinks = document.querySelectorAll('a[href*="wa.me"]');
    whatsappLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // Link will open in new tab - that's fine
        });
    });
});

// ===== SERVICE CARDS HOVER EFFECT =====
const serviceCards = document.querySelectorAll('.service-card');
serviceCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-8px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// ===== FACILITY ITEMS HOVER EFFECT =====
const facilityItems = document.querySelectorAll('.facility-item');
facilityItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.querySelector('img').style.transform = 'scale(1.1)';
    });
    
    item.addEventListener('mouseleave', function() {
        this.querySelector('img').style.transform = 'scale(1)';
    });
});

// ===== UTILITY: PHONE CLICK TRACKING =====
const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
phoneLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        // Track phone call attempts if using analytics
        console.log('Phone call initiated');
    });
});

// ===== LOAD MORE FUNCTIONALITY (IF NEEDED) =====
function addLoadMoreGallery() {
    // This can be extended for infinite scroll or load more
    // Currently showing all gallery items
}

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
    console.log('Kamran Physio Clinic Website Loaded');
    
    // Add animation delay to cascade fade-in effects
    const fadeElements = document.querySelectorAll('.fade-in-up');
    fadeElements.forEach((element, index) => {
        if (!element.style.animationDelay) {
            element.style.animationDelay = `${index * 0.05}s`;
        }
    });
    
    // Preload gallery images
    galleryImages.forEach(img => {
        const preloadImg = new Image();
        preloadImg.src = img;
    });
    // Initialize service tabs and appointment form handlers
    if (typeof initServiceTabs === 'function') initServiceTabs();
    if (typeof setupAppointmentForm === 'function') setupAppointmentForm();
});

// ===== ACCESSIBILITY IMPROVEMENTS =====
document.addEventListener('keydown', (e) => {
    // Tab navigation through buttons
    if (e.key === 'Tab') {
        const focusedElement = document.activeElement;
        if (focusedElement.classList.contains('btn')) {
            focusedElement.style.outline = '3px solid #0056b3';
        }
    }
});

// ===== PERFORMANCE: LAZY LOAD IMAGES =====
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img').forEach(img => {
        imageObserver.observe(img);
    });
}

// ===== SERVICE TABS =====
function initServiceTabs() {
    const tabs = document.querySelectorAll('.service-tab');
    const panels = document.querySelectorAll('.service-panel');

    if (!tabs.length) return;

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const target = tab.getAttribute('data-tab');

            tabs.forEach(t => {
                t.classList.toggle('active', t === tab);
                t.setAttribute('aria-selected', t === tab ? 'true' : 'false');
            });

            panels.forEach(panel => {
                panel.classList.toggle('active', panel.getAttribute('data-panel') === target);
            });
        });
    });
}

// ===== APPOINTMENT FORM VALIDATION & WHATSAPP DISPATCH =====
function setupAppointmentForm() {
    const form = document.getElementById('appointment-form');
    if (!form) return;

    const successEl = document.getElementById('appointment-success');

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    function clearErrors() {
        form.querySelectorAll('.field-error').forEach(e => e.textContent = '');
        form.querySelectorAll('.invalid').forEach(i => i.classList.remove('invalid'));
    }

    function showError(fieldName, message) {
        const el = form.querySelector(`[data-for="${fieldName}"]`);
        if (el) el.textContent = message;
        const input = form.querySelector(`[name="${fieldName}"]`);
        if (input) input.classList.add('invalid');
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        clearErrors();

        const name = form.querySelector('[name="name"]').value.trim();
        const email = form.querySelector('[name="email"]').value.trim();
        const phone = form.querySelector('[name="phone"]').value.trim();
        const service = form.querySelector('[name="service"]').value.trim();
        const message = form.querySelector('[name="message"]').value.trim();

        let valid = true;

        if (!name) { showError('name', 'Full name is required'); valid = false; }
        if (!email || !emailRegex.test(email)) { showError('email', 'Please enter a valid email'); valid = false; }
        const digits = phone.replace(/\D/g, '');
        if (!phone || digits.length < 10) { showError('phone', 'Please enter a valid phone number'); valid = false; }
        if (!service) { showError('service', 'Please select a service'); valid = false; }
        if (!message) { showError('message', 'Please provide some details'); valid = false; }

        if (!valid) {
            // focus first invalid field
            const firstInvalid = form.querySelector('.invalid');
            if (firstInvalid) firstInvalid.focus();
            return;
        }

        // Construct WhatsApp message (silently)
        const waMessage = `New Appointment Request\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nService: ${service}\nMessage: ${message}`;
        const encoded = encodeURIComponent(waMessage);
        const waUrl = `https://wa.me/923332832031?text=${encoded}`;

        // Open in new tab
        window.open(waUrl, '_blank');

        // Show success banner and reset form
        if (successEl) {
            successEl.style.display = 'block';
            successEl.textContent = "Your request has been sent! We'll be in touch shortly.";
        }
        form.reset();

        setTimeout(() => {
            if (successEl) successEl.style.display = 'none';
        }, 7000);
    });

    // Clear field error on input
    form.querySelectorAll('input,textarea,select').forEach(el => {
        el.addEventListener('input', () => {
            const name = el.getAttribute('name');
            const err = form.querySelector(`[data-for="${name}"]`);
            if (err) err.textContent = '';
            el.classList.remove('invalid');
        });
    });
}
