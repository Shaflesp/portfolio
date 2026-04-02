import '../css/base-project.css';
import '../css/cyberpunk-project.css';
import '../css/nier-project.css';

const THEME_ATTR = 'data-theme';

function currentTheme(): string {
    return document.documentElement.getAttribute(THEME_ATTR) ?? 'cyberpunk';
}

// ── Gallery ───────────────────────────────────────────────────

function initGallery(): void {
    const thumbsContainer = document.getElementById('gallery-thumbs');
    if (!thumbsContainer) return;

    thumbsContainer.addEventListener('click', (e: MouseEvent) => {
        const thumb = (e.target as HTMLElement).closest<HTMLElement>('.thumb-item');
        if (!thumb) return;

        const src     = thumb.dataset['src']     ?? '';
        const id      = thumb.dataset['id']      ?? '';
        const caption = thumb.dataset['caption'] ?? '';
        selectImage(thumb, src, id, caption);
    });

    document.getElementById('gallery-viewport')
        ?.addEventListener('click', () => openFullscreen());
}

function selectImage(
    thumb: HTMLElement,
    src: string,
    id: string,
    caption: string,
): void {
    const viewport  = document.getElementById('gallery-viewport');
    const mainImg   = document.getElementById('gallery-main-img') as HTMLImageElement | null;
    const idLabel   = document.getElementById('gallery-img-id');
    const capLabel  = document.getElementById('gallery-caption-id');
    if (!viewport || !mainImg) return;

    document.querySelectorAll('.thumb-item').forEach(t => t.classList.remove('active'));
    thumb.classList.add('active');

    if (currentTheme() === 'cyberpunk') {
        viewport.classList.remove('glitch-active');
        void viewport.offsetWidth;
        viewport.classList.add('glitch-active');

        mainImg.classList.remove('decoding');
        void mainImg.offsetWidth;
        mainImg.classList.add('decoding');

        setTimeout(() => {
            mainImg.src = src;
            if (idLabel) idLabel.textContent = id;
        }, 150);

        setTimeout(() => {
            viewport.classList.remove('glitch-active');
            mainImg.classList.remove('decoding');
        }, 600);
    } else {
        viewport.classList.add('loading-effect');

        setTimeout(() => {
            mainImg.src = src;
            if (capLabel) capLabel.textContent = caption;
        }, 250);

        setTimeout(() => {
            viewport.classList.remove('loading-effect');
        }, 600);
    }
}

// ── Modal ─────────────────────────────────────────────────────

function openFullscreen(): void {
    const modal   = document.getElementById('fullscreen-modal');
    const mainImg = document.getElementById('gallery-main-img') as HTMLImageElement | null;
    const idLabel = document.getElementById('gallery-img-id');
    if (!modal || !mainImg) return;

    const fullImg = document.getElementById('modal-full-img') as HTMLImageElement | null;
    const modalId = document.getElementById('modal-id-display');

    if (fullImg) fullImg.src = mainImg.src;
    if (modalId && idLabel) modalId.textContent = idLabel.textContent;

    modal.classList.remove('hidden');
    document.body.classList.add('modal-open');
}

function closeFullscreen(): void {
    document.getElementById('fullscreen-modal')?.classList.add('hidden');
    document.body.classList.remove('modal-open');
}

function initModal(): void {
    const modal     = document.getElementById('fullscreen-modal');
    const closeBtn  = document.getElementById('modal-close-btn');
    if (!modal) return;

    modal.addEventListener('click', (e: MouseEvent) => {
        if (e.target === modal) closeFullscreen();
    });

    closeBtn?.addEventListener('click', () => closeFullscreen());

    document.addEventListener('keydown', (e: KeyboardEvent) => {
        if (e.key === 'Escape') closeFullscreen();
    });
}

// ── Boot ──────────────────────────────────────────────────────

function boot(): void {
    initGallery();
    initModal();
}

document.readyState === 'loading'
    ? document.addEventListener('DOMContentLoaded', boot)
    : boot();