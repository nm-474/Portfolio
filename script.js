const hamburger = document.querySelector('.hamburger');
        const navLinks = document.querySelector('.nav-links');

        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.innerHTML = navLinks.classList.contains('active') 
                ? '<i class="fas fa-times"></i>' 
                : '<i class="fas fa-bars"></i>';
        });

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                navLinks.classList.remove('active');
                hamburger.innerHTML = '<i class="fas fa-bars"></i>';
                
                const target = document.querySelector(this.getAttribute('href'));
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            });
        });

        // Header scroll effect
        window.addEventListener('scroll', () => {
            const header = document.querySelector('header');
            if (window.scrollY > 50) {
                header.style.background = 'rgba(255, 255, 255, 0.95)';
                header.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
            } else {
                header.style.background = 'rgba(255, 255, 255, 0.9)';
                header.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
            }
        });

        // Form submission
        const contactForm = document.getElementById('contactForm');
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! I will get back to you soon.');
            contactForm.reset();
        });

        // Scroll animation for project cards
        function animateOnScroll() {
            const projectCards = document.querySelectorAll('.project-card');
            projectCards.forEach(card => {
                const cardPosition = card.getBoundingClientRect().top;
                const screenPosition = window.innerHeight / 1.3;

                if (cardPosition < screenPosition) {
                    card.classList.add('animate');
                }
            });
        }

        window.addEventListener('scroll', animateOnScroll);
        window.addEventListener('load', animateOnScroll);

        // Typewriter effect for hero text (optional)
        const typeWriter = (element, text, speed = 100) => {
            let i = 0;
            const interval = setInterval(() => {
                if (i < text.length) {
                    element.innerHTML += text.charAt(i);
                    i++;
                } else {
                    clearInterval(interval);
                }
            }, speed);
        };

        // Uncomment if you want to use typewriter effect
        // window.addEventListener('load', () => {
        //     const heroTitle = document.querySelector('.hero-text h1');
        //     const originalText = heroTitle.textContent;
        //     heroTitle.textContent = '';
        //     typeWriter(heroTitle, originalText);
        // });

        const roles = ["Frontend Developer", "Programmer", "Graphic Designer","Web Developer","Music Director"];
        const typingElement = document.getElementById("typing-text");
        let roleIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        function type() {
        const currentRole = roles[roleIndex];
        const displayedText = isDeleting
          ? currentRole.substring(0, charIndex--)
          : currentRole.substring(0, charIndex++);

        typingElement.textContent = displayedText;

        if (!isDeleting && charIndex === currentRole.length) {
          setTimeout(() => (isDeleting = true), 1500);
        } else if (isDeleting && charIndex === 0) {
          isDeleting = false;
          roleIndex = (roleIndex + 1) % roles.length;
        }

        const speed = isDeleting ? 50 : 100;
        setTimeout(type, speed);
        } 

        document.addEventListener("DOMContentLoaded", type);