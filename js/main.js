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

});
