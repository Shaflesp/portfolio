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
        id:         'maze',
        title:      'LABIRINT',
        coverImage: '/images/projects/wip.png',
        statusTags: [
            { text: 'STATUS: COMPLETE', variant: 'success' },
            { text: 'CLASS: IUT',       variant: 'neutral'  },
        ],
        dataGrid: [
            { label: 'CLIENT', value: 'IUT Lille' },
            { label: 'DATE',   value: '2025'       },
            { label: 'ROLE',   value: 'Dev Java'  },
            { label: 'LANG',   value: 'Java'       },
        ],
        techChips: ['JAVA', 'JAVAFX'],
        sections: [
            {
                title: 'MISSION BRIEF',
                paragraphs: [
                    'Jeu de labyrinthe développé en JavaFX, explorant plusieurs configurations et modes de jeu.',
                    'Le projet met l\'accent sur la génération procédurale et les contraintes de perception du joueur.',
                ],
            },
            {
                title: 'KEY_FEATURES',
                listItems: [
                    'Génération aléatoire d\'environnements et labyrinthes parfaits.',
                    'Mode vue restreinte (ex 3×3) — le joueur ne voit qu\'une zone limitée autour de lui.',
                    'Mode visibilité directionnelle — seule la case directement devant est visible, effet lampe torche par raycasting.',
                    'Niveaux de difficulté configurables.',
                ],
            },
        ],
        images: [
            { src: '/images/projects/wip.png', id: '001', caption: 'REC_001', alt: 'Maze Game' },
        ],
        actions: [
            { label: 'SOURCE_CODE', href: 'https://gitlab.univ-lille.fr/sae302/2025/G1_SAE3.3', variant: 'primary', external: true },
        ],
    },

    // ── Rage Party ───────────────────────────────────────────────
    {
        id:         'rage-party',
        title:      'Rage Party',
        coverImage: '/images/projects/wip.png',
        statusTags: [
            { text: 'STATUS: COMPLETE',  variant: 'success' },
            { text: 'CLASS: GAME JAM',   variant: 'warning'  },
        ],
        dataGrid: [
            { label: 'EVENT',  value: 'Code Game Jam 2026' },
            { label: 'DATE',   value: '2026'                },
            { label: 'ROLE',   value: 'Dev Java'            },
            { label: 'LANG',   value: 'Java'                },
        ],
        techChips: ['JAVA', 'FXGL'],
        sections: [
            {
                title: 'MISSION BRIEF',
                paragraphs: [
                    'Développé en 48h lors de la Code Game Jam 2026 sur le thème "Fête des clicks".',
                    'On est à une fête à l\'américaine. Tout l\'environnement est interactif et les éléments déclenchent des réactions en chaîne. Très vite, le chaos s\'installe — et c\'est à nous de garder le contrôle avant que la police ne débarque.',
                ],
            },
            {
                title: 'KEY_FEATURES',
                listItems: [
                    'Environnement entièrement interactif — chaque élément peut déclencher une chaîne.',
                    'Système de réactions en cascade dynamique.',
                    'Pression temporelle : le chaos monte, la police approche.',
                    'Développé intégralement en 48 heures avec FXGL.',
                ],
            },
        ],
        images: [
            { src: '/images/projects/wip.png', id: '001', caption: 'REC_001', alt: 'Rage Party' },
        ],
        actions: [
            { label: 'SOURCE_CODE', href: 'https://gitlab.univ-lille.fr/remy.martin3.etu/codegamejam2026', variant: 'primary', external: true },
        ],
    },

    // ── Clicker (WIP) ────────────────────────────────────────────
    {
        id:         'clicker',
        title:      'Sunshine Clicker',
        coverImage: '/images/projects/wip.png',
        statusTags: [
            { text: 'STATUS: EN COURS', variant: 'warning' },
            { text: 'CLASS: PERSO',     variant: 'neutral'  },
        ],
        dataGrid: [
            { label: 'CLIENT', value: 'Personnel' },
            { label: 'DATE',   value: '2025 →'    },
            { label: 'ROLE',   value: 'Dev / Design' },
            { label: 'LANG',   value: 'Unity / C#'   },
        ],
        techChips: ['UNITY', 'C#'],
        sections: [
            {
                title: 'MISSION BRIEF',
                paragraphs: [
                    'Clicker game riche en fonctionnalités, développé personnellement sous Unity, inspiré de l\'univers d\'Umamusume Pretty Derby.',
                    'Chaque upgrade est pensée pour modifier substantiellement l\'expérience de jeu, pas seulement augmenter un multiplicateur.',
                ],
            },
            {
                title: 'KEY_FEATURES',
                listItems: [
                    'Système d\'upgrades avec mécaniques uniques par amélioration.',
                    'Chaque achat altère significativement le gameplay, pas juste les stats.',
                    'Architecture modulaire Unity permettant l\'ajout rapide de contenu.',
                    'Projet en développement actif.',
                ],
            },
        ],
        images: [
            { src: '/images/projects/wip.png', id: '001', caption: 'REC_001', alt: 'WIP' },
        ],
        actions: [
            { label: 'WIP — NOT YET PUBLIC', href: '#', variant: 'secondary', external: false },
        ],
    },

    // ── Archoot ───────────────────────────────────────
    {
        id:         'archoot',
        title:      'Archoot',
        coverImage: '/images/projects/wip.png',
        statusTags: [
            { text: 'STATUS: COMPLETE', variant: 'success' },
            { text: 'CLASS: IUT',       variant: 'neutral'  },
        ],
        dataGrid: [
            { label: 'CLIENT', value: 'IUT Lille'    },
            { label: 'DATE',   value: '2026'          },
            { label: 'ROLE',   value: 'Full Stack'   },
            { label: 'LANG',   value: 'Node.js'       },
        ],
        techChips: ['NODE.JS', 'SOCKET.IO', 'TS', 'HTML'],
        sections: [
            {
                title: 'MISSION BRIEF',
                paragraphs: [
                    'Shoot\'em up multijoueur en ligne développé avec Node.js et Socket.io. On incarne un archer qui, égaré dans la forêt, doit affronter ses peurs.',
                    'Le projet porte sur la synchronisation temps réel des joueurs et la gestion des états de jeu côté serveur.',
                ],
            },
            {
                title: 'KEY_FEATURES',
                listItems: [
                    'Multijoueur temps réel via Socket.io.',
                    'Logique de jeu et collision gérées côté serveur Node.js.',
                    'Mécanique de shoot\'em up avec progression de vagues et boss.',
                    'Direction Artistique et Créative entièrement faite main',
                ],
            },
        ],
        images: [
            { src: '/images/projects/wip.png', id: '001', caption: 'REC_001', alt: 'Lost in the Woods' },
        ],
        actions: [
            { label: 'SOURCE_CODE', href: 'https://gitlab.univ-lille.fr/jsae/2025-2026/projets/groupe-i/equipe-5/archoot', variant: 'primary', external: true },
            { label: 'RUN_DIAGNOSTICS',    href: '/projects/archoot-game/index.html', variant: 'secondary', external: false },
        ],
    },

    // ── webPlayer ───────────────────────────────────────────────
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
        techChips: ['HTML', 'JS', 'JAVA', 'JAVA EE', 'SQL'],
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
            //{ label: 'RUN_DIAGNOSTICS',    href: '#',                                                            variant: 'secondary', external: false },
        ],
    },

    // ── SIRTET ──────────────────────────────────────────────────
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

    // ── Outil d'appariement ──────────────────────────────────────
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

    // ── Planet Colonizer ─────────────────────────────────────────
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
                    'Jeu ludo-pédagogique de gestion de ressources en interface terminal pur. L\'objectif : bâtir la colonie la plus grande et surtout la plus autosuffisante possible.',
                    'La dimension pédagogique porte sur la chimie et la physique des matériaux — pourquoi utiliser du cuivre pour construire un recycleur d\'air, pourquoi le carbone est-il employé ici — les choix de construction ont un sens scientifique réel.',
                ],
            },
            {
                title: 'KEY_FEATURES',
                listItems: [
                    'Interface entièrement en terminal.',
                    'Système de gestion de ressources et matériaux avec dépendances réelles.',
                    'Mécanique de survie de la connier: l\'autosuffisance comme condition de victoire.',
                    'Couche pédagogique intégrée — chaque matériau a une justification scientifique.',
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