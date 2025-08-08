



// Initialize animations and interactions
        document.addEventListener('DOMContentLoaded', function() {
            createCodeRain();
            createParticles();
            initNavigation();
            initScrollEffects();
        });

        // Code Rain Animation
        function createCodeRain() {
            const codeRain = document.getElementById('codeRain');
            const codeSnippets = [
                'const portfolio = () => {',
                'function animate() {',
                'if (skills.length > 0) {',
                'return <Component />',
                'npm install awesome',
                'git commit -m "magic"',
                'console.log("Hello World");',
                'async function fetch() {',
                'import React from "react";',
                'export default App;',
                'margin: 0 auto;',
                'background: gradient();',
                'animation: fadeIn 1s;',
                'transition: all 0.3s;',
                'z-index: 1000;',
                'position: absolute;'
            ];

            setInterval(() => {
                const codeLine = document.createElement('div');
                codeLine.className = 'code-line';
                codeLine.textContent = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
                codeLine.style.left = Math.random() * 100 + '%';
                codeLine.style.animationDuration = (Math.random() * 3 + 2) + 's';
                codeLine.style.fontSize = (Math.random() * 8 + 10) + 'px';
                codeRain.appendChild(codeLine);

                setTimeout(() => {
                    if (codeLine.parentNode) {
                        codeLine.parentNode.removeChild(codeLine);
                    }
                }, 5000);
            }, 200);
        }

        // Floating Particles
        function createParticles() {
            const particles = document.getElementById('particles');
            
            for (let i = 0; i < 50; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                particle.style.left = Math.random() * 100 + '%';
                particle.style.top = Math.random() * 100 + '%';
                particle.style.width = Math.random() * 4 + 2 + 'px';
                particle.style.height = particle.style.width;
                particle.style.animationDuration = (Math.random() * 3 + 2) + 's';
                particle.style.animationDelay = Math.random() * 2 + 's';
                particle.style.opacity = Math.random() * 0.5 + 0.1;
                particles.appendChild(particle);
            }
        }

        // Navigation
        function initNavigation() {
            const navItems = document.querySelectorAll('.nav-item');
            
            navItems.forEach(item => {
                item.addEventListener('click', () => {
                    const section = item.getAttribute('data-section');
                    scrollToSection(section);
                });
            });
        }

        function scrollToSection(sectionId) {
            const section = document.getElementById(sectionId);
            section.scrollIntoView({ behavior: 'smooth' });
        }

        // Scroll Effects
        function initScrollEffects() {
            const sections = document.querySelectorAll('.section');
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                    }
                });
            }, { threshold: 0.3 });

            sections.forEach(section => {
                observer.observe(section);
            });
        }

        // Form submission
        document.querySelector('.contact-form').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! I\'ll get back to you soon.');
            this.reset();
        });

        // Add 3D tilt effect to cards
        document.querySelectorAll('.skill-card, .project-card').forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = (y - centerY) / 10;
                const rotateY = (centerX - x) / 10;
                
                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
            });
        });