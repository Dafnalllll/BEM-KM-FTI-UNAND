/***
 * GalleryPage Component (Galeri Dokumentasi)
 * Filter kategori kegiatan, tampilan grid masonry modern, dan Lightbox interaktif
 */

import { api } from '../utils/api.js';
import { GalleryLightbox } from '../components/GalleryLightbox.js';

export async function renderGalleryPage() {
  const initialItems = await api.getGallery();

  const categories = [
    { key: "all", label: "Semua Dokumentasi" },
    { key: "Kegiatan", label: "Kegiatan Akbar" },
    { key: "Pengabdian", label: "Pengabdian Masyarakat" },
    { key: "Akademik", label: "Akademik & Riset" },
    { key: "Rapat", label: "Rapat & Koordinasi" },
    { key: "Internal", label: "Internal Kabinet" },
    { key: "Eksternal", label: "Diplomasi Eksternal" }
  ];

  return `
    <div class="gallery-page">
      {/* Sub-Hero Banner */}
      <section class="section section-dark" style="padding-top: 7rem; padding-bottom: 3.5rem; background: radial-gradient(circle at top, #101a33 0%, #070c18 100%);">
        <div class="container text-center" style="text-align: center;">
          <div class="section-tag">Jejak Langkah & Dokumentasi</div>
          <h1 class="section-title" style="font-size: clamp(2.2rem, 4vw, 3.5rem);">Galeri Nexus Inspirasi</h1>
          <p class="section-subtitle">
            Rekaman visual dedikasi, kebersamaan, dan dinamika pergerakan fungsionaris BEM KM FTI Universitas Andalas.
          </p>
          <div class="section-divider"></div>
        </div>
      </section>

      {/* GALLERY SECTION */}
      <section class="section section-dark-alt">
        <div class="container">
          {/* Category Filter Tabs */}
          <div style="display: flex; justify-content: center; gap: 0.6rem; flex-wrap: wrap; margin-bottom: 3rem;">
            ${categories.map((c, i) => `
              <button class="pill-btn ${i === 0 ? 'active' : ''} gallery-filter-btn" data-category="${c.key}" type="button">
                ${c.label}
              </button>
            `).join('')}
          </div>

          {/* Gallery Grid */}
          <div class="gallery-grid" id="gallery-grid-container">
            ${renderGalleryItemsHtml(initialItems)}
          </div>
        </div>
      </section>
    </div>
  `;
}

function renderGalleryItemsHtml(items) {
  if (items.length === 0) {
    return `
      <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1.5rem; background: rgba(16,26,51,0.5); border-radius: 16px;">
        <p style="color: #94a3b8;">Belum ada dokumentasi pada kategori ini.</p>
      </div>
    `;
  }

  return items.map((item, index) => `
    <div class="gallery-item" data-index="${index}">
      <img src="${item.image}" alt="${item.title}" class="gallery-thumb" loading="lazy">
      <div class="gallery-overlay">
        <span class="gallery-cat-tag">${item.category}</span>
        <h3 class="gallery-title">${item.title}</h3>
        <div class="gallery-date">${item.date}</div>
      </div>
    </div>
  `).join('');
}

export function initGalleryPageEvents() {
  let currentItems = [];
  const lightbox = new GalleryLightbox([]);

  async function loadItems(cat = 'all') {
    currentItems = await api.getGallery(cat);
    lightbox.setItems(currentItems);
    const container = document.getElementById('gallery-grid-container');
    if (container) {
      container.innerHTML = renderGalleryItemsHtml(currentItems);
      bindItemClicks();
    }
  }

  function bindItemClicks() {
    document.querySelectorAll('.gallery-item').forEach(item => {
      item.addEventListener('click', () => {
        const index = parseInt(item.getAttribute('data-index'), 10) || 0;
        lightbox.open(index);
      });
    });
  }

  // Filter Buttons
  document.querySelectorAll('.gallery-filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.gallery-filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.getAttribute('data-category');
      loadItems(cat);
    });
  });

  // Initial load
  loadItems('all');
}

