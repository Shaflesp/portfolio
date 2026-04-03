// ── Types ─────────────────────────────────────────────────────

export interface StatusTag {
    text:    string;
    variant: 'success' | 'warning' | 'neutral';
}

export interface DataCell {
    label: string;
    value: string;
}

export interface ProjectSection {
    title: string;
    paragraphs?: string[];
    listItems?: string[];
}

export interface ProjectImage {
    src:     string;
    id:      string;
    caption: string;
    alt:     string;
}

export interface ProjectAction {
    label:   string;
    href:    string;
    variant: 'primary' | 'secondary';
    external?: boolean;
}

export interface Project {
    id:          string;
    title:       string;
    coverImage:  string;
    statusTags:  StatusTag[];
    dataGrid:    DataCell[];
    techChips:   string[];
    sections:    ProjectSection[];
    images:      ProjectImage[];
    actions:     ProjectAction[];
}

// ── Data ──────────────────────────────────────────────────────

export const PROJECTS: Project[] = [
    {
        id:         'webplayer',
        title:      'webPlayer',
        coverImage: '/images/projects/img.png',
        statusTags: [
            { text: 'STATUS: EN COURS', variant: 'warning' },
            { text: 'CLASS: PERSO',     variant: 'neutral'  },
        ],
        dataGrid: [
            { label: 'CLIENT', value: 'Personnel'    },
            { label: 'DATE',   value: '2025 →'       },
            { label: 'ROLE',   value: 'Full Stack'   },
            { label: 'LANG',   value: 'Java / JS'    },
        ],
        techChips: ['HTML', 'CSS', 'JS', 'JAVA', 'JAVA EE', 'SQL'],
        sections: [
            {
                title: 'MISSION BRIEF',
                paragraphs: [
                    'Site personnel pour écouter mes musiques préférées en streaming depuis un serveur Java EE.',
                    'Le défi principal était la gestion du catalogue côté serveur et la synchronisation du player JS avec l\'API REST.',
                ],
            },
            {
                title: 'KEY_FEATURES',
                listItems: [
                    'Streaming audio servi par un backend Java EE.',
                    'Player JS avec contrôles de lecture complets.',
                    'Base de données SQL pour la gestion du catalogue.',
                    'Interface responsive adaptée mobile et desktop.',
                ],
            },
        ],
        images: [
            { src: '/images/projects/img.png',  id: '001', caption: 'REC_001', alt: 'Interface principale' },
            { src: '/images/projects/wip.png',  id: '002', caption: 'REC_002', alt: 'WIP'                  },
        ],
        actions: [
            { label: 'SOURCE_CODE',        href: 'https://github.com/Shaflesp/webPlayer',                        variant: 'primary',   external: true },
            { label: 'RUN_DIAGNOSTICS',    href: '#',                                                            variant: 'secondary', external: false },
        ],
    },

    {
        id:         'sirtet',
        title:      'SIRTET',
        coverImage: '/images/projects/img_1.png',
        statusTags: [
            { text: 'STATUS: COMPLETE',  variant: 'success' },
            { text: 'CLASS: IUT',        variant: 'neutral'  },
        ],
        dataGrid: [
            { label: 'CLIENT', value: 'IUT Lille'   },
            { label: 'DATE',   value: '2025'         },
            { label: 'ROLE',   value: 'Dev Java'    },
            { label: 'LANG',   value: 'Java'         },
        ],
        techChips: ['JAVA'],
        sections: [
            {
                title: 'MISSION BRIEF',
                paragraphs: [
                    'Réplique complète de Tetris™ développée en 28 heures dans le cadre d\'un projet universitaire.',
                    'Le défi était d\'implémenter toutes les mécaniques classiques (rotation, accélération, lignes) dans un temps très contraint.',
                ],
            },
            {
                title: 'KEY_FEATURES',
                listItems: [
                    'Moteur de jeu complet en Java pur.',
                    'Système de score et niveaux de difficulté progressifs.',
                    'Interface graphique JavaFx .',
                    'Livré en 28h — sprint intensif.',
                ],
            },
        ],
        images: [
            { src: '/images/projects/img_1.png', id: '001', caption: 'REC_001', alt: 'Gameplay SIRTET' },
            { src: '/images/projects/wip.png',   id: '002', caption: 'REC_002', alt: 'WIP'             },
        ],
        actions: [
            { label: 'SOURCE_CODE', href: 'https://gitlab.univ-lille.fr/iut-info/p3.01/2025-2026/groupe-3', variant: 'primary', external: true },
        ],
    },

    {
        id:         'appariement',
        title:      'Outil d\'appariement Universitaire',
        coverImage: '/images/projects/img_2.png',
        statusTags: [
            { text: 'STATUS: COMPLETE',  variant: 'success' },
            { text: 'CLASS: IUT',        variant: 'neutral'  },
        ],
        dataGrid: [
            { label: 'CLIENT', value: 'IUT Lille'    },
            { label: 'DATE',   value: '2025'          },
            { label: 'ROLE',   value: 'Dev Java'     },
            { label: 'LANG',   value: 'Java'          },
        ],
        techChips: ['JAVA'],
        sections: [
            {
                title: 'MISSION BRIEF',
                paragraphs: [
                    'Outil d\'aide à la décision pour appareiller des étudiants internationaux selon leurs préférences et critères académiques.',
                    'Implémentation d\'algorithmes de correspondance optimale avec interface de configuration et d\'export des résultats.',
                ],
            },
            {
                title: 'KEY_FEATURES',
                listItems: [
                    'Algorithme d\'appariement basé sur les préférences pondérées.',
                    'Import / export des données étudiantes.',
                    'Interface de configuration des critères de matching.',
                    'Visualisation des résultats et statistiques.',
                ],
            },
        ],
        images: [
            { src: '/images/projects/img_2.png', id: '001', caption: 'REC_001', alt: 'Interface outil' },
            { src: '/images/projects/wip.png',   id: '002', caption: 'REC_002', alt: 'WIP'             },
        ],
        actions: [
            { label: 'SOURCE_CODE', href: 'https://gitlab.univ-lille.fr/sae2.01-2.02/2025/D7', variant: 'primary', external: true },
        ],
    },

    {
        id:         'planet-colonizer',
        title:      'Planet Colonizer',
        coverImage: '/images/projects/img_3.png',
        statusTags: [
            { text: 'STATUS: COMPLETE',  variant: 'success' },
            { text: 'CLASS: IUT',        variant: 'neutral'  },
        ],
        dataGrid: [
            { label: 'CLIENT', value: 'IUT Lille'     },
            { label: 'DATE',   value: '2024'           },
            { label: 'ROLE',   value: 'Dev Java'      },
            { label: 'LANG',   value: 'Java'           },
        ],
        techChips: ['JAVA'],
        sections: [
            {
                title: 'MISSION BRIEF',
                paragraphs: [
                    'Jeu ludo-pédagogique de gestion de ressources combinant mécanique de stratégie et apprentissage de la physique de base.',
                    'Le joueur colonise une planète en gérant des ressources tout en apprenant des notions de physique appliquée.',
                ],
            },
            {
                title: 'KEY_FEATURES',
                listItems: [
                    'Simulation de physique simplifiée intégrée au gameplay.',
                    'Système de gestion de ressources multi-planètes.',
                    'Progression pédagogique structurée par niveaux.',
                    'Moteur de jeu Java avec rendu graphique Swing.',
                ],
            },
        ],
        images: [
            { src: '/images/projects/img_3.png', id: '001', caption: 'REC_001', alt: 'Planet Colonizer' },
            { src: '/images/projects/wip.png',   id: '002', caption: 'REC_002', alt: 'WIP'              },
        ],
        actions: [
            { label: 'SOURCE_CODE', href: 'https://github.com/Aksel-B/Planet-Colonizer', variant: 'primary', external: true },
        ],
    },
];

// ── Lookup ────────────────────────────────────────────────────

export function findProject(id: string): Project | undefined {
    return PROJECTS.find(p => p.id === id);
}