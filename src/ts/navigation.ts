import type { Theme } from './translations';

const TRANSITION_MS = 250;

/** S'assure que l'href du thême reste le même entre les pages */
export function setupActiveLink(): void {
  const page = location.pathname.split('/').pop()?.replace('.html', '') || 'index';

  document.querySelectorAll<HTMLAnchorElement>('.nav-link').forEach(link => {
    const target = link.getAttribute('href')?.split('/').pop()?.replace('.html', '');
    link.classList.toggle('active', target === page);
  });
}

/**
 * Intercepte les transitions entre les sites
 * et effectue un fade-out/in si elle se passe sur le  même site
 */
export function setupPageTransitions(getTheme: () => Theme): void {
  const overlay = buildPageOverlay();

  overlay.style.opacity = '1';
  overlay.style.pointerEvents = 'all';
  requestAnimationFrame(() => {
    setTimeout(() => {
      overlay.style.opacity = '0';
      setTimeout(() => { overlay.style.pointerEvents = 'none'; }, TRANSITION_MS);
    }, 50);
  });

  document.addEventListener('click', e => {
    const link = (e.target as HTMLElement).closest<HTMLAnchorElement>('a[href]');
    if (!link) return;

    const href = link.getAttribute('href') ?? '';
    if (/^(#|https?:|mailto:|tel:)/.test(href) || link.hasAttribute('download')) return;

    e.preventDefault();
    applyOverlayStyle(overlay, getTheme());
    overlay.style.pointerEvents = 'all';
    overlay.style.opacity = '1';

    setTimeout(() => { location.href = href; }, TRANSITION_MS);
  });
}

function buildPageOverlay(): HTMLElement {
  const el = document.createElement('div');
  el.className = 'page-overlay';
  document.body.appendChild(el);
  return el;
}

function applyOverlayStyle(el: HTMLElement, theme: Theme): void {
  if (theme === 'nier') {
    Object.assign(el.style, {
      background:  '#dcd8c8',
      color:       '#8a1c1c',
      fontFamily:  '"Cormorant Garamond", serif',
      textShadow:  'none',
    });
    el.innerHTML = '<span class="blink">Loading Environment...</span>';
  } else {
    Object.assign(el.style, {
      background:  '#050505',
      color:       '#00f0ff',
      fontFamily:  '"Share Tech Mono", monospace',
      textShadow:  '0 0 10px #00f0ff',
    });
    el.innerHTML = '<span class="blink">LOADING SYSTEM...</span>';
  }
}
