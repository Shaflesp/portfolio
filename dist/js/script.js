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

    // Récupère le nom du fichier actuel (plus sûr pour les tests locaux)
    let currentPage = window.location.pathname.split("/").pop();

    // Si la chaîne est vide (ex: ouverture dossier racine), on force index.html
    if (currentPage === "") currentPage = "index.html";

    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        // Nettoyage préventif
        link.classList.remove('active');

        // Si le href du lien correspond à la page actuelle, on l'active
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
            console.log(`[NAV] Page active détectée : ${currentPage}`);
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