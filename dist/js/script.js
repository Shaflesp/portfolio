//Préchargement
let cssLoaded = { cyberpunk: false, nier: false };
let initStarted = false;

function checkCSSLoaded() {
    const cyberpunkLink = document.getElementById('theme-cyberpunk');
    const nierLink = document.getElementById('theme-nier');
    
    if (cyberpunkLink) {
        cyberpunkLink.onload = () => { 
            cssLoaded.cyberpunk = true;
            tryInit();
        };
    }
    if (nierLink) {
        nierLink.onload = () => { 
            cssLoaded.nier = true;
            tryInit();
        };
    }
    setTimeout(() => {
        if (!initStarted) {
            cssLoaded = { cyberpunk: true, nier: true };
            tryInit();
        }
    }, 100);
}

function tryInit() {
    if (!initStarted && cssLoaded.cyberpunk && cssLoaded.nier) {
        initStarted = true;
        initializeApp();
    }
}

document.addEventListener("DOMContentLoaded", () => {
    checkCSSLoaded();
});

function initializeApp() {
    const initTheme = localStorage.getItem('theme') || 'cyberpunk';
    const themeBtn = document.getElementById('theme-toggle');

    /* =============================================================================
       0. TRANSITIONS ENTRE PAGES
    ============================================================================= */
    const pageOverlay = document.createElement('div');
    pageOverlay.id = 'page-transition-overlay';
    pageOverlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        pointer-events: none;
        transition: opacity 0.4s ease;
        z-index: 99999;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.5rem;
        font-weight: bold;
    `;
    document.body.appendChild(pageOverlay);
    function setupPageTransitions() {
        const navLinks = document.querySelectorAll('.nav-link, a[href$=".html"]');

        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                const href = link.getAttribute('href');

                if (!href || href.startsWith('#') || href.startsWith('http') || href.startsWith('mailto:')) {return;}

                e.preventDefault();
                const currentTheme = localStorage.getItem('theme') || 'cyberpunk';

                if (currentTheme === 'nier') {
                    pageOverlay.style.background = '#dcd8c8';
                    pageOverlay.style.color = '#8a1c1c';
                    pageOverlay.style.fontFamily='"Cormorant Garamond", serif'
                    pageOverlay.innerHTML = '<span class="blink">Loading Environment...</span>';
                } else {
                    pageOverlay.style.background = '050505';
                    pageOverlay.style.color = '#00f0ff';
                    pageOverlay.style.fontFamily='"Share Tech Mono", monospace';
                    pageOverlay.style.textShadow= '0 0 10px #00f0ff';
                    pageOverlay.innerHTML = '<span class="blink">LOADING SYSTEM...</span>';
                }

                pageOverlay.style.pointerEvents = 'all';
                pageOverlay.style.opacity = '1';

                setTimeout(() => {
                    window.location.href = href;
                }, 250);
            });
        });
    }

    function pageEnterAnimation() {
        pageOverlay.style.opacity = '1';
        pageOverlay.style.pointerEvents = 'all';

        setTimeout(() => {
            pageOverlay.style.opacity = '0';
            setTimeout(() => {
                pageOverlay.style.pointerEvents = 'none';
            }, 250);
        }, 50);
    }

    /* =============================================================================
       1. DICTIONNAIRE DE DONNÉES (TEXTES & LORE)
    ============================================================================= */
    const translations = {
        'cyberpunk': {
            'net-status': 'NET-STATUS: <span class="blink">ONLINE</span>',
            'nav-home': '01 // SYSTEM_HOME',
            'nav-cursus': '02 // LIFE PATH',
            'nav-exp': '03 // MISSIONS_LOG',
            'nav-portfolio': '04 // SHARDS',
            'contact-title': '// DATA_LINK',
            'contact-loc': '[LOC]',
            'contact-com': '[COM]',
            'contact-git': '[GIT]',
            'contact-tel': '[TEL]',
            'welcome-title': '// WELCOME_PROTOCOL',
            'welcome-sub': '> Initializing user profile...',
            'btn-cv': '>> DOWNLOAD_DATA [CV]',
            'last-mission-title': 'LAST MISSION',
            'current-project-title': 'CURRENT PROJECT',
            'status-onGoing': 'Status: Executing...',
            'status-workingOnIt': 'Status: Compiling...',
            'education-title': '// EDUCATION_DATABANK',
            'education-sub': 'Extraction of academic data and certifications...',
            'option-span': '[OPTN]',
            'bullet': '> ',
            'exp-title': '// SYSTEM_BOOT_LOGS',
            'exp-sub': '> Initializing Career Protocol...',
            'exp-status':'User status: <span style="color:var(--color1)">READY_FOR_DEPLOYMENT</span></p>',
            'exp-awaiting-title': '// AWAITING_FIRST_CONTRACT',
            'exp-awaiting-text': 'Implants : Overclocked. Soft : Dernier patch installé.<br>En recherche d\'un Fixer pour valider le premier Gig.',
            'portfolio-title': '// COMPILED_PROJECTS',
            'access-code': '> ACCESS CODE',
            'footer-text': 'END OF LINE_'
        },
        'nier': {
            'net-status': 'Bunker Server: <span class="blink">CONNECTED</span>',
            'nav-home': 'I. Origin',
            'nav-cursus': 'II. Unit Data',
            'nav-exp': 'III. Chronicles',
            'nav-portfolio': 'IV. Archives',
            'contact-title': 'Correspondence',
            'contact-loc': 'Region',
            'contact-com': 'Letter.',
            'contact-git': 'Library',
            'contact-tel': 'Voice',
            'welcome-title': 'ECHOES OF HUMANITY',
            'welcome-sub': 'Commencing Log Decryption...',
            'btn-cv': 'Recueillir les Archives',
            'last-mission-title': 'Previous Tale',
            'current-project-title': 'Current Journey',
            'status-onGoing': 'Story: Unfolding...',
            'status-workingOnIt': 'Story: Writing...',
            'education-title': 'Memory Fragments',
            'education-sub': 'Retracing the path traveled...',
            'option-span': 'Optn.',
            'bullet': ' ',
            'exp-title': 'Service Records',
            'exp-sub': 'Accessing timeline data...',
            'exp-status':'Unit Condition: <span style="color:var(--color2)">AWAITING_ORDERS</span></p>',
            'exp-awaiting-title': 'Assignment: Pending',
            'exp-awaiting-text': 'Ce corps a fini d\'apprendre. Il est temps de changer de forme.<br>En quête d\'une nouvelle porte à ouvrir pour débuter la prochaine existence.',
            'portfolio-title': 'Archives',
            'access-code': '• Examine',
            'footer-text': 'End of Report'
        }
    }

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
       2. EFFET MACHINE A ECRIRE
    --------------------------------------------------- */
    const typingElement = document.getElementById('typing-text');

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

    /* ---------------------------------------------------
       3. NAVIGATION AUTO (Active Link)
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
       4. THEME SWITCHER OPTIMISÉ (avec transition)
    --------------------------------------------------- */
    const overlay = document.createElement('div');
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #000;
        opacity: 0;
        pointer-events: none;
        transition: opacity 0.3s ease;
        z-index: 9998;
    `;
    document.body.appendChild(overlay);

    function switchTheme(newTheme, withTransition = false) {
        const cyberpunkLink = document.getElementById('theme-cyberpunk');
        const nierLink = document.getElementById('theme-nier');

        const applyTheme = () => {
            if (newTheme === 'nier') {
                if (cyberpunkLink) cyberpunkLink.rel = 'alternate stylesheet';
                if (nierLink) nierLink.rel = 'stylesheet';
                themeBtn.textContent = "[ OS: YoRHa ]";
                updateText('nier');
                startTypewriter(subtitles['nier']);
                console.log("System: YoRHa units connected.");
            } else {
                if (cyberpunkLink) cyberpunkLink.rel = 'stylesheet';
                if (nierLink) nierLink.rel = 'alternate stylesheet';
                themeBtn.textContent = "[ OS: ARASAKA ]";
                updateText('cyberpunk');
                startTypewriter(subtitles['cyberpunk']);
                console.log("System: Arasaka protocol restored.");
            }

            document.querySelectorAll('[data-theme]').forEach(el => {
                el.style.display = el.dataset.theme === newTheme ? '' : 'none';
            });
            localStorage.setItem('theme', newTheme);
        };

        if (withTransition) {
            overlay.style.pointerEvents = 'all';
            overlay.style.opacity = '1';

            setTimeout(() => {
                applyTheme();
                setTimeout(() => {
                    overlay.style.opacity = '0';
                    setTimeout(() => {
                        overlay.style.pointerEvents = 'none';
                    }, 200);
                }, 25);
            }, 200);
        } else {
            applyTheme();
        }
    }

    switchTheme(initTheme, false);

    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            const currentTheme = localStorage.getItem('theme') || 'cyberpunk';
            const newTheme = currentTheme === 'cyberpunk' ? 'nier' : 'cyberpunk';
            switchTheme(newTheme, true);
        });
    }

    /* ---------------------------------------------------
       5. EFFET GLITCH ALEATOIRE (Titre H1)
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

    /* ---------------------------------------------------
       INITIALISATION FINALE
    --------------------------------------------------- */
    updateText(initTheme);
    setTimeout(() => {
        startTypewriter(subtitles[initTheme]);
    }, 200);

    if(themeBtn) {
        themeBtn.textContent = initTheme === 'nier' ? "[ OS: YoRHa ]" : "[ OS: ARASAKA ]";
    }

    document.querySelectorAll('[data-theme]').forEach(el => {
        el.style.display = el.dataset.theme === initTheme ? '' : 'none';
    });

    setupPageTransitions();
    pageEnterAnimation();
    requestAnimationFrame(() => {
        document.documentElement.classList.remove('preload');
    });
}