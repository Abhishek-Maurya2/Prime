/**
 * Prime Clone JS file
 * Handles animations, intersection observers, and UI interactions
 */

document.addEventListener('DOMContentLoaded', () => {

    // 1. Intersection Observer for scroll animations (fade-in, slide-up)
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: Stop observing once revealed if you only want it to happen once
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.scroll-reveal, .auto-fade');
    revealElements.forEach(el => {
        scrollObserver.observe(el);
    });

    // 2. Header Hide/Show on Scroll logic
    let lastScrollPosition = window.pageYOffset;
    let header = document.getElementById('header');

    window.addEventListener('scroll', () => {
        const currentScrollPosition = window.pageYOffset;

        // Let's keep it sticky for now, can implement hide-on-scroll-down if needed
        // Prime header tends to stay, but if needed we can toggle 'scrolled-up' class

        /* 
        if (currentScrollPosition > 100 && currentScrollPosition > lastScrollPosition) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }
        */

        if (currentScrollPosition > 50) {
            header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        } else {
            header.style.boxShadow = 'none';
        }

        lastScrollPosition = currentScrollPosition;
    });

    // 3. Mobile menu toggle (skeleton for now)
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            // Toggle menu open/close
            console.log("Toggle mobile menu - to be implemented");
        });
    }

    // 4. Hero Slider Logic
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.slider-dots .dot');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentSlideIndex = 0;
    let sliderInterval;

    if (slides.length > 0) {
        const goToSlide = (index) => {
            slides[currentSlideIndex].classList.remove('active');
            if (dots[currentSlideIndex]) dots[currentSlideIndex].classList.remove('active');

            currentSlideIndex = index;
            if (currentSlideIndex >= slides.length) currentSlideIndex = 0;
            if (currentSlideIndex < 0) currentSlideIndex = slides.length - 1;

            slides[currentSlideIndex].classList.add('active');
            if (dots[currentSlideIndex]) dots[currentSlideIndex].classList.add('active');

            // Retrigger animations
            const content = slides[currentSlideIndex].querySelector('.fade-up-in');
            if (content) {
                content.style.animation = 'none';
                content.offsetHeight; // trigger reflow
                content.style.animation = null;
            }
        };

        const nextSlide = () => goToSlide(currentSlideIndex + 1);
        const prevSlide = () => goToSlide(currentSlideIndex - 1);

        if (nextBtn) nextBtn.addEventListener('click', () => { nextSlide(); resetInterval(); });
        if (prevBtn) prevBtn.addEventListener('click', () => { prevSlide(); resetInterval(); });

        dots.forEach(dot => {
            dot.addEventListener('click', (e) => {
                goToSlide(parseInt(e.target.dataset.index));
                resetInterval();
            });
        });

        const resetInterval = () => {
            clearInterval(sliderInterval);
            sliderInterval = setInterval(nextSlide, 5000);
        };

        resetInterval();
    }

    // --- GLOBAL INTERACTION TRACKING ---
    // Track EVERY button and link click
    document.addEventListener("click", function(e) {
        const target = e.target.closest('a, button');
        if (target) {
            const isButton = target.tagName.toLowerCase() === 'button';
            const text = target.innerText.trim() || target.getAttribute('aria-label') || 'Icon/Image';
            const identifier = target.id || target.className || 'no-id-class';
            
            if (typeof gtag === 'function') {
                gtag('event', 'click_interaction', {
                    event_category: isButton ? 'button' : 'link',
                    event_label: text,
                    element_id: identifier,
                    page_path: window.location.pathname
                });
            }
        }
    });

    // --- CART & SPECIFIC EVENT TRACKING ---

    // Initialize Cart Count from LocalStorage
    let cartCount = parseInt(localStorage.getItem('cartCount')) || 0;
    const updateCartUI = () => {
        const counts = document.querySelectorAll('.cart-count');
        counts.forEach(c => {
            c.innerText = cartCount;
            c.style.display = cartCount > 0 ? 'flex' : 'none';
        });
    };
    updateCartUI();

    // Track Add-to-Cart Button
    document.querySelectorAll(".add-to-cart-btn").forEach(btn => {
        btn.addEventListener("click", function() {
            // Logic: Increment count
            cartCount++;
            localStorage.setItem('cartCount', cartCount);
            updateCartUI();

            // GA4 Tracking
            if (typeof gtag === 'function') {
                gtag('event', 'add_to_cart', {
                    event_category: 'ecommerce',
                    event_label: 'prime_product'
                });
            }
            
            // Feedback
            const originalText = this.innerText;
            this.innerText = "ADDED!";
            this.style.background = "#000";
            setTimeout(() => {
                this.innerText = originalText;
                this.style.background = "";
            }, 1500);
        });
    });

    // Track Buy Prime Button
    document.querySelector(".buy-prime-btn")?.addEventListener("click", function(){
        if (typeof gtag === 'function') {
            gtag('event', 'buy_prime_click', {
                event_category: 'engagement'
            });
        }
    });

    // Track Shop Buttons (Hero and Nav)
    document.querySelectorAll(".shop-all-btn, .nav-link, .btn-large").forEach(link => {
        if (link.innerText.toLowerCase().includes('shop')) {
            link.addEventListener("click", function() {
                if (typeof gtag === 'function') {
                    gtag('event', 'shop_click', {
                        event_category: 'engagement',
                        event_label: this.innerText
                    });
                }
            });
        }
    });

    // Track Cart Icon/Button click
    document.querySelector(".cart-icon")?.addEventListener("click", function() {
        if (typeof gtag === 'function') {
            gtag('event', 'view_cart', {
                event_category: 'engagement'
            });
        }
    });

    // Track Newsletter Signup
    document.querySelector(".newsletter-form")?.addEventListener("submit", function(e){
        // e.preventDefault(); // Uncomment if you want to handle it purely via JS
        if (typeof gtag === 'function') {
            gtag('event', 'newsletter_signup', {
                event_category: 'lead_generation'
            });
        }
    });

});
