document.addEventListener("DOMContentLoaded", () => {

    /* ---------------------------------------------------
       1. EFFET MACHINE A ECRIRE (Sous-titre)
    --------------------------------------------------- */
    const subtitleText = "Étudiant en Informatique | Futur Dév Fullstack";
    const typingElement = document.getElementById('typing-text');
    let charIndex = 0;

    function typeWriter() {
        if (typingElement && charIndex < subtitleText.length) {
            typingElement.textContent += subtitleText.charAt(charIndex);
            charIndex++;
            setTimeout(typeWriter, 40);
        }
    }
    typeWriter();


    /* ---------------------------------------------------
       2. NAVIGATION AUTO (Active Link) - CORRIGÉ
    --------------------------------------------------- */

    const path = window.location.pathname;
    let pageName = path.split("/").pop().replace('.html', '');

    // Si vide, c'est index
    if (pageName === "" || pageName === "/") pageName = "index";

    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.classList.remove('active');

        const linkHref = link.getAttribute('href');
        const linkTarget = linkHref.split("/").pop().replace('.html', '');

        if (linkTarget === pageName) {
            link.classList.add('active');
        }
    });


    /* ---------------------------------------------------
       3. THEME SWITCHER (Cyberpunk <-> NieR)
    --------------------------------------------------- */
    const themeBtn = document.getElementById('theme-toggle');
    const body = document.body;

    // A. Gestion du clic
    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            body.classList.toggle('nier-mode');

            if (body.classList.contains('nier-mode')) {
                themeBtn.textContent = "[ OS: YoRHa ]";
                localStorage.setItem('theme', 'nier');
                console.log("System: YoRHa units connected.");
            } else {
                themeBtn.textContent = "[ OS: ARASAKA ]";
                localStorage.setItem('theme', 'cyberpunk');
                console.log("System: Arasaka protocol restored.");
            }
        });
    }


    /* ---------------------------------------------------
       4. EFFET GLITCH ALEATOIRE (Titre H1)
    --------------------------------------------------- */
    const title = document.querySelector('h1');

    if (title) {
        // Variables CSS pour le glitch, utilisées ici en fallback
        const cyberpunkRed = getComputedStyle(document.documentElement).getPropertyValue('--cp-red') || '#ff003c';
        const cyberpunkBlue = getComputedStyle(document.documentElement).getPropertyValue('--cp-blue') || '#00f0ff';

        setInterval(() => {
            if(!body.classList.contains('nier-mode') && Math.random() > 0.95) {

                title.style.textShadow = `4px 0 ${cyberpunkRed}, -4px 0 ${cyberpunkBlue}`;
                title.style.transform = "skewX(-10deg)";

                setTimeout(() => {
                    // Revient au CSS natif (qui gère déjà l'ombre du titre)
                    title.style.textShadow = "";
                    title.style.transform = "none";
                }, 100);
            }
        }, 1000);
    }

    console.log("%c SYSTEM READY ", "background: #000; color: #00f0ff; font-size: 15px; border: 1px solid #00f0ff; padding: 5px;");
});