document.addEventListener("DOMContentLoaded", () => {
    /* =============================================================================
       0. DICTIONNAIRE DE DONNÉES (TEXTES & LORE)
    ============================================================================= */
    const translations = {
        'cyberpunk': {
            // --- HEADER & NAVIGATION ---
            'nav-home': '01 // ACCUEIL',
            'nav-cursus': '02 // CURSUS',
            'nav-xp': '03 // EXPÉRIENCE',
            'nav-portfolio': '04 // RÉALISATIONS',
            
            // --- STATUS BAR (Haut de page) ---
            'net-status': 'NET-STATUS: <span class="blink">ONLINE</span>',
            
            // --- ACCUEIL (HOME) ---
            'job-title': 'NETRUNNER // FULLSTACK_DEV',
            'intro-text': '// INITIALIZING USER PROFILE... <br> Connexion établie. Chargement des modules de compétence.',
            
            // --- CURSUS ---
            'cursus-title': '// EDUCATION_DATABANK',
            'cursus-intro': 'Extraction des données académiques.',
            'diploma-but': 'BUT INFORMATIQUE',
            'desc-but': '> Spécialisation : Développement logiciel & Architecture.',
            'diploma-bac': 'BACCALAURÉAT GENERAL',
            'desc-bac': '> Option NSI & Mathématiques. Mention Bien.',
            'diploma-brevet': 'BREVET DES COLLÈGES',

            // --- FOOTER ---
            'footer-text': 'END OF LINE_'
        },

        'nier': {
            // --- HEADER & NAVIGATION ---
            'nav-home': '<span class="angelic-icon">A</span> Rapport : Accueil',
            'nav-cursus': '<span class="angelic-icon">B</span> Chapitre 1 : Apprentissage',
            'nav-xp': '<span class="angelic-icon">C</span> Registre des Missions',
            'nav-portfolio': '<span class="angelic-icon">D</span> Armement & Créations',

            // --- STATUS BAR ---
            'net-status': 'YoRHa Unit: <span class="blink">ACTIVE</span>',

            // --- ACCUEIL (HOME) ---
            'job-title': 'Unité de Développement <span class="angelic-icon">z</span> Type S',
            'intro-text': 'Chargement des données de l\'humanité... <br> « Tout ce qui vit est conçu pour finir. »',

            // --- CURSUS ---
            'cursus-title': '<span class="angelic-icon">m</span> Chapitre 1 : Apprentissage',
            'cursus-intro': 'Analyse des archives mémorielles du sujet.',
            
            // On garde le nom du diplôme lisible, mais la description est "Roleplay"
            'diploma-but': 'Certification : BUT Informatique',
            'desc-but': 'Acquisition des langages de l\'Ancien Monde (Java, SQL) pour la préservation des données.',
            'diploma-bac': 'Certificat de Majorité',
            'desc-bac': 'Preuve de capacité logique et mathématique.',
            'diploma-brevet': 'Initialisation du Cycle',

            // --- FOOTER ---
            'footer-text': 'Glory to Mankind.'
        }
    }

    /**
     * Fonction qui met à jour le texte de la page en fonction du mode
     * @param {string} mode - 'cyberpunk' ou 'nier'
     */
    function updateText(mode) {
        const currentData = translations[mode];
        if (!currentData) return;

        for (const [key, value] of Object.entries(currentData)) {
            const element = document.querySelector(`[data-id="${key}"]`);
            if (element) {
                element.innerHTML = value;
                if (element.classList.contains('glitch')) {
                    element.setAttribute('data-text', element.innerText);
                }
            }
        }
        if (mode === 'nier') {
            const titles = document.querySelectorAll('h2');
                titles.forEach(h2 => {
                    let text = h2.innerText;
                    let cleanText = text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
                h2.setAttribute('data-angelic', cleanText);
            });
        } else {
            document.querySelectorAll('h2').forEach(h2 => h2.setAttribute('data-angelic', ''));
        }
    }

    /* ---------------------------------------------------
       1. EFFET MACHINE A ECRIRE
    --------------------------------------------------- */
const typingElement = document.getElementById('typing-text');

    const subtitles = {
        'cyberpunk': "Étudiant en Informatique | Futur Dév Back-End",
        'nier': "« L'âme réside dans le code. »"
    };
    let typingTimeout;

    function startTypewriter(text) {
        if (typingTimeout) clearTimeout(typingTimeout);
        if (typingElement) typingElement.textContent = "";

        let charIndex = 0;
        function type() {
            if (charIndex < text.length) {
                typingElement.textContent += text.charAt(charIndex);
                charIndex++;
                const randomSpeed = Math.random() * (100 - 30) + 40;
                typingTimeout = setTimeout(type, randomSpeed);
            }
        }

        type();
    }
    const initTheme = localStorage.getItem('theme') || 'cyberpunk';
    startTypewriter(subtitles[initTheme]);


    /* ---------------------------------------------------
       2. NAVIGATION AUTO (Active Link) - CORRIGÉ
    --------------------------------------------------- */

    const path = window.location.pathname;
    let pageName = path.split("/").pop().replace('.html', '');

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
    const themeLink = document.getElementById('theme-css');

    function switchTheme(newTheme) {
        if (newTheme === 'nier') {
            themeLink.href = 'css/nier.css';
            themeBtn.textContent = "[ OS: YoRHa ]";
            updateText('nier');
            startTypewriter(subtitles['nier']);
            console.log("System: YoRHa units connected.");
        } else {
            themeLink.href = 'css/cyberpunk.css';
            themeBtn.textContent = "[ OS: ARASAKA ]";
            updateText('cyberpunk');
            startTypewriter(subtitles['cyberpunk']);
            console.log("System: Arasaka protocol restored.");
        }
        document.querySelectorAll('[data-theme]').forEach(el => {
            el.style.display = el.dataset.theme === newTheme ? '' : 'none';
        });
        localStorage.setItem('theme', newTheme);
    }
    switchTheme(initTheme);

    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            const currentTheme = localStorage.getItem('theme') || 'cyberpunk';
            const newTheme = currentTheme === 'cyberpunk' ? 'nier' : 'cyberpunk';
            switchTheme(newTheme);
        });
    }

    /* ---------------------------------------------------
       4. EFFET GLITCH ALEATOIRE (Titre H1)
    --------------------------------------------------- */
    const title = document.querySelector('h1');

    if (title) {
        const cyberpunkRed = getComputedStyle(document.documentElement).getPropertyValue('--cp-red') || '#ff003c';
        const cyberpunkBlue = getComputedStyle(document.documentElement).getPropertyValue('--cp-blue') || '#00f0ff';

        setInterval(() => {
            const currentTheme = localStorage.getItem('theme') || 'cyberpunk';
            if (currentTheme === 'cyberpunk' && Math.random() > 0.95) {

                title.style.textShadow = `4px 0 ${cyberpunkRed}, -4px 0 ${cyberpunkBlue}`;
                title.style.transform = "skewX(-10deg)";

                setTimeout(() => {
                    title.style.textShadow = "";
                    title.style.transform = "none";
                }, 100);
            }
        }, 1000);
    }

    console.log("%c SYSTEM READY ", "background: #000; color: #00f0ff; font-size: 15px; border: 1px solid #00f0ff; padding: 5px;");
});