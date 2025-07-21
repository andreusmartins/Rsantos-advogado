document.addEventListener('DOMContentLoaded', function() {
    // =====================
    // HEADER SCROLL
    // =====================
    window.addEventListener('scroll', function() {
        const header = document.getElementById('header');
        if(window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // =====================
    // SCROLL SUAVE
    // =====================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            // Fechar menu mobile quando um link é clicado
            const navbarCollapse = document.querySelector('.navbar-collapse');
            if (navbarCollapse.classList.contains('show')) {
                const bsCollapse = new bootstrap.Collapse(navbarCollapse);
                bsCollapse.hide();
            }
            
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if(targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // =====================
    // WHATSAPP
    // =====================
    const whatsappBtn = document.getElementById('whatsappBtn');
    
    if(whatsappBtn) {
        whatsappBtn.addEventListener('click', function(e) {
            // Dispositivos móveis - tentar abrir app diretamente
            if(window.innerWidth <= 768) {
                const phone = '5511963811203';
                const text = encodeURIComponent('Olá, gostaria de proteger meu imóvel contra leilão');
                window.location.href = `whatsapp://send?phone=${phone}&text=${text}`;
                e.preventDefault();
                
                // Fallback caso o link direto falhe
                setTimeout(() => {
                    if(!document.hidden) {
                        window.open(`https://wa.me/${phone}?text=${text}`, '_blank');
                    }
                }, 500);
            }
            
            // Trackeamento para Google Ads (substitua pelo seu ID)
            if(typeof gtag !== 'undefined') {
                gtag('event', 'conversion', {
                    'send_to': 'AW-SEU_ID_AQUI/SEU_LABEL_AQUI',
                    'value': 1.0,
                    'currency': 'BRL'
                });
            }
        });
    }
});