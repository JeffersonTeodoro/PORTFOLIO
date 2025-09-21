document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll('section');
    const header = document.querySelector('header');
    const floatingButtons = document.querySelectorAll('.floating-btn');
    const heroButton = document.querySelector('.btn-hero');

    function animateSections() {
        const triggerBottom = window.innerHeight * 0.85;
        sections.forEach(section => {
            const top = section.getBoundingClientRect().top;
            if(top < triggerBottom){
                section.classList.add('visible');
            }
        });
        if(window.scrollY > 50){
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', animateSections);
    animateSections();

    heroButton.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(heroButton.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });

    floatingButtons.forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            btn.style.transform = 'translateY(-5px)';
            btn.style.boxShadow = '0 5px 15px rgba(0,0,0,0.3)';
        });
        btn.addEventListener('mouseleave', () => {
            btn.style.transform = 'translateY(0)';
            btn.style.boxShadow = '0 0 0 rgba(0,0,0,0)';
        });
    });
});
