// Typewriter do Hero
const roles = ['Desenvolvedor Web em ascensão', 'Entusiasta de Front-end', 'Apaixonado por Tecnologia'];
let roleIndex = 0;
let charIndex = 0;
let deleting = false;
const typeEl = document.querySelector('.typewriter');

function type() {
    const current = roles[roleIndex];
    if (!deleting) {
        typeEl.textContent = current.slice(0, ++charIndex);
        if (charIndex === current.length) {
            deleting = true;
            setTimeout(type, 2200);
            return;
        }
    } else {
        typeEl.textContent = current.slice(0, --charIndex);
        if (charIndex === 0) {
            deleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
        }
    }
    setTimeout(type, deleting ? 45 : 85);
}

setTimeout(type, 1200);

// Animação de entrada das seções (executa apenas uma vez)
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.hidden').forEach((el) => observer.observe(el));

// Animação escalonada dos cards internos
const cardObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            cardObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('[data-animate]').forEach((el) => {
    const siblings = [...el.parentElement.querySelectorAll(':scope > [data-animate]')];
    const index = siblings.indexOf(el);
    el.style.transitionDelay = `${index * 0.15}s`;
    cardObserver.observe(el);
});

// Destaque do link ativo na navbar conforme o scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

const navObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        const link = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
        if (!link) return;
        if (entry.isIntersecting) {
            navLinks.forEach((l) => l.classList.remove('active'));
            link.classList.add('active');
        }
    });
}, { rootMargin: '-25% 0px -65% 0px' });

sections.forEach((section) => navObserver.observe(section));

// Registro do Service Worker (PWA)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js');
    });
}
