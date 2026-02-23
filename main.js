document.addEventListener('DOMContentLoaded', () => {
    // Reveal animations on scroll
    const revealElements = document.querySelectorAll('.reveal');
    
    const reveal = () => {
        const triggerBottom = window.innerHeight * 0.85;
        
        revealElements.forEach(el => {
            const elTop = el.getBoundingClientRect().top;
            
            if (elTop < triggerBottom) {
                el.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', reveal);
    reveal(); // Initial check

    // Smooth scrolling for nav links
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetContent = document.querySelector(targetId);
            
            if (targetContent) {
                window.scrollTo({
                    top: targetContent.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Subtle parallax effect for hero dots (optional but cool)
    window.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;
        
        const hero = document.querySelector('.hero');
        // We could move the pseudo element but it's hard to target via JS
        // Instead let's just leave it for now or add a dedicated background-layer
    });
});
