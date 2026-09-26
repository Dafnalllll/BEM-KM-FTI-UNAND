/***
 * Gallery Lightbox Component
 * Lightbox interaktif lengkap dengan navigasi keyboard (Esc, Left, Right), prev/next button, dan caption
 */

export class GalleryLightbox {
  constructor(items) {
    this.items = items || [];
    this.currentIndex = 0;
    this.isOpen = false;
    this.onKeyDown = this.handleKeyDown.bind(this);
  }

  setItems(items) {
    this.items = items;
  }

  open(index = 0) {
    this.currentIndex = index;
    this.isOpen = true;
    this.render();
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', this.onKeyDown);
  }

  close() {
    this.isOpen = false;
    const modal = document.getElementById('gallery-lightbox-modal');
    if (modal) {
      modal.classList.remove('open');
      setTimeout(() => modal.remove(), 250);
    }
    document.body.style.overflow = '';
    window.removeEventListener('keydown', this.onKeyDown);
  }

  next() {
    if (this.items.length === 0) return;
    this.currentIndex = (this.currentIndex + 1) % this.items.length;
    this.updateContent();
  }

  prev() {
    if (this.items.length === 0) return;
    this.currentIndex = (this.currentIndex - 1 + this.items.length) % this.items.length;
    this.updateContent();
  }

  handleKeyDown(e) {
    if (!this.isOpen) return;
    if (e.key === 'Escape') this.close();
    else if (e.key === 'ArrowRight') this.next();
    else if (e.key === 'ArrowLeft') this.prev();
  }

  updateContent() {
    const item = this.items[this.currentIndex];
    if (!item) return;

    const img = document.getElementById('lightbox-current-img');
    const title = document.getElementById('lightbox-caption-title');
    const meta = document.getElementById('lightbox-caption-meta');
    const count = document.getElementById('lightbox-count');

    if (img) {
      img.src = item.image;
      img.alt = item.title;
    }
    if (title) title.textContent = item.title;
    if (meta) meta.textContent = `${item.category} • ${item.date} — ${item.description || ''}`;
    if (count) count.textContent = `${this.currentIndex + 1} / ${this.items.length}`;
  }

  render() {
    let modal = document.getElementById('gallery-lightbox-modal');
    if (modal) modal.remove();

    const item = this.items[this.currentIndex];
    if (!item) return;

    const html = `
      <div class="lightbox-modal open" id="gallery-lightbox-modal">
        <div class="lightbox-container">
          <button class="lightbox-close-btn" id="lightbox-btn-close" aria-label="Tutup Galeri">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>

          <button class="lightbox-nav-btn lightbox-nav-prev" id="lightbox-btn-prev" aria-label="Foto Sebelumnya">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 18 9 12 15 6"></polyline></svg>
          </button>

          <div class="lightbox-img-wrap">
            <img src="${item.image}" alt="${item.title}" id="lightbox-current-img" class="lightbox-img">
          </div>

          <button class="lightbox-nav-btn lightbox-nav-next" id="lightbox-btn-next" aria-label="Foto Berikutnya">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </button>

          <div class="lightbox-caption">
            <div id="lightbox-count" style="font-size: 0.8rem; color: #60a5fa; font-weight: 700; text-transform: uppercase; margin-bottom: 0.25rem;">
              ${this.currentIndex + 1} / ${this.items.length}
            </div>
            <div class="lightbox-caption-title" id="lightbox-caption-title">${item.title}</div>
            <div class="lightbox-caption-meta" id="lightbox-caption-meta">
              ${item.category} • ${item.date} — ${item.description || ''}
            </div>
          </div>
        </div>
      </div>
    `;

    document.body.insertAdjacentHTML('beforeend', html);

    document.getElementById('lightbox-btn-close')?.addEventListener('click', () => this.close());
    document.getElementById('lightbox-btn-prev')?.addEventListener('click', () => this.prev());
    document.getElementById('lightbox-btn-next')?.addEventListener('click', () => this.next());

    // Click on backdrop outside container to close
    document.getElementById('gallery-lightbox-modal')?.addEventListener('click', (e) => {
      if (e.target.id === 'gallery-lightbox-modal') this.close();
    });
  }
}
