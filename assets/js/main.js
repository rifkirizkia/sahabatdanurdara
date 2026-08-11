document.addEventListener('DOMContentLoaded', () => {
    // Mobile Navigation Toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
    }

    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
                // Close mobile menu if open
                if (navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    navToggle.classList.remove('active');
                }
            }
        });
    });

    // Header Scroll Effect
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Intersection Observer for Fade-in Animations
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // For general fade-ins, we might want to keep them once visible
            if (entry.target.classList.contains('fade-in')) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    // observer.unobserve(entry.target); // Keep observing if we want them to fade out too, or unobserve to keep
                }
            }
            // For timeline items, we want them to disappear when scrolling up (out of view)
            else if (entry.target.classList.contains('timeline-item')) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                } else {
                    entry.target.classList.remove('visible');
                }
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });

    document.querySelectorAll('.timeline-item').forEach(el => {
        observer.observe(el);
    });

    // Detailed Activity Modal Functionality
    const modal = document.getElementById('activity-modal');
    const closeModalBtn = document.querySelector('.close-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalDate = document.getElementById('modal-date');
    const modalCategory = document.getElementById('modal-category');
    const modalDescription = document.getElementById('modal-description');
    const modalImagePlaceholder = document.getElementById('modal-image-placeholder');
    const modalIcon = document.getElementById('modal-icon');

    if (modal) {
        document.querySelectorAll('.gallery-item').forEach(item => {
            item.addEventListener('click', () => {
                // Extract Data
                const title = item.querySelector('h3').innerText;
                const date = item.querySelector('p').innerText;
                const category = item.getAttribute('data-category');
                const description = item.getAttribute('data-description');
                const color = item.querySelector('.image-placeholder-small').style.backgroundColor;
                const iconClass = item.querySelector('.image-placeholder-small i').className;

                // Populate Modal
                modalTitle.innerText = title;
                modalDate.innerText = date;
                modalCategory.innerText = category;
                modalDescription.innerText = description;

                // Style Modal Image Area
                modalImagePlaceholder.style.backgroundColor = color;
                modalIcon.className = iconClass;

                // Show Modal
                modal.style.display = 'flex';
                // Small delay to allow display:flex to apply before adding opacity for transition
                setTimeout(() => {
                    modal.classList.add('active');
                }, 10);
                document.body.style.overflow = 'hidden'; // Prevent background scrolling
            });
        });

        const closeModal = () => {
            modal.classList.remove('active');
            setTimeout(() => {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }, 300); // Match CSS transition duration
        };

        if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);

        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });
    }

    // Filter Functionality
    const filterBtns = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    if (filterBtns.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove active class from all
                filterBtns.forEach(b => b.classList.remove('active'));
                // Add to clicked
                btn.classList.add('active');

                const filterValue = btn.getAttribute('data-filter');

                galleryItems.forEach(item => {
                    const category = item.getAttribute('data-category');

                    if (filterValue === 'all' || category === filterValue) {
                        item.style.display = 'block';
                        // Trigger reflow to restart animation if needed, or just let it be
                        item.classList.add('fade-in');
                        item.classList.add('visible');
                    } else {
                        item.style.display = 'none';
                        item.classList.remove('visible');
                    }
                });
            });
        });
    }

    // Auto Increment Counter Animation for Impact Statistics Section
    const counterElements = document.querySelectorAll('.stat-number[data-target]');
    if (counterElements.length > 0) {
        const animateCount = (el) => {
            if (el.classList.contains('counted')) return;
            el.classList.add('counted');

            const target = parseInt(el.getAttribute('data-target'), 10);
            const suffix = el.getAttribute('data-suffix') || '';
            const prefix = el.getAttribute('data-prefix') || '';
            const duration = 2000; // 2 seconds
            const startTime = performance.now();

            const formatNumber = (num) => {
                return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
            };

            const updateCount = (currentTime) => {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                
                // Ease-out cubic formula for smooth decelerating animation
                const easeOutProgress = 1 - Math.pow(1 - progress, 3);
                const currentVal = Math.floor(easeOutProgress * target);

                el.textContent = prefix + formatNumber(currentVal) + suffix;

                if (progress < 1) {
                    requestAnimationFrame(updateCount);
                } else {
                    el.textContent = prefix + formatNumber(target) + suffix;
                }
            };

            requestAnimationFrame(updateCount);
        };

        const counterObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const counters = entry.target.querySelectorAll('.stat-number[data-target]');
                    counters.forEach(animateCount);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });

        const impactSection = document.querySelector('#impact') || document.querySelector('.impact-subsection') || document.querySelector('.impact-section');
        if (impactSection) {
            counterObserver.observe(impactSection);
        }
    }
});

