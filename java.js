// script.js
// Menu mobile
document.querySelector('.mobile-menu-btn').addEventListener('click', function() {
    const menu = document.querySelector('nav ul');
    const btn = this;
    
    // Alternar visibilidade do menu
    menu.classList.toggle('show');
    
    // Alternar classe active no botão
    btn.classList.toggle('active');
    
    // Prevenir que o clique se propague
    event.stopPropagation();
});

// Fechar o menu ao clicar fora dele
document.addEventListener('click', function(event) {
    const menu = document.querySelector('nav ul');
    const btn = document.querySelector('.mobile-menu-btn');
    
    if (!menu.contains(event.target) && event.target !== btn) {
        menu.classList.remove('show');
        btn.classList.remove('active');
    }
});

// Feche o menu ao clicar em um link (opcional)
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function() {
        const menu = document.querySelector('nav ul');
        menu.classList.remove('show');
    });
});

// Scroll suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Ativar link ativo no menu
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop - 300) {
            current = section.getAttribute('id') || '';
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href').substring(1);
        if (href === current) {
            link.classList.add('active');
        }
    });
});

