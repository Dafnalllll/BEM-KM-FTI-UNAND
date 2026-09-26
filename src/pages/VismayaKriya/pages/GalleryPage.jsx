import React, { useState, useEffect } from 'react';
import { api } from '../utils/api.js';
import { GalleryLightbox } from '../components/GalleryLightbox.jsx';

export function GalleryPage() {
  const [galleryItems, setGalleryItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const categories = [
    { id: 'all', label: 'Semua Dokumentasi' },
    { id: 'Internal', label: 'Internal Kabinet' },
    { id: 'Eksternal', label: 'Kegiatan Eksternal' },
    { id: 'Akademik', label: 'Akademik & Riset' },
    { id: 'Pengabdian', label: 'Pengabdian Masyarakat' },
    { id: 'Kegiatan', label: 'Ajang Ormawa & Seni' },
    { id: 'Rapat', label: 'Konsolidasi & Rapat' }
  ];

  useEffect(() => {
    api.getGallery(selectedCategory).then(setGalleryItems).catch(console.error);
  }, [selectedCategory]);

  return (
    <div className="gallery-page">
      {/* Sub-Hero Banner */}
      <section className="section section-dark" style={{ paddingTop: '7rem', paddingBottom: '3.5rem', background: 'radial-gradient(circle at top, #101a33 0%, #070c18 100%)' }}>
        <div className="container text-center" style={{ textAlign: 'center' }}>
          <div className="section-tag">Jejak Langkah & Momen</div>
          <h1 className="section-title" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)' }}>Galeri Dokumentasi</h1>
          <p className="section-subtitle">
            Rangkaian rekaman visual perjalanan pergerakan, pelayanan, dan selebrasi kebersamaan BEM KM FTI Kabinet Nexus Inspirasi.
          </p>
          <div className="section-divider"></div>
        </div>
      </section>

      {/* GALLERY SECTION */}
      <section className="section section-dark-alt" style={{ padding: '5rem 0' }}>
        <div className="container">
          {/* Filter Tabs */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
            {categories.map(cat => (
              <button
                key={cat.id}
                className={`pill-btn ${selectedCategory === cat.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat.id)}
                type="button"
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Gallery Masonry / Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {galleryItems.map((item, idx) => (
              <div
                key={item.id}
                className="card card-dark"
                onClick={() => setLightboxIndex(idx)}
                style={{ cursor: 'pointer', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
              >
                <div style={{ position: 'relative', width: '100%', height: '220px', overflow: 'hidden', background: '#050811' }}>
                  <img src={item.image} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s ease' }} className="news-thumb" />
                  <span className="badge" style={{ position: 'absolute', top: '1rem', left: '1rem', background: 'rgba(11,18,36,0.85)', color: '#60a5fa', border: '1px solid rgba(96,165,250,0.3)' }}>
                    {item.categoryLabel || item.category}
                  </span>
                </div>
                <div style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <div style={{ fontSize: '0.78rem', color: '#94a3b8', marginBottom: '0.35rem' }}>{item.date}</div>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#ffffff', lineHeight: 1.4 }}>{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <GalleryLightbox
          item={galleryItems[lightboxIndex]}
          onClose={() => setLightboxIndex(null)}
          onPrev={lightboxIndex > 0 ? () => setLightboxIndex(lightboxIndex - 1) : null}
          onNext={lightboxIndex < galleryItems.length - 1 ? () => setLightboxIndex(lightboxIndex + 1) : null}
        />
      )}
    </div>
  );
}

