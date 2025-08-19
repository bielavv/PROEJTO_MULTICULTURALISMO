// script.js
// Menu mobile
document.querySelector('.mobile-menu-btn').addEventListener('click', function() {
    const menu = document.querySelector('nav ul');
    menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
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

// Validar formulário de contato
document.querySelector('.contact-form form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Validação básica
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const oficina = document.getElementById('oficina').value;
    
    if (!nome || !email || !oficina) {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return;
    }
    
    // Simulação de envio
    alert('Inscrição enviada com sucesso! Entraremos em contato em breve.');
    this.reset();
});