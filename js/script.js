document.addEventListener("DOMContentLoaded", function () {

    /*--------------------------------------------------------------
    # Lógica do Menu Hambúrguer
    --------------------------------------------------------------*/
    const menuButton = document.querySelector('.menu');
    const navContainer = document.querySelector('.nav');

    if (menuButton && navContainer) {
        menuButton.addEventListener('click', () => {
            navContainer.classList.toggle('active');
        });
    }

    /*--------------------------------------------------------------
    # Lógica para Alternância de Tema (Dark/Light Mode)
    --------------------------------------------------------------*/
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Função para aplicar o tema com base no localStorage ou preferência do sistema
    const applyTheme = (theme) => {
        if (theme === 'dark') {
            body.classList.add('dark-mode');
            themeToggle.textContent = '☀️';
        } else {
            body.classList.remove('dark-mode');
            themeToggle.textContent = '🌑';
        }
    };

    // Verifica a preferência salva no carregamento da página
    const savedTheme = localStorage.getItem('theme');
    applyTheme(savedTheme);
    
    // Lógica do clique no botão de tema
    themeToggle.addEventListener('click', () => {
        const isDarkMode = body.classList.toggle('dark-mode');
        const newTheme = isDarkMode ? 'dark' : 'light';
        localStorage.setItem('theme', newTheme);
        applyTheme(newTheme);
    });

    /*--------------------------------------------------------------
    # Animações com ScrollReveal.js
    --------------------------------------------------------------*/
    const sr = ScrollReveal({
        distance: '60px',
        duration: 2000,
        delay: 300,
        // reset: true // Descomente para que as animações reiniciem
    });

    sr.reveal('#home-page .text-content, #home-page .content img', { origin: 'top', interval: 200 });
    sr.reveal('#about-us .about', { origin: 'left' });
    sr.reveal('.item', { origin: 'bottom', interval: 200 });
    sr.reveal('#contato .contact', { origin: 'right' });
    
    /*--------------------------------------------------------------
    # Simulação de Compra de Planos
    --------------------------------------------------------------*/
    function comprar(plano, valor) {
        alert(`Você adquiriu o plano ${plano} por ${valor}.`);
    }

    document.querySelector("#produto1").addEventListener("click", () => comprar("Básico", "R$50/mês"));
    document.querySelector("#produto2").addEventListener("click", () => comprar("Avançado", "R$90/mês"));
    document.querySelector("#produto3").addEventListener("click", () => comprar("Premium", "R$150/mês"));
});