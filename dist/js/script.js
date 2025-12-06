document.addEventListener("DOMContentLoaded", () => {
    /* =============================================================================
       0. DICTIONNAIRE DE DONNÉES (TEXTES & LORE)
    ============================================================================= */
    const translations = {
        'cyberpunk': {
            // --- STATUS BAR ---
            'net-status': 'NET-STATUS: <span class="blink">ONLINE</span>',

            // --- NAVIGATION ---
            'nav-home': '01 // SYSTEM_HOME',
            'nav-cursus': '02 // LIFE PATH',
            'nav-exp': '03 // MISSIONS_LOG',
            'nav-portfolio': '04 // SHARDS',

            // --- SIDEBAR ---
            'contact-title': '// DATA_LINK',
            'contact-loc': '[LOC]',
            'contact-com': '[COM]',
            'contact-git': '[GIT]',
            'contact-tel': '[TEL]',

            // --- INDEX (ACCUEIL) ---
            'welcome-title': '// WELCOME_PROTOCOL',
            'welcome-sub': '> Initializing user profile...',
            'last-mission-title': 'LAST MISSION',
            'current-project-title': 'CURRENT PROJECT',
            'status-onGoing': 'Status: Executing...',
            'status-workingOnIt': 'Status: Compiling...',

            // --- CURSUS ---
            'education-title': '// EDUCATION_DATABANK',
            'education-sub': 'Extraction of academic data and certifications...',
            'option-span': '[OPTN]',
            'bullet': '> ',

            // --- EXPERIENCE ---
            'exp-title': '// SYSTEM_BOOT_LOGS',
            'exp-sub': '> Initializing Career Protocol...',
            'exp-awaiting-title': '// AWAITING_FIRST_CONTRACT',
            'exp-awaiting-text': 'Le matériel est prêt. Le logiciel est à jour.<br>En attente d\'une opportunité pour exécuter le code en production.',

            // --- PORTFOLIO ---
            'portfolio-title': '// COMPILED_PROJECTS',
            'access-code': '> ACCESS CODE',

            // --- FOOTER ---
            'footer-text': 'END OF LINE_'
        },
        'nier': {
            // --- STATUS BAR ---
            'net-status': 'Bunker Server: <span class="blink">CONNECTED</span>',

            // --- NAVIGATION ---
            'nav-home': 'I. Origin',
            'nav-cursus': 'II. Unit Data',
            'nav-exp': 'III. Chronicles',
            'nav-portfolio': 'IV. Archives',

            // --- SIDEBAR ---
            'contact-title': 'Correspondence',
            'contact-loc': 'Region',
            'contact-com': 'Letter.',
            'contact-git': 'Library',
            'contact-tel': 'Voice',

            // --- INDEX (ACCUEIL) ---
            'welcome-title': 'ECHOES OF HUMANITY',
            'welcome-sub': 'Commencing Log Decryption...',
            'last-mission-title': 'Previous Tale',
            'current-project-title': 'Current Journey',
            'status-onGoing': 'Story: Unfolding...',
            'status-workingOnIt': 'Story: Writing...',

            // --- CURSUS ---
            'education-title': 'Memory Fragments',
            'education-sub': 'Retracing the path traveled...',
            'option-span': 'Optn.',
            'bullet': ' ',

            // --- EXPERIENCE ---
            'exp-title': 'Service Records',
            'exp-sub': 'Accessing timeline data...',
            'exp-awaiting-title': 'Assignment: Pending',
            'exp-awaiting-text': 'Ce corps a fini d\'apprendre. Il est temps de changer de forme.<br>En quête d\'une nouvelle porte à ouvrir pour débuter la prochaine existence.',

            // --- PORTFOLIO ---
            'portfolio-title': 'Archives',
            'access-code': '• Examine',

            // --- FOOTER ---
            'footer-text': 'End of Report'
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
            const elements = document.querySelectorAll(`[data-id="${key}"]`);

            elements.forEach(element => {
                element.innerHTML = value;
                if (element.classList.contains('glitch')) {
                    element.setAttribute('data-text', element.innerText);
                }
            });
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

    //"Étudiant en Informatique | Futur Dév Back-End"
    const subtitles = {
        'cyberpunk': "Netrunner Initiate | Daemon Architect",
        'nier': "Unité en apprentissage | Architecte de l'Invisible"
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
                const randomSpeed = Math.random() * (100 - 30) + 10;
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