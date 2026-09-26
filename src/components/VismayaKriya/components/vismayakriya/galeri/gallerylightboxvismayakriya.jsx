import React, { useEffect, useCallback } from 'react';

export function GalleryLightboxVismayakriya({ items = [], currentIndex = 0, isOpen = false, onClose, onIndexChange }) {
  const next = useCallback(() => {
    if (items.length === 0) return;
    const newIdx = (currentIndex + 1) % items.length;
    onIndexChange(newIdx);
  }, [items.length, currentIndex, onIndexChange]);

  const prev = useCallback(() => {
    if (items.length === 0) return;
    const newIdx = (currentIndex - 1 + items.length) % items.length;
    onIndexChange(newIdx);
  }, [items.length, currentIndex, onIndexChange]);

  const handleKeyDown = useCallback((e) => {
    if (!isOpen) return;
    if (e.key === 'Escape') onClose();
    else if (e.key === 'ArrowRight') next();
    else if (e.key === 'ArrowLeft') prev();
  }, [isOpen, onClose, next, prev]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen || items.length === 0) return null;

  const item = items[currentIndex];
  if (!item) return null;

  return (
    <div
      className="lightbox-modal open"
      id="gallery-lightbox-modal"
      onClick={(e) => {
        if (e.target.id === 'gallery-lightbox-modal') onClose();
      }}
    >
      <div className="lightbox-container">
        <button className="lightbox-close-btn" id="lightbox-btn-close" aria-label="Tutup Galeri" onClick={onClose}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>

        <button className="lightbox-nav-btn lightbox-nav-prev" id="lightbox-btn-prev" aria-label="Foto Sebelumnya" onClick={prev}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="15 18 9 12 15 6"></polyline></svg>
        </button>

        <div className="lightbox-img-wrap">
          <img src={item.image} alt={item.title} id="lightbox-current-img" className="lightbox-img" />
        </div>

        <button className="lightbox-nav-btn lightbox-nav-next" id="lightbox-btn-next" aria-label="Foto Berikutnya" onClick={next}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
        </button>

        <div className="lightbox-caption">
          <div id="lightbox-count" style={{ fontSize: '0.8rem', color: '#60a5fa', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.25rem' }}>
            {currentIndex + 1} / {items.length}
          </div>
          <div className="lightbox-caption-title" id="lightbox-caption-title">{item.title}</div>
          <div className="lightbox-caption-meta" id="lightbox-caption-meta">
            {item.category} • {item.date} — {item.description || ''}
          </div>
        </div>
      </div>
    </div>
  );
}
