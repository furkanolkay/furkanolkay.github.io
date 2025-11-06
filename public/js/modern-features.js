// Real Apple Liquid Glass Modern Features

document.addEventListener('DOMContentLoaded', () => {
    // Liquid smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Liquid glass header scroll effect
    const header = document.querySelector('.header');
    if (header) {
        let lastScrollY = window.scrollY;
        
        window.addEventListener('scroll', () => {
            const currentScrollY = window.scrollY;
            
            if (currentScrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
            
            // Liquid hide/show header animation
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                header.style.transform = 'translateY(-100%)';
                header.style.opacity = '0.8';
            } else {
                header.style.transform = 'translateY(0)';
                header.style.opacity = '1';
            }
            
            lastScrollY = currentScrollY;
        });
    }

    // Liquid glass theme toggle
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        const currentTheme = localStorage.getItem('theme') || 
            (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
        
        if (currentTheme === 'dark') {
            document.body.classList.add('dark');
            themeToggle.innerHTML = '☀️';
        } else {
            document.body.classList.remove('dark');
            themeToggle.innerHTML = '🌙';
        }

        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark');
            let theme = 'light';
            if (document.body.classList.contains('dark')) {
                theme = 'dark';
                themeToggle.innerHTML = '☀️';
            } else {
                themeToggle.innerHTML = '🌙';
            }
            localStorage.setItem('theme', theme);
            
            // Liquid ripple effect
            createLiquidRipple(themeToggle);
        });
    }

    // Liquid glass scroll to top button
    const scrollTopButton = document.createElement('button');
    scrollTopButton.id = 'scroll-to-top';
    scrollTopButton.innerHTML = '↑';
    scrollTopButton.setAttribute('aria-label', 'Scroll to top');
    document.body.appendChild(scrollTopButton);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 200) {
            scrollTopButton.style.display = 'flex';
            scrollTopButton.style.opacity = '1';
            scrollTopButton.style.transform = 'scale(1)';
        } else {
            scrollTopButton.style.opacity = '0';
            scrollTopButton.style.transform = 'scale(0.8)';
            setTimeout(() => {
                if (window.scrollY <= 200) {
                    scrollTopButton.style.display = 'none';
                }
            }, 300);
        }
    });

    scrollTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        createLiquidRipple(scrollTopButton);
    });

    // Liquid glass hover effects for cards
    const cards = document.querySelectorAll('.post-entry, .first-entry, .skill-item');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-12px) scale(1.03)';
            card.style.boxShadow = '0 32px 128px rgba(0, 0, 0, 0.25)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
            card.style.boxShadow = '0 16px 64px rgba(0, 0, 0, 0.2)';
        });
    });

    // Liquid parallax effect for hero section
    const heroSection = document.querySelector('.hero-section');
    if (heroSection) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.3;
            heroSection.style.transform = `translateY(${rate}px)`;
        });
    }

    // Liquid animation for buttons
    const buttons = document.querySelectorAll('.btn, .button');
    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            createLiquidRipple(button);
        });
        
        button.addEventListener('mouseenter', () => {
            button.style.transform = 'translateY(-4px) scale(1.05)';
        });
        
        button.addEventListener('mouseleave', () => {
            button.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Liquid intersection observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0) scale(1)';
                entry.target.style.filter = 'blur(0px)';
            }
        });
    }, observerOptions);

    // Observe elements for liquid animation
    const animatedElements = document.querySelectorAll('.post-entry, .skill-item, .about-content');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(50px) scale(0.9)';
        el.style.filter = 'blur(10px)';
        el.style.transition = 'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1), filter 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
        observer.observe(el);
    });

    // Liquid glass morphism effect for images
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('mouseenter', () => {
            img.style.filter = 'brightness(1.1) saturate(1.2) contrast(1.1)';
            img.style.transform = 'scale(1.05) rotate(3deg)';
        });
        
        img.addEventListener('mouseleave', () => {
            img.style.filter = 'brightness(1) saturate(1) contrast(1)';
            img.style.transform = 'scale(1) rotate(0deg)';
        });
    });

    // Liquid flow animation for text
    const textElements = document.querySelectorAll('h1, h2');
    textElements.forEach(text => {
        text.addEventListener('mouseenter', () => {
            text.style.backgroundSize = '200% 200%';
            text.style.animation = 'liquidText 2s ease-in-out infinite';
        });
        
        text.addEventListener('mouseleave', () => {
            text.style.animation = 'liquidText 8s ease-in-out infinite';
        });
    });

    // Liquid glass navigation
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            link.style.background = 'rgba(255, 255, 255, 0.1)';
            link.style.backdropFilter = 'blur(16px)';
            link.style.transform = 'translateY(-2px)';
            link.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.15)';
        });
        
        link.addEventListener('mouseleave', () => {
            link.style.background = 'transparent';
            link.style.backdropFilter = 'none';
            link.style.transform = 'translateY(0)';
            link.style.boxShadow = 'none';
        });
    });

    // Liquid page transitions
    const pageLinks = document.querySelectorAll('a[href^="/"], a[href^="./"]');
    pageLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            if (link.hostname === window.location.hostname) {
                e.preventDefault();
                document.body.style.opacity = '0';
                document.body.style.transform = 'scale(0.95)';
                document.body.style.filter = 'blur(10px)';
                
                setTimeout(() => {
                    window.location.href = link.href;
                }, 400);
            }
        });
    });

    // Liquid floating elements
    createFloatingElements();
});

// Liquid ripple effect function
function createLiquidRipple(element) {
    const ripple = document.createElement('span');
    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height) * 2;
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.classList.add('liquid-ripple');
    
    element.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 800);
}

// Create floating liquid elements
function createFloatingElements() {
    const floatingContainer = document.createElement('div');
    floatingContainer.className = 'floating-elements';
    floatingContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 1;
        overflow: hidden;
    `;
    document.body.appendChild(floatingContainer);

    for (let i = 0; i < 6; i++) {
        const element = document.createElement('div');
        element.className = 'floating-element';
        element.style.cssText = `
            position: absolute;
            width: ${Math.random() * 100 + 50}px;
            height: ${Math.random() * 100 + 50}px;
            background: linear-gradient(135deg, rgba(0, 122, 255, 0.1), rgba(88, 86, 214, 0.1));
            border-radius: 50%;
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.1);
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: liquidFloat ${Math.random() * 20 + 10}s ease-in-out infinite;
            animation-delay: ${Math.random() * 5}s;
        `;
        floatingContainer.appendChild(element);
    }
}


// Add liquid styles
const liquidStyles = document.createElement('style');
liquidStyles.textContent = `
    .liquid-ripple {
        position: absolute;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(0, 122, 255, 0.3) 0%, transparent 70%);
        transform: scale(0);
        animation: liquid-ripple-animation 0.8s linear;
        pointer-events: none;
    }
    
    @keyframes liquid-ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    @keyframes liquidFloat {
        0%, 100% { 
            transform: translateY(0px) translateX(0px) rotate(0deg); 
        }
        25% { 
            transform: translateY(-20px) translateX(10px) rotate(90deg); 
        }
        50% { 
            transform: translateY(10px) translateX(-10px) rotate(180deg); 
        }
        75% { 
            transform: translateY(-10px) translateX(5px) rotate(270deg); 
        }
    }
    
    .floating-elements {
        animation: liquidFloat 30s ease-in-out infinite;
    }
`;
document.head.appendChild(liquidStyles);