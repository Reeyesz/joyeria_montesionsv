document.addEventListener('DOMContentLoaded', () => {

    /* 1. Intersection Observer for Scroll Animations */
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    if (animatedElements.length) {
        const scrollObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

        animatedElements.forEach(el => scrollObserver.observe(el));
    }

    /* 2. Navbar Scroll State */
    const navbar = document.getElementById('navbar');
    const handleScroll = () => {
        if (!navbar) return;
        navbar.classList.toggle('scrolled', window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    /* 3. Smooth Scroll for Anchor Links */
    document.querySelectorAll("a[href^='#']").forEach(link => {
        link.addEventListener('click', e => {
            const targetId = link.getAttribute('href');
            if (targetId === '#') return;
            const targetEl = document.querySelector(targetId);
            if (!targetEl) return;

            e.preventDefault();
            targetEl.scrollIntoView({ behavior: 'smooth' });

            // Close mobile menu if open
            if (navbar && navbar.classList.contains('nav-open')) {
                navbar.classList.remove('nav-open');
                document.body.style.overflow = '';
            }
        });
    });

    /* 4. Mobile Menu Toggle */
    const menuToggle = document.getElementById('menu-toggle');
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            const isOpen = navbar.classList.toggle('nav-open');
            document.body.style.overflow = isOpen ? 'hidden' : '';
        });
    }

    /* 5. Loader */
    const loader = document.getElementById('loader');
    if (loader) {
        setTimeout(() => {
            loader.style.opacity = '0';
            setTimeout(() => loader.remove(), 800);
        }, 600);
    }

    /* 6. Current Year */
    const yearEl = document.getElementById('current-year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    /* 7. WhatsApp Floating Button — show after scroll */
    const waFloat = document.getElementById('whatsapp-float');
    if (waFloat) {
        const showWaFloat = () => {
            waFloat.classList.toggle('visible', window.scrollY > 300);
        };
        window.addEventListener('scroll', showWaFloat, { passive: true });
        showWaFloat();
    }

    /* 8. Product Modal */
    const modal = document.getElementById('product-modal');
    const modalClose = document.querySelector('.modal-close');
    const openModalBtns = document.querySelectorAll('.open-modal-btn');

    const modalMainImg = document.getElementById('modal-main-img');
    const modalTitle = document.getElementById('modal-title');
    const modalPrice = document.getElementById('modal-price');
    const modalDesc = document.getElementById('modal-desc');
    const modalWaBtn = document.getElementById('modal-whatsapp-btn');

    if (modal) {
        openModalBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const title = btn.getAttribute('data-title');
                const price = btn.getAttribute('data-price');
                const img = btn.getAttribute('data-img');
                const desc = btn.getAttribute('data-desc') || '';

                if (modalTitle) modalTitle.textContent = title;
                if (modalPrice) modalPrice.textContent = price;
                if (modalMainImg) modalMainImg.src = img;
                if (modalDesc) modalDesc.textContent = desc;

                const encodedText = encodeURIComponent(
                    `Hola, me interesa la ${title}. ¿Podrían darme más información?`
                );
                if (modalWaBtn) {
                    modalWaBtn.href = `https://wa.me/50361830443?text=${encodedText}`;
                }

                modal.classList.add('active');
                document.body.style.overflow = 'hidden';
            });
        });

        const closeModal = () => {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        };

        if (modalClose) modalClose.addEventListener('click', closeModal);

        modal.addEventListener('click', e => {
            if (e.target === modal) closeModal();
        });

        document.addEventListener('keydown', e => {
            if (e.key === 'Escape' && modal.classList.contains('active')) closeModal();
        });
    }
});
