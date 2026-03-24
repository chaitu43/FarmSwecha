document.addEventListener('DOMContentLoaded', () => {
    // Smooth navigation highlighting
    const sections = document.querySelectorAll('section, header');
    const navLinks = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - 150) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });

    // Generic form submission handler
    const handleForm = (formId, successMessage) => {
        const form = document.getElementById(formId);
        if (form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                const btn = form.querySelector('button');
                const originalText = btn.innerText;

                btn.innerText = 'Processing...';
                btn.disabled = true;

                setTimeout(() => {
                    alert(successMessage);
                    form.reset();
                    btn.innerText = originalText;
                    btn.disabled = false;
                }, 1500);
            });
        }
    };

    handleForm('contactForm', 'Thank you for your message! We will get back to you soon.');
    handleForm('communityForm', 'Welcome to the community! We will contact you shortly.');
    handleForm('soilForm', 'Request received! Our expert will call you to schedule collection.');

    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.feature-card, .about-content, .about-img').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.6s ease-out';
        observer.observe(el);
    });

    // Handle the custom "fade-in" logic via JS instead of separate CSS class for simplicity here
    const observerCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    };

    const obs = new IntersectionObserver(observerCallback, observerOptions);
    document.querySelectorAll('.feature-card, .about-content, .about-img').forEach(el => obs.observe(el));
});
