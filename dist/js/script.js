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

/* ---------------------------------------------------
       2. NAVIGATION AUTO (Active Link) - CORRIGE POUR SERVEUR
    --------------------------------------------------- */

    // 1. Récupère le nom du chemin et le nettoie
    let urlPath = window.location.pathname.split("/").pop();

    // Retire l'extension .html (si elle est présente)
    let currentPageName = urlPath.replace('.html', '');

    // Si le chemin est vide (racine, ex: https://monsite.com/), on le force à 'index'
    if (currentPageName === "") {
        currentPageName = "index";
    }

    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        // Nettoyage préventif
        link.classList.remove('active');

        // 2. Récupère le nom du fichier depuis le href du lien (ex: 'cursus.html')
        const linkHref = link.getAttribute('href');

        // Retire l'extension .html du lien pour la comparaison (ex: 'cursus')
        const linkName = linkHref.replace('.html', '');

        // 3. Comparaison : 'cursus' (URL) === 'cursus' (Lien)
        if (linkName === currentPageName) {
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