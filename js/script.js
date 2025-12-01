document.addEventListener("DOMContentLoaded", () => {

    /* ---------------------------------------------------
       1. EFFET MACHINE A ECRIRE (Sous-titre)
    --------------------------------------------------- */
    const subtitleText = "Étudiant en Informatique | Futur Dév Back-End";
    const typingElement = document.getElementById('typing-text');
    let charIndex = 0;

    function typeWriter() {
        // On vérifie que l'élément existe pour éviter les erreurs
        if (typingElement && charIndex < subtitleText.length) {
            typingElement.textContent += subtitleText.charAt(charIndex);
            charIndex++;
            setTimeout(typeWriter, 40); // Vitesse de frappe (ms)
        }
    }

    // Lancer l'effet
    typeWriter();


    /* ---------------------------------------------------
       2. NAVIGATION AUTO (Active Link)
    --------------------------------------------------- */
    // Récupère le nom du fichier actuel (ex: cursus.html)
    let currentPage = window.location.pathname.split("/").pop();

    // Si la chaîne est vide (ex: ouverture dossier racine), on considère que c'est index.html
    if (currentPage === "") currentPage = "index.html";

    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        // Nettoyage préventif
        link.classList.remove('active');

        // Si le href du lien correspond à la page actuelle, on l'active
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });


    /* ---------------------------------------------------
       3. THEME SWITCHER (Cyberpunk <-> NieR)
    --------------------------------------------------- */
    const themeBtn = document.getElementById('theme-toggle');
    const body = document.body;

    // A. Restauration du thème sauvegardé (si l'utilisateur a déjà cliqué avant)
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'nier') {
        body.classList.add('nier-mode');
        if (themeBtn) themeBtn.textContent = "[ OS: YoRHa ]";
    }

    // B. Gestion du clic
    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            body.classList.toggle('nier-mode');

            if (body.classList.contains('nier-mode')) {
                // Passage en mode NieR
                themeBtn.textContent = "[ OS: YoRHa ]";
                localStorage.setItem('theme', 'nier');
                console.log("System: YoRHa units connected.");
            } else {
                // Retour au mode Cyberpunk
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
        setInterval(() => {
            // 5% de chance de glitcher toutes les secondes
            if(Math.random() > 0.95) {
                const originalShadow = title.style.textShadow;

                // Effet visuel agressif temporaire
                title.style.textShadow = "4px 0 var(--cp-red), -4px 0 var(--cp-blue)";
                title.style.transform = "skewX(-10deg)";

                // Retour à la normale très rapide
                setTimeout(() => {
                    title.style.textShadow = ""; // Revient au CSS par défaut
                    title.style.transform = "none";
                }, 100);
            }
        }, 1000);
    }

    // Message console stylé au démarrage
    console.log("%c SYSTEM READY ", "background: #000; color: #00f0ff; font-size: 15px; border: 1px solid #00f0ff; padding: 5px;");
});