export type Theme = 'cyberpunk' | 'nier';

/** toutes les clés possibles de la map */
export type TranslationKey =
  | 'net-status'
  | 'nav-home' | 'nav-cursus' | 'nav-exp' | 'nav-portfolio'
  | 'contact-title' | 'contact-loc' | 'contact-com' | 'contact-git' | 'contact-tel'
  | 'welcome-title' | 'welcome-sub' | 'btn-cv'
  | 'last-mission-title' | 'current-project-title'
  | 'status-onGoing' | 'status-workingOnIt'
  | 'education-title' | 'education-sub'
  | 'option-span' | 'bullet'
  | 'exp-title' | 'exp-sub' | 'exp-status'
  | 'exp-awaiting-title' | 'exp-awaiting-text'
  | 'portfolio-title' | 'access-code'
  | 'project-id-label'
  | 'footer-text';

export type TranslationMap = Record<TranslationKey, string>;

export const TRANSLATIONS: Record<Theme, TranslationMap> = {
  cyberpunk: {
    'net-status':            'NET-STATUS: <span class="blink">ONLINE</span>',
    'nav-home':              '01 // SYSTEM_HOME',
    'nav-cursus':            '02 // LIFE PATH',
    'nav-exp':               '03 // MISSIONS_LOG',
    'nav-portfolio':         '04 // SHARDS',
    'contact-title':         '// DATA_LINK',
    'contact-loc':           '[LOC]',
    'contact-com':           '[COM]',
    'contact-git':           '[GIT]',
    'contact-tel':           '[TEL]',
    'welcome-title':         '// WELCOME_PROTOCOL',
    'welcome-sub':           '> Initializing user profile...',
    'btn-cv':                '>> DOWNLOAD_DATA [CV]',
    'last-mission-title':    'LAST MISSION',
    'current-project-title': 'CURRENT PROJECT',
    'status-onGoing':        'Status: Executing...',
    'status-workingOnIt':    'Status: Compiling...',
    'education-title':       '// EDUCATION_DATABANK',
    'education-sub':         'Extraction of academic data and certifications...',
    'option-span':           '[OPTN]',
    'bullet':                '> ',
    'exp-title':             '// SYSTEM_BOOT_LOGS',
    'exp-sub':               '> Initializing Career Protocol...',
    //'exp-status':            'User status: <span style="color:var(--color1)">READY_FOR_DEPLOYMENT</span>',
    'exp-status':            'User status: <span style="color:var(--color1)">DEPLOYED</span>',
    'exp-awaiting-title':    '// AWAITING_FIRST_CONTRACT',
    'exp-awaiting-text':     "Implants : Overclocked. Soft : Dernier patch installé.<br>En recherche d'un Fixer pour valider le premier Gig.",
    'portfolio-title':       '// COMPILED_PROJECTS',
    'access-code':           '> ACCESS CODE',
    'project-id-label':      'FILE_REF: 0x5944-10',
    'footer-text':           'END OF LINE_',
  },
  nier: {
    'net-status':            'Bunker Server: <span class="blink">CONNECTED</span>',
    'nav-home':              'I. Origin',
    'nav-cursus':            'II. Unit Data',
    'nav-exp':               'III. Chronicles',
    'nav-portfolio':         'IV. Archives',
    'contact-title':         'Correspondence',
    'contact-loc':           'Region',
    'contact-com':           'Letter.',
    'contact-git':           'Library',
    'contact-tel':           'Voice',
    'welcome-title':         'ECHOES OF HUMANITY',
    'welcome-sub':           'Commencing Log Decryption...',
    'btn-cv':                'Recueillir les Archives',
    'last-mission-title':    'Previous Tale',
    'current-project-title': 'Current Journey',
    'status-onGoing':        'Story: Unfolding...',
    'status-workingOnIt':    'Story: Writing...',
    'education-title':       'Memory Fragments',
    'education-sub':         'Retracing the path traveled...',
    'option-span':           'Optn.',
    'bullet':                ' ',
    'exp-title':             'Service Records',
    'exp-sub':               'Accessing timeline data...',
    'exp-status':            'Unit Condition: <span style="color:var(--color2)">AWAITING_ORDERS</span>',
    'exp-awaiting-title':    'Assignment: Pending',
    'exp-awaiting-text':     "Ce corps a fini d'apprendre. Il est temps de changer de forme.<br>En quête d'une nouvelle porte à ouvrir pour débuter la prochaine existence.",
    'portfolio-title':       'Archives',
    'access-code':           '• Examine',
    'project-id-label':      'ID: 59-44-10',
    'footer-text':           'End of Report',
  },
} as const;

export const SUBTITLES: Record<Theme, string> = {
  cyberpunk: "Netrunner Initiate | Daemon Architect",
  nier:      "Unité en apprentissage | Architecte de l'Invisible",
} as const;
