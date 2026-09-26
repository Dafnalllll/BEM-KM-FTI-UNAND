import React, { useState, useEffect } from 'react';
import { api } from '../utils/api.js';
import { GalleryLightboxVismayakriya } from './gallerylightboxvismayakriya.jsx';

export function GaleriVismayakriya() {
  const [items, setItems] = useState([]);
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const categories = [
    { key: "all", label: "Semua Dokumentasi" },
    { key: "Kegiatan", label: "Kegiatan Akbar" },
    { key: "Pengabdian", label: "Pengabdian Masyarakat" },
    { key: "Akademik", label: "Akademik & Riset" },
    { key: "Rapat", label: "Rapat & Koordinasi" },
    { key: "Internal", label: "Internal Kabinet" },
    { key: "Eksternal", label: "Diplomasi Eksternal" }
  ];

  useEffect(() => {
    async function loadItems() {
      const data = await api.getGallery(activeCategory);
      setItems(data);
    }
    loadItems();
  }, [activeCategory]);

  const handleOpenLightbox = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="gallery-page">
      {/* Sub-Hero Banner */}
      <section className="section section-dark" style={{ paddingTop: '7rem', paddingBottom: '3.5rem', background: 'radial-gradient(circle at top, #101a33 0%, #070c18 100%)' }}>
        <div className="container text-center" style={{ textAlign: 'center' }}>
          <div className="section-tag">Jejak Langkah & Dokumentasi</div>
          <h1 className="section-title" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)' }}>Galeri Vismayakriya</h1>
          <p className="section-subtitle">
            Rekaman visual dedikasi, kebersamaan, dan dinamika pergerakan fungsionaris BEM KM FTI Universitas Andalas.
          </p>
          <div className="section-divider"></div>
        </div>
      </section>

      {/* GALLERY SECTION */}
      <section className="section section-dark-alt">
        <div className="container">
          {/* Category Filter Tabs */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.6rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
            {categories.map(c => (
              <button
                key={c.key}
                className={`pill-btn ${activeCategory === c.key ? 'active' : ''} gallery-filter-btn`}
                data-category={c.key}
                type="button"
                onClick={() => setActiveCategory(c.key)}
              >
                {c.label}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="gallery-grid" id="gallery-grid-container">
            {items.length === 0 ? (
              <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '4rem 1.5rem', background: 'rgba(16,26,51,0.5)', borderRadius: '16px' }}>
                <p style={{ color: '#94a3b8' }}>Belum ada dokumentasi pada kategori ini.</p>
              </div>
            ) : (
              items.map((item, index) => (
                <div
                  key={item.id || index}
                  className="gallery-item"
                  data-index={index}
                  onClick={() => handleOpenLightbox(index)}
                >
                  <img src={item.image} alt={item.title} className="gallery-thumb" loading="lazy" />
                  <div className="gallery-overlay">
                    <span className="gallery-cat-tag">{item.category}</span>
                    <h3 className="gallery-title">{item.title}</h3>
                    <div className="gallery-date">{item.date}</div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <GalleryLightboxVismayakriya
        items={items}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onIndexChange={(idx) => setLightboxIndex(idx)}
      />
    </div>
  );
}
