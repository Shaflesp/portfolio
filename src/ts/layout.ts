interface NavItem {
  id:   string;
  href: string;
  label: string;
}

const NAV_ITEMS: NavItem[] = [
  { id: 'nav-home',      href: '/index.html',           label: 'ACCUEIL'    },
  { id: 'nav-cursus',    href: '/pages/cursus.html',    label: 'CURSUS'     },
  { id: 'nav-exp',       href: '/pages/experience.html',label: 'EXPÉRIENCE' },
  { id: 'nav-portfolio', href: '/pages/portfolio.html', label: 'RÉALISATIONS'},
];

export function mountAside(): void {
  const aside = document.querySelector<HTMLElement>('[data-layout="aside"]');
  if (!aside) return;

  aside.innerHTML = `
    <div class="portrait-frame portrait-frame--cyberpunk">
      <img src="/assets/images/MARTIN.png" alt="Portrait de Rémy Martin" class="portrait-img">
      <div class="scan-bar" aria-hidden="true"></div>
      <span class="img-caption">ID: CONFIRMED</span>
    </div>
    <div class="portrait-frame portrait-frame--nier">
      <img src="/assets/images/MARTIN.png" alt="Portrait de Rémy Martin" class="portrait-img">
    </div>

    <!-- Navigation -->
    <nav class="nav-menu" aria-label="Navigation principale">
      ${NAV_ITEMS.map(item => `
        <a data-id="${item.id}" href="${item.href}" class="nav-link">
          ${item.label}
        </a>
      `).join('')}
    </nav>

    <!-- Contact card -->
    <section class="card contact-card">
      <h2 data-id="contact-title">CONTACT</h2>
      <div class="contact-info">
        <p><span data-id="contact-loc">[LOC]</span> Douai, FR</p>
        <p>
          <span data-id="contact-com">[COM]</span>
          <a href="mailto:remy.martin0106@outlook.com"
             target="_blank"
             title="remy.martin0106@outlook.com">
            remy.martin0106
          </a>
        </p>
        <p>
          <span data-id="contact-git">[GIT]</span>
          <a href="https://github.com/Shaflesp" target="_blank" rel="noopener">
            github.com/Shaflesp
          </a>
        </p>
        <p><span data-id="contact-tel">[TEL]</span>06-14-41-54-14</p>
      </div>
    </section>
  `;
}
