import React from 'react';
import ReactDOM from 'react-dom';

export function GalleryLightbox({ item, onClose, onPrev, onNext }) {
  if (!item) return null;

  const modalContent = (
    <div className="modal-overlay open" id="gallery-lightbox-overlay" style={{ zIndex: 1060 }} onClick={onClose}>
      <div className="modal-dialog" style={{ maxWidth: '880px', padding: 0, overflow: 'hidden', background: '#070c18' }} onClick={(e) => e.stopPropagation()}>
        <div style={{ position: 'relative', width: '100%', maxHeight: '520px', overflow: 'hidden', background: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img src={item.image} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'contain', maxHeight: '520px' }} />
          
          <button className="modal-close-btn" onClick={onClose} aria-label="Tutup Lightbox" style={{ top: '1rem', right: '1rem' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>

          {onPrev && (
            <button
              onClick={onPrev}
              style={{
                position: 'absolute',
                left: '1rem',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'rgba(0,0,0,0.6)',
                color: '#fff',
                border: '1px solid rgba(255,255,255,0.2)',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6"></polyline></svg>
            </button>
          )}

          {onNext && (
            <button
              onClick={onNext}
              style={{
                position: 'absolute',
                right: '1rem',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'rgba(0,0,0,0.6)',
                color: '#fff',
                border: '1px solid rgba(255,255,255,0.2)',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </button>
          )}
        </div>

        <div style={{ padding: '1.75rem 2rem' }}>
          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '0.5rem' }}>
            <span className="badge" style={{ background: 'rgba(59,130,246,0.2)', color: '#60a5fa', border: '1px solid rgba(96,165,250,0.3)' }}>
              {item.categoryLabel || item.category}
            </span>
            <span style={{ fontSize: '0.85rem', color: '#94a3b8' }}>&bull; {item.date}</span>
          </div>
          <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.75rem' }}>{item.title}</h3>
          <p style={{ color: '#cbd5e1', fontSize: '0.95rem', lineHeight: 1.6, margin: 0 }}>{item.description}</p>
        </div>
      </div>
    </div>
  );

  return ReactDOM.createPortal(modalContent, document.body);
}
