// Animation effects for the website
document.addEventListener('DOMContentLoaded', function() {
    // Animate boxes on scroll
    const animateOnScroll = function() {
        const boxes = document.querySelectorAll('.box, .team-member');
        const windowHeight = window.innerHeight;
        
        boxes.forEach(box => {
            const boxPosition = box.getBoundingClientRect().top;
            const scrollPosition = window.scrollY;
            
            if (boxPosition < windowHeight - 100) {
                box.classList.add('animated');
            }
        });
    };
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on load
    
    // Parallax effect for showcase
    window.addEventListener('scroll', function() {
        const showcase = document.getElementById('showcase');
        if (showcase) {
            const scrollPosition = window.scrollY;
            showcase.style.backgroundPositionY = -scrollPosition * 0.5 + 'px';
        }
    });
});