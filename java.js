// script.js - VERSÃO CORRIGIDA
document.addEventListener('DOMContentLoaded', function() {
    console.log('Script carregado - menu mobile deve funcionar agora');
    
    // Menu mobile
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('nav ul');
    
    if (mobileMenuBtn && navMenu) {
        // Abrir/fechar menu
        mobileMenuBtn.addEventListener('click', function(event) {
            console.log('Botão de menu clicado');
            navMenu.classList.toggle('show');
            this.classList.toggle('active');
            event.stopPropagation();
        });

        // Fechar menu ao clicar fora
        document.addEventListener('click', function(event) {
            if (navMenu.classList.contains('show') && 
                !navMenu.contains(event.target) && 
                event.target !== mobileMenuBtn) {
                navMenu.classList.remove('show');
                mobileMenuBtn.classList.remove('active');
            }
        });

        // Fechar menu ao clicar em um link
        document.querySelectorAll('nav a').forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('show');
                mobileMenuBtn.classList.remove('active');
            });
        });
    } else {
        console.error('Elementos do menu não encontrados!');
    }

    // Scroll suave (mantido)
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

    // Ativar link ativo no menu (mantido)
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
});