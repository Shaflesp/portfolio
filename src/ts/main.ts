import '../css/base.css';
import '../css/cyberpunk.css';
import '../css/nier.css';

import { mountAside }                       from './layout';
import { ThemeManager }                     from './theme';
import { Typewriter }                       from './typewriter';
import { setupActiveLink, setupPageTransitions } from './navigation';

function boot(): void {
  // 1. Crée le panneau latéral (HTML)
  mountAside();

  // 2. Applique le theme — reads localStorage, sets html[data-theme], applique la transition
  const typewriter   = new Typewriter('#typing-text');
  const themeManager = new ThemeManager(typewriter);
  themeManager.apply(themeManager.theme);   // initial apply, no animation

  // 3. Theme toggle button
  document.getElementById('theme-toggle')?.addEventListener('click', () => {
    themeManager.toggle();
  });

  // 4. Navigation
  setupActiveLink();
  setupPageTransitions(() => themeManager.theme);

  // 5. Optional: Cyberpunk only glitches
  const h1 = document.querySelector<HTMLElement>('h1');
  if (h1) {
    setInterval(() => {
      if (themeManager.theme !== 'cyberpunk' || Math.random() <= 0.95) return;
      h1.style.textShadow = '4px 0 #ff003c, -4px 0 #00f0ff';
      h1.style.transform  = 'skewX(-10deg)';
      setTimeout(() => { h1.style.textShadow = ''; h1.style.transform = ''; }, 100);
    }, 1_000);
  }

  // 6. Done — Retire le lock pour permètre les transitions de thème
  requestAnimationFrame(() => document.documentElement.classList.remove('preload'));
}

// Lance le TS
document.readyState === 'loading'
  ? document.addEventListener('DOMContentLoaded', boot)
  : boot();
