import type { Typewriter } from './typewriter';
import { TRANSLATIONS, SUBTITLES, type Theme } from './translations';

const STORAGE_KEY = 'theme';
const FADE_MS     = 200;

export class ThemeManager {
  private current: Theme;
  private readonly typewriter: Typewriter;
  private readonly overlay: HTMLElement;

  constructor(typewriter: Typewriter) {
    this.typewriter = typewriter;
    this.current    = (localStorage.getItem(STORAGE_KEY) as Theme | null) ?? 'cyberpunk';
    this.overlay    = this.buildOverlay();
  }

  get theme(): Theme {
    return this.current;
  }

  // Applique un thème soit immédiatement soit avec un fade-in
  apply(theme: Theme, animate = false): void {
    const commit = () => {
      this.current = theme;
      document.documentElement.dataset['theme'] = theme;
      this.updateButton(theme);
      this.applyTranslations(theme);
      this.typewriter.start(SUBTITLES[theme]);
      localStorage.setItem(STORAGE_KEY, theme);
    };

    animate ? this.withFade(commit) : commit();
  }

  toggle(): void {
    this.apply(this.current === 'cyberpunk' ? 'nier' : 'cyberpunk', true);
  }


  private buildOverlay(): HTMLElement {
    const el = document.createElement('div');
    el.className = 'theme-overlay';
    document.body.appendChild(el);
    return el;
  }

  private updateButton(theme: Theme): void {
    const btn = document.getElementById('theme-toggle');
    if (btn) btn.textContent = theme === 'nier' ? '[ OS: YoRHa ]' : '[ OS: ARASAKA ]';
  }

  private applyTranslations(theme: Theme): void {
    for (const [key, html] of Object.entries(TRANSLATIONS[theme])) {
      document.querySelectorAll<HTMLElement>(`[data-id="${key}"]`).forEach(el => {
        el.innerHTML = html;
        // Keep glitch data-text in sync with the visible text
        if (el.classList.contains('glitch')) el.dataset['text'] = el.innerText;
      });
    }

    // Decoration spéciale Nier
    document.querySelectorAll<HTMLElement>('h2').forEach(h2 => {
      h2.dataset['angelic'] = theme === 'nier'
        ? h2.innerText.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
        : '';
    });
  }

  private withFade(fn: () => void): void {
    this.overlay.style.pointerEvents = 'all';
    this.overlay.style.opacity = '1';
    setTimeout(() => {
      fn();
      setTimeout(() => {
        this.overlay.style.opacity = '0';
        setTimeout(() => { this.overlay.style.pointerEvents = 'none'; }, FADE_MS);
      }, 25);
    }, FADE_MS);
  }
}
