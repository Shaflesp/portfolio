import '../css/base-project.css';
import '../css/cyberpunk-project.css';
import '../css/nier-project.css';

import { findProject, type Project, type ProjectImage } from './projects';

// ── Helpers ───────────────────────────────────────────────────

function qs<T extends HTMLElement>(selector: string): T | null {
    return document.querySelector<T>(selector);
}

function currentTheme(): string {
    return document.documentElement.dataset['theme'] ?? 'cyberpunk';
}

// ── Page population ───────────────────────────────────────────

function populatePage(project: Project): void {
    document.title = `${project.title} // REMY_MARTIN`;

    // Breadcrumb active span
    const crumbActive = qs<HTMLElement>('.sub-header-glitch .active');
    if (crumbActive) crumbActive.textContent = project.title;

    // Banner image
    const coverImg = qs<HTMLImageElement>('.project-cover-img');
    if (coverImg) { coverImg.src = project.coverImage; coverImg.alt = project.title; }

    // Project title
    const titleEl = qs<HTMLElement>('.project-title');
    if (titleEl) {
        titleEl.textContent   = project.title;
        titleEl.dataset['text'] = project.title;
    }

    // Status tags
    const metaTags = qs<HTMLElement>('.meta-tags');
    if (metaTags) {
        metaTags.innerHTML = project.statusTags
            .map(t => `<span class="status-tag ${t.variant}">${t.text}</span>`)
            .join('');
    }

    // Data grid
    const dataGrid = qs<HTMLElement>('.data-grid');
    if (dataGrid) {
        dataGrid.innerHTML = project.dataGrid
            .map(cell => `
        <div class="data-cell">
          <span class="label">${cell.label}</span>
          <span class="value">${cell.value}</span>
        </div>`)
            .join('');
    }

    // Tech chips
    const chipsContainer = qs<HTMLElement>('.tech-chips');
    if (chipsContainer) {
        chipsContainer.innerHTML = project.techChips
            .map(chip => `<span class="chip">${chip}</span>`)
            .join('');
    }

    // Content sections
    const textContent = qs<HTMLElement>('.project-text-content');
    if (textContent) {
        const techStack = textContent.querySelector('.tech-stack-container');
        textContent.innerHTML = '';
        if (techStack) textContent.appendChild(techStack);

        for (const section of project.sections) {
            const header = document.createElement('h3');
            header.className   = 'section-header';
            header.textContent = section.title;
            textContent.appendChild(header);

            if (section.paragraphs && section.paragraphs.length > 0) {
                const block = document.createElement('div');
                block.className = 'text-block';
                block.innerHTML = section.paragraphs.map(p => `<p>${p}</p>`).join('');
                textContent.appendChild(block);
            }

            if (section.listItems && section.listItems.length > 0) {
                const list = document.createElement('ul');
                list.className = 'feature-list';
                list.innerHTML = section.listItems.map(item => `<li>${item}</li>`).join('');
                textContent.appendChild(list);
            }
        }
    }

    // Gallery
    populateGallery(project.images);

    // Action buttons
    const actionsEl = qs<HTMLElement>('.project-actions');
    if (actionsEl) {
        actionsEl.innerHTML = project.actions
            .map(action => `
        <a href="${action.href}"
           ${action.external ? 'target="_blank" rel="noopener"' : ''}
           class="project-btn ${action.variant}">
          <span class="btn-text">${action.label}</span>
        </a>`)
            .join('');
    }
}

// ── Gallery ───────────────────────────────────────────────────

function populateGallery(images: ProjectImage[]): void {
    if (images.length === 0) return;

    const first  = images[0]!;
    const mainImg = document.getElementById('gallery-main-img') as HTMLImageElement | null;
    if (mainImg) { mainImg.src = first.src; mainImg.alt = first.alt; }

    const idLabel  = document.getElementById('gallery-img-id');
    const capLabel = document.getElementById('gallery-caption-id');
    if (idLabel)  idLabel.textContent  = first.id;
    if (capLabel) capLabel.textContent = first.caption;

    const thumbsEl = document.getElementById('gallery-thumbs');
    if (!thumbsEl) return;

    thumbsEl.innerHTML = images
        .map((img, i) => `
      <div class="thumb-item ${i === 0 ? 'active' : ''}"
           data-src="${img.src}"
           data-id="${img.id}"
           data-caption="${img.caption}">
        <img src="${img.src}" alt="${img.alt}" loading="lazy">
      </div>`)
        .join('');
}

function initGallery(): void {
    const thumbsContainer = document.getElementById('gallery-thumbs');
    if (!thumbsContainer) return;

    thumbsContainer.addEventListener('click', (e: MouseEvent) => {
        const thumb = (e.target as HTMLElement).closest<HTMLElement>('.thumb-item');
        if (!thumb) return;
        selectImage(
            thumb,
            thumb.dataset['src']     ?? '',
            thumb.dataset['id']      ?? '',
            thumb.dataset['caption'] ?? '',
        );
    });

    document.getElementById('gallery-viewport')
        ?.addEventListener('click', () => openFullscreen());
}

function selectImage(thumb: HTMLElement, src: string, id: string, caption: string): void {
    const viewport = document.getElementById('gallery-viewport');
    const mainImg  = document.getElementById('gallery-main-img') as HTMLImageElement | null;
    const idLabel  = document.getElementById('gallery-img-id');
    const capLabel = document.getElementById('gallery-caption-id');
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
        setTimeout(() => viewport.classList.remove('loading-effect'), 600);
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
    const modal    = document.getElementById('fullscreen-modal');
    const closeBtn = document.getElementById('modal-close-btn');
    if (!modal) return;
    modal.addEventListener('click', (e: MouseEvent) => { if (e.target === modal) closeFullscreen(); });
    closeBtn?.addEventListener('click', () => closeFullscreen());
    document.addEventListener('keydown', (e: KeyboardEvent) => { if (e.key === 'Escape') closeFullscreen(); });
}

// ── 404 fallback ──────────────────────────────────────────────

function showNotFound(id: string): void {
    const panel = qs<HTMLElement>('.project-detail-panel');
    if (panel) panel.innerHTML = `
    <div style="padding:60px;text-align:center;">
      <h2 class="section-header" style="margin-bottom:30px;">PROJECT NOT FOUND</h2>
      <p style="margin-bottom:20px;opacity:0.7;">No project with id <code>${id}</code> exists.</p>
      <a href="/pages/portfolio.html" class="project-btn primary">← RETURN TO ARCHIVES</a>
    </div>`;
    document.title = 'NOT FOUND // REMY_MARTIN';
}

// ── Boot ──────────────────────────────────────────────────────

function boot(): void {
    const id      = new URLSearchParams(location.search).get('id') ?? '';
    const project = findProject(id);

    if (!project) { showNotFound(id); return; }

    populatePage(project);
    initGallery();
    initModal();
}

document.readyState === 'loading'
    ? document.addEventListener('DOMContentLoaded', boot)
    : boot();